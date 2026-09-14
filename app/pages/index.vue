<script setup lang="ts">
import { NODES, type TissueNode } from "~/data/tissues";
import { iconFor } from "~/utils/icons";

// Data statik: id-id berikut dijamin ada pada NODES.
const heroNode = NODES.tumbuhan as TissueNode;
const previewNodes = (["meristem", "xilem", "saraf"] as const).map(
  (id) => NODES[id] as TissueNode,
);

const gateways = [
  { to: "/mindmap", icon: "network", title: "Mind Map", desc: "Jelajahi seluruh jaringan dalam satu graf yang saling terhubung, lengkap dengan gambar mikroskopis." },
  { to: "/konsep", icon: "git-branch", title: "Peta Konsep", desc: "Pahami hubungan antar jaringan lewat proposisi berlabel pada setiap garis penghubung." },
  { to: "/kuis", icon: "list-checks", title: "Kuis Bertingkat", desc: "Tiga level soal dengan pembahasan, dari definisi dasar hingga mekanisme lanjutan." },
] as const;

useSeoMeta({
  title: "JaringanHayati: Mind Map dan Peta Konsep Jaringan Hayati",
  description:
    "Aplikasi belajar interaktif untuk mengeksplorasi jaringan tumbuhan dan hewan melalui mind map, peta konsep, esai saintifik, dan kuis bertingkat.",
});
</script>

<template>
  <main class="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6">
    <section class="grid items-center gap-10 py-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <span class="eyebrow">Media Belajar Interaktif</span>
        <h1 class="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
          Jaringan Hayati,<br>
          <span class="text-forest-600 dark:text-forest-400">dipetakan.</span>
        </h1>
        <p class="mt-5 max-w-[54ch] text-[1.08rem] leading-relaxed text-forest-800/80 dark:text-forest-100/70">
          Aplikasi belajar Biologi untuk mengeksplorasi jaringan tumbuhan dan jaringan hewan.
          Telusuri keterkaitan antar jaringan melalui mind map dan peta konsep, baca penjelasan
          lengkapnya, perdalam wawasan lewat esai saintifik, lalu uji pemahaman dengan kuis bertingkat.
        </p>
        <div class="mt-7 flex flex-wrap gap-3">
          <NuxtLink
            to="/mindmap"
            class="rounded-full bg-forest-600 px-6 py-3 text-sm font-bold text-cream-50 shadow-lg shadow-forest-600/25 transition hover:-translate-y-0.5 dark:bg-forest-400 dark:text-forest-950"
          >Mulai menjelajah</NuxtLink>
          <NuxtLink
            to="/esai"
            class="rounded-full border border-forest-900/15 bg-white px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-forest-100 dark:border-white/15 dark:bg-forest-900 dark:hover:bg-forest-800"
          >Baca esainya</NuxtLink>
        </div>
      </div>

      <div class="relative hidden lg:block">
        <img
          :src="heroNode.img"
          alt="Penampang daun dari mikroskop cahaya, Wikimedia Commons"
          class="aspect-[4/3.2] w-full rounded-[26px] border border-forest-900/10 object-cover shadow-[var(--shadow-card)] dark:border-white/10"
          referrerpolicy="no-referrer"
        >
      </div>
    </section>

    <section class="mt-14">
      <span class="eyebrow">Tiga cara belajar</span>
      <h2 class="font-display text-3xl font-semibold tracking-tight">Pilih jalurmu</h2>
      <div class="mt-6 grid gap-6 md:grid-cols-3">
        <NuxtLink
          v-for="g in gateways"
          :key="g.to"
          :to="g.to"
          class="group rounded-3xl border border-forest-900/10 bg-white p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1.5 hover:border-forest-500 dark:border-white/10 dark:bg-forest-900"
        >
          <span class="grid h-12 w-12 place-items-center rounded-2xl bg-forest-600/10 text-forest-600 transition group-hover:bg-forest-600 group-hover:text-cream-50 dark:bg-forest-400/10 dark:text-forest-400 dark:group-hover:bg-forest-400 dark:group-hover:text-forest-950">
            <component :is="iconFor(g.icon)" class="h-6 w-6" :stroke-width="2" aria-hidden="true" />
          </span>
          <h3 class="font-display mt-4 text-xl font-semibold">{{ g.title }}</h3>
          <p class="mt-2 text-[0.93rem] text-forest-800/70 dark:text-forest-100/65">{{ g.desc }}</p>
        </NuxtLink>
      </div>
    </section>

    <section class="mt-14">
      <span class="eyebrow">Pratinjau materi</span>
      <h2 class="font-display text-3xl font-semibold tracking-tight">Contoh node dari mind map</h2>
      <div class="mt-6 grid gap-6 md:grid-cols-3">
        <article
          v-for="n in previewNodes"
          :key="n.id"
          class="group overflow-hidden rounded-3xl border border-forest-900/10 bg-white shadow-[var(--shadow-card)] dark:border-white/10 dark:bg-forest-900"
        >
          <img
            :src="n.img"
            :alt="n.imgCap ?? n.title"
            class="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            referrerpolicy="no-referrer"
          >
          <div class="p-6">
            <h3 class="flex items-center gap-2 font-display text-xl font-semibold">
              <component :is="iconFor(n.icon)" class="h-5 w-5 text-forest-600 dark:text-forest-400" aria-hidden="true" />
              {{ n.title }}
            </h3>
            <p class="mt-2 line-clamp-3 text-[0.93rem] text-forest-800/70 dark:text-forest-100/65">
              {{ n.short }}
            </p>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
