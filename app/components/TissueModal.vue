<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
import { X as XIcon, ChevronRight } from "lucide-vue-next";
import { NODES } from "~/data/tissues";
import { iconFor } from "~/utils/icons";

const { selected: n, isOpen, close, open } = useTissueModal();

const children = computed(() =>
  (n.value?.children ?? []).filter((c) => NODES[c]).map((c) => NODES[c]),
);

const category = computed(() => {
  if (!n.value) return "";
  if (n.value.kind === "concept") return "Konsep fungsi";
  if (n.value.branch === "animal") return "Jaringan Hewan";
  if (n.value.branch === "plant") return "Jaringan Tumbuhan";
  return "Konsep induk";
});
</script>

<template>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog class="relative z-[80]" @close="close()">
      <TransitionChild
        enter="duration-200 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-150 ease-in" leave-from="opacity-100" leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-forest-950/70 backdrop-blur-sm" aria-hidden="true" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <TransitionChild
            enter="duration-200 ease-out" enter-from="opacity-0 translate-y-6 scale-95" enter-to="opacity-100 translate-y-0 scale-100"
            leave="duration-150 ease-in" leave-from="opacity-100" leave-to="opacity-0 translate-y-4 scale-95"
          >
            <DialogPanel class="relative w-full max-w-2xl rounded-3xl border border-forest-900/10 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8 dark:border-white/10 dark:bg-forest-900">
              <button
                class="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-xl border border-forest-900/10 text-forest-800 transition hover:bg-forest-100 dark:border-white/10 dark:text-forest-100 dark:hover:bg-forest-800"
                aria-label="Tutup"
                @click="close()"
              >
                <XIcon class="h-4.5 w-4.5" />
              </button>

              <template v-if="n">
                <img
                  v-if="n.img"
                  :src="n.img"
                  :alt="n.title"
                  class="h-56 w-full rounded-2xl border border-forest-900/10 object-cover sm:h-64 dark:border-white/10"
                  referrerpolicy="no-referrer"
                >
                <p v-if="n.imgCap" class="mt-2.5 text-[0.83rem] text-forest-800/70 dark:text-forest-100/65">
                  {{ n.imgCap }}
                  <a
                    v-if="n.imgPage"
                    :href="n.imgPage"
                    target="_blank"
                    rel="noopener"
                    class="font-semibold text-forest-600 underline decoration-dotted dark:text-forest-300"
                  >Sumber gambar: Wikimedia Commons</a>
                </p>

                <p class="eyebrow mt-5">{{ category }}</p>
                <h2 class="flex items-center gap-2.5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  <component
                    :is="iconFor(n.icon)"
                    class="h-7 w-7 shrink-0 text-forest-600 dark:text-forest-400"
                    :stroke-width="2"
                    aria-hidden="true"
                  />
                  {{ n.title }}
                </h2>

                <div class="prose-custom mt-2" v-html="n.detail" />

                <div v-if="n.funsi?.length" class="mt-5">
                  <h3 class="font-display text-lg font-semibold">Fungsi utama</h3>
                  <div class="mt-2 flex flex-wrap gap-2">
                    <span
                      v-for="f in n.funsi"
                      :key="f"
                      class="rounded-full border border-forest-600/30 bg-forest-600/10 px-3 py-1 text-[0.78rem] font-bold text-forest-700 dark:border-forest-400/30 dark:bg-forest-400/10 dark:text-forest-200"
                    >{{ f }}</span>
                  </div>
                </div>

                <div v-if="children.length" class="mt-5">
                  <h3 class="font-display text-lg font-semibold">Telusuri cabang</h3>
                  <div class="mt-2 flex flex-wrap gap-2">
                    <button
                      v-for="c in children"
                      :key="c.id"
                      class="flex items-center gap-1.5 rounded-full border border-forest-900/15 px-3.5 py-1.5 text-[0.85rem] font-bold transition hover:border-forest-500 hover:bg-forest-100 dark:border-white/15 dark:hover:bg-forest-800"
                      @click="open(c)"
                    >
                      <component :is="iconFor(c.icon)" class="h-4 w-4 text-forest-600 dark:text-forest-400" aria-hidden="true" />
                      {{ c.title }}
                      <ChevronRight class="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </template>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
