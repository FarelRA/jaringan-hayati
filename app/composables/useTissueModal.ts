import type { FlowNodeData } from "~/data/graph";

export function useTissueModal() {
  const selected = useState<FlowNodeData | null>("tissue-modal", () => null);
  const isOpen = computed(() => selected.value !== null);

  function open(data: FlowNodeData) {
    selected.value = data;
    if (import.meta.client) document.body.style.overflow = "hidden";
  }

  function close() {
    selected.value = null;
    if (import.meta.client) document.body.style.overflow = "";
  }

  function toggle(data: FlowNodeData) {
    if (selected.value?.id === data.id) close();
    else open(data);
  }

  // tutup dengan Esc
  function onKey(e: KeyboardEvent) {
    if (e.key === "Escape" && selected.value) close();
  }

  if (import.meta.client) {
    onMounted(() => window.addEventListener("keydown", onKey));
    onUnmounted(() => window.removeEventListener("keydown", onKey));
  }

  return { selected, isOpen, open, close, toggle };
}
