import type { TissueNode } from "./tissues";
import { NODES } from "./tissues";

export interface FlowNodeData extends TissueNode {
  kind?: "node" | "concept";
  text?: string;
}

/** Edge pohon parent ke anak dari NODES. Setiap node memiliki satu parent. */
export const TREE_EDGES: [string, string][] = (() => {
  const edges: [string, string][] = [];
  for (const id of Object.keys(NODES)) {
    for (const c of NODES[id]?.children ?? []) {
      if (NODES[c]) edges.push([id, c]);
    }
  }
  return edges;
})();

export const childrenOf = (id: string): string[] =>
  TREE_EDGES.filter(([a]) => a === id).map(([, b]) => b);

export const parentOf: Record<string, string> = Object.fromEntries(
  TREE_EDGES.map(([a, b]) => [b, a]),
);