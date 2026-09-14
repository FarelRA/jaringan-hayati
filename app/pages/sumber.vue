<script setup lang="ts">
import { IMG, SOURCES } from "~/data/tissues";

const samples = [
  { p: "d/d3/Onion_root_mitosis.jpg/960px-Onion_root_mitosis.jpg", alt: "Mitosis pada ujung akar bawang" },
  { p: "f/fb/Lycopodium_shoot_apex.png/960px-Lycopodium_shoot_apex.png", alt: "Pucuk Lycopodium dengan meristem apikal" },
  { p: "c/c6/Blood_film_01.jpg/960px-Blood_film_01.jpg", alt: "Sediaan darah tepi manusia" },
];

useSeoMeta({
  title: "Sumber dan Referensi: Jaringan Hayati",
  description:
    "Referensi saintifik aplikasi: Campbell, Solomon, OpenStax, Esau's Plant Anatomy, KBBI, dan Wikimedia Commons.",
});
</script>

<template>
  <main class="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6">
    <span class="eyebrow">Sumber dan Referensi</span>
    <h1 class="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Dasar Saintifik</h1>
    <p class="mt-3 max-w-[62ch] text-[1.05rem] text-forest-800/75 dark:text-forest-100/70">
      Seluruh materi disusun dari buku teks kuliah dan sumber terbuka berikut. Gambar
      mikroskopis serta diagram berasal dari Wikimedia Commons dengan lisensi CC BY-SA
      atau publik domain, dan atribusinya tersedia pada setiap modal node.
    </p>

    <ol class="mt-8 divide-y divide-dashed divide-forest-900/10 rounded-3xl border border-forest-900/10 bg-white px-6 py-2 shadow-[var(--shadow-card)] dark:divide-white/10 dark:border-white/10 dark:bg-forest-900">
      <li v-for="(s, i) in SOURCES" :key="i" class="flex items-baseline gap-4 py-4">
        <span class="font-display min-w-8 font-bold text-gold-600 dark:text-gold-400">{{ String(i + 1).padStart(2, "0") }}</span>
        <span>
          {{ s.t }}
          <a :href="s.u" target="_blank" rel="noopener" class="font-semibold text-forest-600 underline decoration-dotted dark:text-forest-400">Tautan</a>
        </span>
      </li>
    </ol>

    <div class="mt-10 grid gap-6 sm:grid-cols-3">
      <figure
        v-for="s in samples"
        :key="s.p"
        class="overflow-hidden rounded-3xl border border-forest-900/10 bg-white p-2.5 shadow-[var(--shadow-card)] dark:border-white/10 dark:bg-forest-900"
      >
        <img :src="IMG(s.p)" :alt="s.alt" class="h-40 w-full rounded-2xl object-cover" referrerpolicy="no-referrer">
        <figcaption class="px-2 pb-1.5 pt-2.5 text-[0.8rem] text-forest-800/60 dark:text-forest-100/55">
          {{ s.alt }}. Wikimedia Commons, CC BY-SA atau publik domain.
        </figcaption>
      </figure>
    </div>
  </main>
</template>
