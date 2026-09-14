<script setup lang="ts">
import { Moon, Sun, Leaf } from "lucide-vue-next";
import { useDark, useToggle } from "@vueuse/core";

// initialValue "dark" harus sama dengan default guard anti-kilau
// di nuxt.config.ts (storage kosong berarti mode gelap).
const isDark = useDark({ initialValue: "dark" });
const toggleDark = useToggle(isDark);

const links = [
  { to: "/mindmap", label: "Mind Map" },
  { to: "/konsep", label: "Peta Konsep" },
  { to: "/esai", label: "Esai" },
  { to: "/kuis", label: "Kuis" },
  { to: "/sumber", label: "Sumber" },
];

const route = useRoute();
const progress = ref(0);

function onScroll() {
  const h = document.documentElement;
  progress.value = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100;
}

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <div class="fixed inset-x-0 top-0 z-[70] h-[3px]">
    <div
      class="h-full bg-gradient-to-r from-forest-500 via-gold-400 to-rose-leaf transition-[width] duration-100"
      :style="{ width: progress + '%' }"
    />
  </div>

  <header class="sticky top-0 z-[60] border-b border-forest-900/10 bg-cream-50/85 backdrop-blur-xl dark:border-white/10 dark:bg-forest-950/85">
    <nav class="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:px-6">
      <NuxtLink to="/" class="group flex items-center gap-2.5" aria-label="Beranda">
        <Leaf class="h-6 w-6 text-forest-600 dark:text-forest-400" :stroke-width="2.2" aria-hidden="true" />
        <span class="font-display hidden text-lg font-bold tracking-tight sm:block">
          Jaringan<span class="text-forest-600 dark:text-forest-400">Hayati</span>
        </span>
      </NuxtLink>

      <div class="scrollbar-thin mx-auto flex items-center gap-1 overflow-x-auto">
        <NuxtLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="whitespace-nowrap rounded-full px-3 py-1.5 text-[0.88rem] font-semibold transition"
          :class="
            route.path === l.to
              ? 'bg-forest-600 text-cream-50 dark:bg-forest-400 dark:text-forest-950'
              : 'text-forest-700/70 hover:bg-forest-100 hover:text-forest-900 dark:text-forest-200/70 dark:hover:bg-forest-800 dark:hover:text-forest-50'
          "
        >{{ l.label }}</NuxtLink>
      </div>

      <button
        class="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-forest-900/10 bg-white text-forest-800 transition hover:bg-forest-100 dark:border-white/10 dark:bg-forest-900 dark:text-forest-100 dark:hover:bg-forest-800"
        :aria-label="isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'"
        @click="toggleDark()"
      >
        <Sun v-if="isDark" class="h-4.5 w-4.5" />
        <Moon v-else class="h-4.5 w-4.5" />
      </button>
    </nav>
  </header>
</template>
