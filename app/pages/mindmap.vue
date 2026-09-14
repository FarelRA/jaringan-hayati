<script setup lang="ts">
import { NODES } from "~/data/tissues";

useSeoMeta({
  title: "Mind Map Interaktif: Jaringan Hayati",
  description:
    "Mind map interaktif jaringan tumbuhan dan hewan dengan 32 node bergambar mikroskopis. Klik node untuk membuka penjelasan lengkapnya.",
});
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
    <span class="eyebrow">Mind Map Interaktif</span>
    <h1 class="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Peta Pikiran: Jaringan Hayati</h1>
    <p class="mt-3 max-w-[62ch] text-[1.05rem] text-forest-800/75 dark:text-forest-100/70">
      Seluruh jaringan tumbuhan dan hewan dalam satu graf yang saling terhubung.
      Setiap node memuat gambar mikroskopis asli dan dapat diklik untuk membuka
      penjelasan lengkap beserta sumbernya.
    </p>

    <div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.85rem] text-forest-800/70 dark:text-forest-100/60">
      <span class="flex items-center gap-2"><i class="h-3 w-3 rounded bg-gold-400" />Konsep induk</span>
      <span class="flex items-center gap-2"><i class="h-3 w-3 rounded bg-forest-500" />Jaringan tumbuhan</span>
      <span class="flex items-center gap-2"><i class="h-3 w-3 rounded bg-rose-leaf" />Jaringan hewan</span>
    </div>

    <TissueFlow mode="mindmap" class="mt-5" />
  </main>
</template>
