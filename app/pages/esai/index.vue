<script setup lang="ts">
import { ESSAYS } from "~/data/tissues";
import { iconFor } from "~/utils/icons";
import { ArrowRight } from "lucide-vue-next";

useSeoMeta({
  title: "Esai Saintifik: Jaringan Hayati",
  description:
    "Delapan esai saintifik tentang jaringan tumbuhan dan hewan, dari meristem hingga neuron, dengan gambar mikroskopis dari Wikimedia Commons.",
});
</script>

<template>
  <main class="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6">
    <span class="eyebrow">Esai Saintifik</span>
    <h1 class="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Membaca Jaringan, Memahami Kehidupan</h1>
    <p class="mt-3 max-w-[62ch] text-[1.05rem] text-forest-800/75 dark:text-forest-100/70">
      Kumpulan esai panjang yang menafsirkan materi jaringan secara mendalam.
      Disusun dari buku teks kuliah standar dengan gambar berlisensi terbuka.
    </p>

    <div class="mt-8 grid gap-6 md:grid-cols-2">
      <article
        v-for="e in ESSAYS"
        :key="e.id"
        class="group flex flex-col overflow-hidden rounded-3xl border border-forest-900/10 bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-forest-400 dark:border-white/10 dark:bg-forest-900"
      >
        <NuxtLink :to="`/esai/${e.id}`" class="flex h-full flex-col" :aria-label="`Baca esai: ${e.title}`">
          <div class="relative overflow-hidden">
            <img
              :src="e.img"
              :alt="e.imgCap"
              class="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              referrerpolicy="no-referrer"
            >
            <span class="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-xl bg-cream-50/95 text-forest-700 shadow-md backdrop-blur dark:bg-forest-950/90 dark:text-forest-300">
              <component :is="iconFor(e.icon)" class="h-5 w-5" :stroke-width="2" aria-hidden="true" />
            </span>
          </div>
          <div class="flex flex-1 flex-col p-6">
            <h2 class="font-display text-xl font-semibold leading-snug">{{ e.title }}</h2>
            <p class="mt-2 flex-1 text-[0.95rem] leading-relaxed text-forest-800/70 dark:text-forest-100/65">
              {{ e.lead }}
            </p>
            <span class="mt-4 inline-flex items-center gap-1.5 text-[0.9rem] font-bold text-forest-600 transition group-hover:gap-2.5 dark:text-forest-400">
              Baca selengkapnya
              <ArrowRight class="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </NuxtLink>
      </article>
    </div>
  </main>
</template>
