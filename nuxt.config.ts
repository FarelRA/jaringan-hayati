import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@vueuse/nuxt'],
  css: [
    '~/assets/css/main.css',
    '@vue-flow/core/dist/style.css',
    '@vue-flow/core/dist/theme-default.css',
    '@vue-flow/controls/dist/style.css',
    '@vue-flow/minimap/dist/style.css',
  ],
  vite: { plugins: [tailwindcss()] },
  typescript: { strict: true, typeCheck: false },
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'JaringanHayati — Mind Map & Peta Konsep Interaktif',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Media belajar interaktif Biologi: mind map dan peta konsep Jaringan Tumbuhan & Hewan dengan gambar mikroskopis saintifik dari Wikimedia Commons, esai, dan kuis.' },
      ],
      link: [
        { rel: 'icon', href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌿</text></svg>" },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://thumb.wikimedia.org' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,400&display=swap' },
      ],
      script: [
        {
          // Guard anti-kilau: replika sederhana useColorMode (VueUse) dengan
          // key & default yang sama, sebelum aplikasi hidup. Nilai store:
          // null => dark (initialValue), "auto" => ikut sistem, lainnya eksplisit.
          innerHTML:
            "try{var v=JSON.parse(localStorage.getItem('vueuse-color-scheme')||'null');" +
            "var d=v==null?v!=='light':v==='auto'?window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches:v==='dark';" +
            "document.documentElement.classList.toggle('dark',d)}catch(e){document.documentElement.classList.add('dark')}",
          tagPosition: 'head',
        },
      ],
    },
  },
})
