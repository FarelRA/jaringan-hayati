<script setup lang="ts">
useSeoMeta({
  title: "Peta Konsep: Proposisi Antar Jaringan",
  description:
    "Peta konsep jaringan tumbuhan dan hewan dengan kata penghubung yang menjelaskan hubungan antar konsep.",
});
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
    <span class="eyebrow">Peta Konsep</span>
    <h1 class="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Proposisi dan Hubungan Antar Konsep</h1>
    <p class="mt-3 max-w-[62ch] text-[1.05rem] text-forest-800/75 dark:text-forest-100/70">
      Peta konsep menautkan konsep lewat kata penghubung yang menjelaskan hubungannya.
      Node bergaris kuning putus putus adalah konsep fungsi, sedangkan node lain adalah
      jaringan sesungguhnya. Klik node untuk membuka penjelasannya.
    </p>

    <div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.85rem] text-forest-800/70 dark:text-forest-100/60">
      <span class="flex items-center gap-2"><i class="h-3 w-3 rounded border-2 border-dashed border-gold-500 bg-gold-400/30" />Konsep fungsi</span>
      <span class="flex items-center gap-2"><i class="h-3 w-3 rounded bg-forest-500" />Jaringan tumbuhan</span>
      <span class="flex items-center gap-2"><i class="h-3 w-3 rounded bg-rose-leaf" />Jaringan hewan</span>
    </div>

    <TissueFlow mode="concept" class="mt-5" />
  </main>
</template>
