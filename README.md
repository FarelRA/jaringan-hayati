# 🌿 JaringanHayati — Mind Map & Peta Konsep Interaktif

Media belajar interaktif Biologi SMA: **Jaringan Tumbuhan & Hewan** — direkonstruksi
dari papan tulis kelas menjadi SPA modern dengan gambar mikroskopis saintifik asli
dari [Wikimedia Commons](https://commons.wikimedia.org) (CC BY-SA / Public Domain).

## ✨ Fitur

- **Mind Map interaktif** — 32 node (meristem → floem, epitel → saraf) dengan
  auto-layout dagre dua sisi (tumbuhan kanan, hewan kiri), pan/zoom/drag via Vue Flow
- **Peta Konsep** — 36 node + 38 proposisi berlabel ("mengangkut", "de-diferensiasi", …)
- **Modal penjelasan** per node — gambar mikroskopis, penjelasan lengkap, chip fungsi,
  navigasi antar cabang, atribusi sumber gambar (Headless UI, accessible + Esc)
- **2 esai saintifik** panjang dengan dropcap & tipografi editorial
- **Kuis interaktif** 10 soal dengan pembahasan instan
- **Dark/light mode** (VueUse `useDark`, persist di localStorage)
- **SEO per halaman** via `useSeoMeta`, SSR penuh

## 🧱 Stack (best practice, latest)

| Teknologi | Peran |
|---|---|
| [Nuxt 4](https://nuxt.com) (`app/` dir structure) | Framework Vue 3 + SSR + file-based routing |
| [Tailwind CSS v4](https://tailwindcss.com) | CSS-first config (`@theme`, `@custom-variant dark`) via `@tailwindcss/vite` |
| [Vue Flow](https://vueflow.dev) (`@vue-flow/core`) | Graf interaktif: pan, zoom, drag, minimap, controls |
| [dagre](https://github.com/dagrejs/dagre) | Auto-layout hierarkis mind map (LR/RL dua sisi) |
| [Headless UI Vue](https://headlessui.com) | Modal dialog accessible (focus trap, Esc, ARIA) |
| [VueUse](https://vueuse.org) | `useDark` untuk tema |
| TypeScript strict | Data layer & komponen bertipe penuh |

## 🚀 Menjalankan

```bash
bun install        # atau npm install / pnpm install
bun run dev        # dev server di http://localhost:3000
bun run build      # build produksi SSR → .output/
node .output/server/index.mjs  # preview produksi
bun run generate   # alternatif: SSG full-statis
```

## 📁 Struktur

```
app/
├── assets/css/main.css     # Tailwind v4 @theme (palet forest/cream, Fraunces + Jakarta Sans)
├── components/
│   ├── TissueFlow.vue      # kanvas Vue Flow (mind map & peta konsep) + dagre layout
│   ├── TissueNode.vue      # kartu node (gambar mikroskopis + badge jumlah anak)
│   ├── TissueModal.vue     # dialog penjelasan node (Headless UI)
│   └── AppHeader.vue       # nav + progress bar + toggle tema
├── composables/useTissueModal.ts   # state modal global (useState)
├── data/
│   ├── tissues.ts          # 32 node konten saintifik + esai + kuis + sumber
│   └── graph.ts            # edge pohon, parent map, layout dua sisi
└── pages/                  # / (hero) · /mindmap · /konsep · /esai · /kuis · /sumber
```

## 📚 Sumber Saintifik

Campbell *Biology: A Global Approach* (12th ed.) · Solomon dkk. *Biology* (11th ed.) ·
OpenStax *Biology 2e* · Evert *Esau's Plant Anatomy* (3rd ed.) · KBBI VI.
Seluruh gambar: Wikimedia Commons — atribusi tersedia di setiap modal node.
