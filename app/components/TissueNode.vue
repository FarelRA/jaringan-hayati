<script setup lang="ts">
import type { TissueNode } from "~/data/tissues";
import { NODES } from "~/data/tissues";
import { iconFor } from "~/utils/icons";

const props = defineProps<{ data: TissueNode & { kind?: string; text?: string } }>();

const { open } = useTissueModal();

const children = computed(() =>
  (props.data.children ?? []).filter((c) => NODES[c]),
);
</script>

<template>
  <div
    class="tissue-card"
    :data-branch="data.branch"
    :data-kind="data.kind ?? 'node'"
    role="button"
    :tabindex="0"
    :aria-label="data.title"
    @click.stop="open(data as never)"
    @keydown.enter.prevent="open(data as never)"
  >
    <span v-if="children.length" class="badge-count">{{ children.length }}</span>
    <img
      v-if="data.img"
      :src="data.img"
      :alt="data.title"
      loading="lazy"
      referrerpolicy="no-referrer"
    >
    <p class="t">
      <component :is="iconFor(data.icon)" class="t-ic" :stroke-width="2.2" aria-hidden="true" />
      <span>{{ data.title }}</span>
    </p>
  </div>
</template>

<style scoped>
.tissue-card {
  position: relative;
  width: 100%;
  border-radius: 1rem;
  padding: 0.45rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.18s ease, border-color 0.18s, box-shadow 0.18s;
}
.tissue-card:hover,
.tissue-card:focus-visible {
  transform: translateY(-2px) scale(1.03);
  outline: none;
}
.tissue-card img {
  width: 100%;
  height: 84px;
  object-fit: cover;
  border-radius: 0.7rem;
  pointer-events: none;
}
.tissue-card .t {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  margin-top: 0.4rem;
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.2;
  text-wrap: balance;
}
.tissue-card .t-ic {
  width: 0.95rem;
  height: 0.95rem;
  flex: none;
}
.badge-count {
  position: absolute;
  top: -0.45rem;
  right: -0.45rem;
  z-index: 5;
  display: grid;
  place-items: center;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 999px;
  font-size: 0.65rem;
  font-weight: 800;
  color: var(--badge-fg);
  background: var(--badge-bg);
  border: 1px solid var(--badge-border);
}
</style>
