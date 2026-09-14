<script setup lang="ts">
import {
  VueFlow,
  useVueFlow,
  type Edge,
  type Node,
  type NodeComponent,
  type NodeMouseEvent,
  Position,
  MarkerType,
} from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { Controls } from "@vue-flow/controls";
import { MiniMap } from "@vue-flow/minimap";
import dagre from "dagre";
import { NODES, CM_NODES, CM_EDGES, CM_EXTRA } from "~/data/tissues";
import { parentOf } from "~/data/graph";
import type { FlowNodeData } from "~/data/graph";
import TissueNodeVue from "./TissueNode.vue";

const props = defineProps<{ mode: "mindmap" | "concept" }>();

const { open } = useTissueModal();
const { fitView, onPaneReady } = useVueFlow();

const ready = ref(false);
// shallowRef sesuai rekomendasi vue-flow: node/edge selalu diganti sebagai array baru,
// bukan dimutasi di tempat (juga menghindari instansiasi tipe UnwrapRef yang terlalu dalam).
const nodes = shallowRef<Node[]>([]);
const edges = shallowRef<Edge[]>([]);

interface Size { w: number; h: number }
const FALLBACK: Size = { w: 172, h: 140 };

function dataFor(id: string): FlowNodeData | null {
  if (NODES[id]) return NODES[id];
  const extra = CM_EXTRA[id];
  if (extra)
    return {
      id,
      title: extra.title,
      icon: extra.icon,
      branch: "root",
      kind: "concept",
      short: extra.text,
      detail: `<p>${extra.text}</p>`,
      img: "",
    };
  return null;
}

/* ---------- graph sumber ---------- */
function initGraph() {
  if (props.mode === "mindmap") {
    nodes.value = Object.values(NODES).map((n) => ({
      id: n.id,
      type: "tissue",
      position: { x: 0, y: 0 },
      data: n,
    }));
    edges.value = Object.keys(NODES).flatMap((id) =>
      (NODES[id]?.children ?? []).filter((c) => NODES[c]).map((c) => ({
        id: `${id}->${c}`,
        source: id,
        target: c,
        style: { strokeWidth: 2 },
      })),
    );
  } else {
    nodes.value = CM_NODES.flatMap((cn) => {
      const d = dataFor(cn.id);
      return d ? [{ id: cn.id, type: "tissue", position: { x: 0, y: 0 }, data: d }] : [];
    });
    edges.value = CM_EDGES.map(({ a, b, label }) => ({
      id: `${a}->${b}`,
      source: a,
      target: b,
      label,
      labelShowBg: true,
      labelBgPadding: [6, 3] as [number, number],
      labelBgBorderRadius: 6,
      labelStyle: { fontSize: 11.5, fontWeight: 600 },
      markerEnd: MarkerType.ArrowClosed,
      style: { strokeWidth: 1.8 },
    }));
  }
}

/* ---------- ukur dimensi node asli dari DOM (tanpa hardcode) ---------- */
function measureNodes(): Record<string, Size> {
  const sizes: Record<string, Size> = {};
  document
    .querySelectorAll<HTMLElement>(".vue-flow__node")
    .forEach((el) => {
      const id = el.getAttribute("data-id");
      if (!id) return;
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0)
        sizes[id] = { w: Math.ceil(rect.width), h: Math.ceil(rect.height) };
    });
  return sizes;
}

/** menunggu semua gambar di dalam node selesai dimuat agar ukuran kartu final */
function whenNodeImagesSettled(timeout = 4000): Promise<void> {
  const imgs = [...document.querySelectorAll<HTMLImageElement>(".vue-flow__node img")];
  const pending = imgs.filter((i) => !i.complete);
  if (!pending.length) return Promise.resolve();
  return new Promise((resolve) => {
    let left = pending.length;
    const done = () => {
      if (--left <= 0) resolve();
    };
    pending.forEach((i) => {
      i.addEventListener("load", done, { once: true });
      i.addEventListener("error", done, { once: true });
    });
    setTimeout(resolve, timeout);
  });
}

/* ---------- apakah id termasuk subpohon hewan ---------- */
function inAnimalSubtree(id: string): boolean {
  let cur: string | undefined = id;
  while (cur) {
    if (cur === "hewan") return true;
    if (cur === "jaringan") return false;
    cur = parentOf[cur];
  }
  return false;
}

/* ---------- layout dagre dinamis ---------- */
function relayout() {
  const sizes = measureNodes();
  const g = new dagre.graphlib.Graph();
  g.setGraph({
    rankdir: "LR",
    nodesep: 34,
    edgesep: 18,
    ranksep: props.mode === "mindmap" ? 200 : 260,
    marginx: 30,
    marginy: 30,
  });
  g.setDefaultEdgeLabel(() => ({}));

  for (const n of nodes.value) {
    const s = sizes[n.id] ?? FALLBACK;
    g.setNode(n.id, { width: s.w, height: s.h });
  }
  for (const e of edges.value) g.setEdge(e.source, e.target);
  dagre.layout(g);

  const root = g.hasNode("jaringan") ? g.node("jaringan") : null;

  nodes.value = nodes.value.map((n) => {
    const s = sizes[n.id] ?? FALLBACK;
    const nn = g.node(n.id) as { x: number; y: number } | undefined;
    if (!nn) return n;
    let x = nn.x - s.w / 2;
    const y = nn.y - s.h / 2;
    let sourcePosition = Position.Right;
    let targetPosition = Position.Left;

    if (props.mode === "mindmap" && root) {
      if (n.id === "jaringan") {
        x = nn.x - s.w / 2;
      } else if (inAnimalSubtree(n.id)) {
        // cermin ke sisi kiri root
        x = -(nn.x - root.x) - s.w;
        sourcePosition = Position.Left;
        targetPosition = Position.Right;
      }
    }
    return { ...n, position: { x, y }, sourcePosition, targetPosition };
  });

  // root memiliki dua arah: ke tumbuhan (kanan) dan ke hewan (kiri)
  if (props.mode === "mindmap") {
    edges.value = edges.value.map((e) => {
      if (e.source !== "jaringan") return e;
      const animal = inAnimalSubtree(e.target);
      return {
        ...e,
        sourcePosition: animal ? Position.Left : Position.Right,
        targetPosition: animal ? Position.Right : Position.Left,
      };
    });
  }
}

