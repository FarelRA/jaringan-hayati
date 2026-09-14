<script setup lang="ts">
import { QUIZ_LEVELS } from "~/data/tissues";
import { iconFor } from "~/utils/icons";

const levelId = ref<number | null>(null);
const idx = ref(0);
const score = ref(0);
const picked = ref<number | null>(null);
const finished = ref(false);

const level = computed(() => QUIZ_LEVELS.find((l) => l.level === levelId.value));
const q = computed(() => level.value?.items[idx.value]);
const pct = computed(() =>
  level.value ? Math.round((score.value / level.value.items.length) * 100) : 0,
);

function start(lvl: number) {
  levelId.value = lvl;
  idx.value = 0;
  score.value = 0;
  picked.value = null;
  finished.value = false;
}

function backToLevels() {
  levelId.value = null;
  finished.value = false;
}

function pick(i: number) {
  if (picked.value !== null || !q.value) return;
  picked.value = i;
  if (i === q.value.a) score.value++;
}

function next() {
  if (!level.value) return;
  if (idx.value + 1 >= level.value.items.length) {
    finished.value = true;
    return;
  }
  idx.value++;
  picked.value = null;
}

const verdict = computed(() => {
  const items = level.value?.items.length ?? 1;
  if (score.value === items) return { icon: "trophy", text: "Sempurna!" };
  if (score.value >= items * 0.7) return { icon: "star", text: "Bagus sekali!" };
  return { icon: "sprout", text: "Terus belajar!" };
});

useSeoMeta({
  title: "Kuis Bertingkat: Jaringan Hayati",
  description: "Kuis interaktif tiga level tentang jaringan tumbuhan dan hewan dengan pembahasan.",
});
</script>

<template>
  <main class="mx-auto max-w-2xl px-4 pb-24 pt-10 sm:px-6">
    <span class="eyebrow">Kuis Interaktif</span>
    <h1 class="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Uji Pemahamanmu</h1>
    <p class="mt-3 text-[1.05rem] text-forest-800/75 dark:text-forest-100/70">
      Tiga level soal dengan pembahasan. Selesaikan dari yang termudah, atau langsung
      tantang dirimu di level paling tinggi.
    </p>

    <!-- PEMILIH LEVEL -->
    <div v-if="!levelId" class="mt-8 space-y-4">
      <button
        v-for="l in QUIZ_LEVELS"
        :key="l.level"
        class="group flex w-full items-center gap-4 rounded-3xl border border-forest-900/10 bg-white p-5 text-left shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-forest-500 dark:border-white/10 dark:bg-forest-900"
        @click="start(l.level)"
      >
        <span class="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-forest-600/10 text-forest-600 dark:bg-forest-400/10 dark:text-forest-400">
          <component :is="iconFor(l.icon)" class="h-7 w-7" :stroke-width="2" aria-hidden="true" />
        </span>
        <span class="min-w-0">
          <span class="font-display block text-xl font-semibold">Level {{ l.level }}: {{ l.title }}</span>
          <span class="mt-0.5 block text-[0.92rem] text-forest-800/70 dark:text-forest-100/65">{{ l.desc }}</span>
          <span class="mt-1 block text-[0.8rem] font-semibold text-forest-600 dark:text-forest-400">
            {{ l.items.length }} soal
          </span>
        </span>
      </button>
    </div>

    <!-- SESI KUIS -->
    <div
      v-else
      class="mt-8 rounded-3xl border border-forest-900/10 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8 dark:border-white/10 dark:bg-forest-900"
    >
      <template v-if="!finished">
        <div class="mb-6 flex items-center gap-3">
          <button
            class="text-[0.82rem] font-bold text-forest-600 hover:underline dark:text-forest-400"
            @click="backToLevels()"
          >
            Pilih level
          </button>
          <div class="flex flex-1 gap-1.5" aria-hidden="true">
            <span
              v-for="(_, i) in level?.items"
              :key="i"
              class="h-1.5 flex-1 rounded-full"
              :class="i < idx ? 'bg-forest-500' : i === idx ? 'bg-forest-400/60' : 'bg-forest-900/10 dark:bg-white/10'"
            />
          </div>
        </div>

        <p class="text-[0.83rem] font-bold uppercase tracking-wide text-forest-700/60 dark:text-forest-200/60">
          Soal {{ idx + 1 }} dari {{ level?.items.length }}
        </p>
        <h2 class="font-display mt-1 text-xl font-semibold leading-snug sm:text-2xl">{{ q?.q }}</h2>

        <div class="mt-5 space-y-2.5">
          <button
            v-for="(opt, i) in q?.o"
            :key="i"
            class="flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left font-semibold transition disabled:cursor-default"
            :class="[
              picked === null
                ? 'border-forest-900/10 bg-white hover:translate-x-1 hover:border-forest-500 dark:border-white/10 dark:bg-forest-900 dark:hover:bg-forest-800'
                : i === q?.a
                  ? 'border-forest-500 bg-forest-500/15'
                  : i === picked
                    ? 'border-rose-leaf bg-rose-leaf/10'
                    : 'border-forest-900/10 bg-white opacity-60 dark:border-white/10 dark:bg-forest-900',
            ]"
            :disabled="picked !== null"
            @click="pick(i)"
          >
            <span class="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-forest-100 text-sm font-extrabold dark:bg-forest-800">{{ "ABCD"[i] }}</span>
            <span>{{ opt }}</span>
          </button>
        </div>

        <div v-if="picked !== null" class="mt-5 rounded-r-2xl border-l-4 border-gold-500 bg-gold-400/10 px-4 py-3 text-[0.95rem]">
          <b>{{ picked === q?.a ? "Benar." : "Belum tepat." }}</b> {{ q?.why }}
        </div>

        <button
          v-if="picked !== null"
          class="mt-5 rounded-full bg-forest-600 px-6 py-2.5 text-sm font-bold text-cream-50 transition hover:-translate-y-0.5 dark:bg-forest-400 dark:text-forest-950"
          @click="next()"
        >
          {{ idx + 1 < (level?.items.length ?? 0) ? "Soal berikutnya" : "Lihat hasil" }}
        </button>
      </template>

      <!-- HASIL -->
      <template v-else>
        <div class="flex items-center gap-3">
          <component :is="iconFor(verdict.icon)" class="h-10 w-10 text-forest-600 dark:text-forest-400" aria-hidden="true" />
          <h2 class="font-display text-3xl font-semibold">{{ verdict.text }}</h2>
        </div>
        <p class="mt-4">
          <span class="font-display text-6xl font-bold text-forest-600 dark:text-forest-400">{{ pct }}</span>
          <span class="text-lg text-forest-800/70 dark:text-forest-100/60">
            / 100. Benar {{ score }} dari {{ level?.items.length }} soal pada level {{ level?.title }}.
          </span>
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <button
            class="rounded-full bg-forest-600 px-6 py-2.5 text-sm font-bold text-cream-50 transition hover:-translate-y-0.5 dark:bg-forest-400 dark:text-forest-950"
            @click="start(level!.level)"
          >Ulangi level ini</button>
          <button
            class="rounded-full border border-forest-900/15 px-6 py-2.5 text-sm font-bold dark:border-white/15"
            @click="backToLevels()"
          >Pilih level lain</button>
          <NuxtLink
            to="/mindmap"
            class="rounded-full border border-forest-900/15 px-6 py-2.5 text-sm font-bold dark:border-white/15"
          >Kembali ke mind map</NuxtLink>
        </div>
      </template>
    </div>
  </main>
</template>
