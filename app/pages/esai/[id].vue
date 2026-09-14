<script setup lang="ts">
import { ESSAYS } from "~/data/tissues";
import { iconFor } from "~/utils/icons";
import { ArrowLeft } from "lucide-vue-next";

const route = useRoute();
const essay = computed(() => ESSAYS.find((e) => e.id === route.params.id));

if (!essay.value) {
  throw createError({ statusCode: 404, statusMessage: "Esai tidak ditemukan", fatal: true });
}

const index = computed(() => ESSAYS.findIndex((e) => e.id === essay.value?.id));
const next = computed(() => ESSAYS[index.value + 1] ?? null);

useSeoMeta({
  title: () => essay.value ? `${essay.value.title}` : "Esai",
  description: () => essay.value?.lead ?? "",
});
</script>

<template>
  <main v-if="essay" class="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6">
    <NuxtLink
      to="/esai"
      class="inline-flex items-center gap-1.5 text-[0.9rem] font-bold text-forest-600 transition hover:gap-2.5 dark:text-forest-400"
    >
      <ArrowLeft class="h-4 w-4" aria-hidden="true" />
      Semua esai
    </NuxtLink>

    <article class="mt-6 rounded-3xl border border-forest-900/10 bg-white shadow-[var(--shadow-card)] dark:border-white/10 dark:bg-forest-900">
      <div class="relative overflow-hidden rounded-t-3xl">
        <img
          :src="essay.img"
          :alt="essay.imgCap"
          class="h-60 w-full object-cover sm:h-72"
          referrerpolicy="no-referrer"
        >
        <span class="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-cream-50/95 text-forest-700 shadow-md backdrop-blur dark:bg-forest-950/90 dark:text-forest-300">
          <component :is="iconFor(essay.icon)" class="h-5.5 w-5.5" :stroke-width="2" aria-hidden="true" />
        </span>
      </div>

      <div class="p-6 sm:p-9">
        <h1 class="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {{ essay.title }}
        </h1>
        <p class="mt-3 border-l-4 border-gold-500 pl-4 text-[1.02rem] italic text-forest-800/80 dark:text-forest-100/70">
          {{ essay.lead }}
        </p>

        <div class="prose-custom dropcap mt-6" v-html="essay.body" />

        <figure class="mt-8 rounded-2xl border border-forest-900/10 bg-cream-100/70 p-4 dark:border-white/10 dark:bg-forest-950/40">
          <figcaption class="text-[0.85rem] text-forest-800/70 dark:text-forest-100/60">
            {{ essay.imgCap }}
            <a
              :href="essay.imgPage"
              target="_blank"
              rel="noopener"
              class="font-semibold text-forest-600 underline decoration-dotted dark:text-forest-400"
            >Sumber gambar: Wikimedia Commons</a>
          </figcaption>
        </figure>

        <p class="mt-6 text-[0.9rem] text-forest-800/60 dark:text-forest-100/55">
          Rujukan utama: Campbell dkk., <em>Biology: A Global Approach</em>; Solomon dkk., <em>Biology</em>; Evert, <em>Esau's Plant Anatomy</em>.
        </p>
      </div>
    </article>

    <NuxtLink
      v-if="next"
      :to="`/esai/${next.id}`"
      class="group mt-8 flex items-center justify-between gap-4 rounded-3xl border border-forest-900/10 bg-white p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-forest-500 dark:border-white/10 dark:bg-forest-900"
    >
      <span class="min-w-0">
        <span class="block text-[0.78rem] font-bold uppercase tracking-wider text-forest-600 dark:text-forest-400">Esai berikutnya</span>
        <span class="font-display mt-0.5 block truncate text-lg font-semibold">{{ next.title }}</span>
      </span>
      <ArrowLeft class="h-5 w-5 shrink-0 rotate-180 text-forest-600 transition group-hover:translate-x-1 dark:text-forest-400" aria-hidden="true" />
    </NuxtLink>
  </main>
</template>