async function layoutAndFit() {
  ready.value = false;
  await nextTick();
  await whenNodeImagesSettled();
  await relayout();
  await nextTick();
  await fitView({ padding: 0.1, maxZoom: 1 });
  await nextTick();
  ready.value = true;
}

initGraph();
onPaneReady(() => void layoutAndFit());
onMounted(() => {
  // setelah font & gambar termuat, ukur ulang lalu pas-kan sekali lagi
  window.addEventListener("load", () => void layoutAndFit(), { once: true });
  watch(
    () => props.mode,
    () => void layoutAndFit(),
  );
});

function onNodeClick({ node }: NodeMouseEvent) {
  open(node.data as FlowNodeData);
}

const minimapNodeColor = (n: Node) => {
  const b = (n.data as FlowNodeData).branch;
  return b === "plant" ? "#349768" : b === "animal" ? "#f2879b" : "#e8c46b";
};

// TissueNode hanya mendeklarasikan prop `data`; prop NodeProps lainnya
// diteruskan otomatis sebagai attrs oleh vue-flow.
const nodeTypes = { tissue: TissueNodeVue as unknown as NodeComponent };
</script>

<template>
  <div class="flow-shell">
    <VueFlow
      v-model:nodes="nodes"
      v-model:edges="edges"
      :node-types="nodeTypes"
      :min-zoom="0.15"
      :max-zoom="2.5"
      :nodes-connectable="false"
      :elements-selectable="false"
      class="transition-opacity duration-300"
      :class="ready ? 'opacity-100' : 'opacity-0'"
      @node-click="onNodeClick"
    >
      <Background :gap="24" />
      <Controls position="bottom-left" :show-interactive="false" />
      <MiniMap
        position="bottom-right"
        pannable
        zoomable
        :node-color="minimapNodeColor"
        :node-stroke-width="0"
      />
    </VueFlow>
    <p class="flow-hint">
      Klik node untuk penjelasan, seret kanvas untuk menggeser, gulir untuk memperbesar
    </p>
  </div>
</template>

<style>
.flow-shell {
  position: relative;
  height: clamp(480px, 72vh, 780px);
  width: 100%;
  overflow: hidden;
  border-radius: 1.25rem;
  border: 1px solid rgb(23 64 48 / 0.12);
  background: rgb(250 247 238 / 0.6);
}
.dark .flow-shell {
  border-color: rgb(255 255 255 / 0.1);
  background: rgb(18 29 24 / 0.5);
}

:root {
  --cm-label-bg: #ffffff;
  --cm-label-fg: #1e6144;
  --node-card-bg: #ffffff;
  --node-card-border: rgb(23 64 48 / 0.14);
  --node-card-title: #174030;
  --badge-bg: #e8c46b;
  --badge-fg: #0a241b;
  --badge-border: rgb(23 64 48 / 0.25);
}
.dark {
  --cm-label-bg: #1b4034;
  --cm-label-fg: #bce3cd;
  --node-card-bg: #16241e;
  --node-card-border: rgb(255 255 255 / 0.12);
  --node-card-title: #e9f0ea;
  --badge-bg: #e8c46b;
  --badge-fg: #0a241b;
  --badge-border: rgb(255 255 255 / 0.15);
}

.vue-flow__node-tissue { width: 176px; }
.vue-flow__node-tissue .tissue-card {
  border: 1px solid var(--node-card-border);
  background: var(--node-card-bg);
}
.vue-flow__node-tissue .tissue-card .t { color: var(--node-card-title); }
.vue-flow__node-tissue .tissue-card:hover { border-color: #349768; }
.vue-flow__node-tissue[data-branch="plant"] .tissue-card { border-top: 3px solid #349768; }
.vue-flow__node-tissue[data-branch="animal"] .tissue-card { border-top: 3px solid #f2879b; }
.vue-flow__node-tissue[data-branch="root"] .tissue-card { border-top: 3px solid #e8c46b; }
.vue-flow__node-tissue[data-kind="concept"] .tissue-card {
  width: 150px;
  border-style: dashed;
  background: color-mix(in srgb, #e8c46b 12%, var(--node-card-bg));
}

.flow-hint {
  pointer-events: none;
  position: absolute;
  bottom: 0.75rem;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);
  white-space: nowrap;
  border-radius: 999px;
  padding: 0.3rem 0.9rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: #dcf1e4;
  background: rgb(10 36 27 / 0.75);
  backdrop-filter: blur(4px);
}
@media (max-width: 640px) {
  .flow-hint { display: none; }
}

.vue-flow__edge-textbg { fill: var(--cm-label-bg); }
.vue-flow__edge-text { fill: var(--cm-label-fg); font-weight: 600; }

.vue-flow__controls-button {
  background: #ffffff;
  border-bottom: 1px solid rgb(23 64 48 / 0.15);
}
.dark .vue-flow__controls-button {
  background: #16241e;
  border-color: rgb(255 255 255 / 0.12);
}
.vue-flow__controls-button svg { fill: currentColor; color: #1b4d38; }
.dark .vue-flow__controls-button svg { color: #dcf1e4; }

.vue-flow__minimap {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgb(128 128 128 / 0.25);
}
</style>
