// ============================================================
//  DATA: Jaringan Hayati, Mind Map + Peta Konsep + Esai + Kuis
//  Seluruh gambar: Wikimedia Commons (CC BY-SA / Public Domain)
//  Konten saintifik: Campbell Biology; Solomon et al.; Evert & Eichhorn
// ============================================================

export const IMG = (p: string) => `https://thumb.wikimedia.org/wikipedia/commons/thumb/${p}`;

export type Branch = "plant" | "animal" | "root";

export interface TissueNode {
  id: string;
  title: string;
  /** nama ikon lucide (lihat utils/icons.ts), tanpa emoji */
  icon: string;
  branch: Branch;
  img: string;
  imgPage?: string;
  imgCap?: string;
  short: string;
  detail: string;
  funsi?: string[];
  children?: string[];
}

// ------------------------------------------------------------
// MIND MAP
// ------------------------------------------------------------
export const NODES: Record<string, TissueNode> = {
  jaringan: {
    id: "jaringan",
    title: "Jaringan",
    icon: "microscope",
    branch: "root",
    img: IMG("a/a2/Nymphaea_leaf_cross-section.jpg/960px-Nymphaea_leaf_cross-section.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Nymphaea_leaf_cross-section.jpg",
    imgCap: "Penampang daun Nymphaea: epidermis, aerenkim (parenkim berongga), dan berkas pengangkut dalam satu bidang.",
    short: "Kelompok sel yang berasal dari sel yang sama dengan bentuk dan fungsi yang sama. Unit struktural sekaligus fungsional organisme multiseluler.",
    detail: `
      <h3>Apa itu Jaringan?</h3>
      <p><strong>Jaringan</strong> (Inggris: <em>tissue</em>) adalah sekumpulan sel yang memiliki asal, bentuk, dan fungsi yang sama, serta bekerja terkoordinasi. Ilmu yang mengkajinya disebut <strong>histologi</strong>.</p>
      <p>Istilah <em>tissue</em> diperkenalkan oleh <strong>Marie François Xavier Bichat</strong> (1771 sampai 1802), sementara istilah <em>histologi</em> diperkenalkan oleh <strong>Karl Meyer</strong> (1819).</p>
      <p>Pada organisme multiseluler, tingkat organisasi kehidupan berjalan dari sel ke jaringan, lalu organ, sistem organ, dan akhirnya organisme. Sel serupa membentuk jaringan; jaringan yang berbeda membentuk organ.</p>
      <p>Berdasarkan organisme, jaringan terbagi menjadi dua dunia besar, yaitu <strong>Jaringan Tumbuhan</strong> dan <strong>Jaringan Hewan</strong>.</p>`,
    funsi: ["Unit struktural organisme", "Dikaji lewat histologi", "Sel, jaringan, organ, sistem"],
    children: ["tumbuhan", "hewan"],
  },

  tumbuhan: {
    id: "tumbuhan",
    title: "Jaringan Tumbuhan",
    icon: "leaf",
    branch: "plant",
    img: IMG("1/13/Mesophytic_Leaf_Cross_Section_Microscope_Image.jpg/960px-Mesophytic_Leaf_Cross_Section_Microscope_Image.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Mesophytic_Leaf_Cross_Section_Microscope_Image.jpg",
    imgCap: "Penampang daun dari mikroskop cahaya: epidermis, mesofil palisade, mesofil spons, dan berkas pengangkut.",
    short: "Dikelompokkan menjadi jaringan embrional (meristem) yang selalu membelah, dan jaringan permanen (dewasa) hasil diferensiasi.",
    detail: `
      <h3>Jaringan Tumbuhan</h3>
      <p>Tubuh tumbuhan tersusun atas dua kelompok besar jaringan (Campbell, <em>Biology</em> Bab 35):</p>
      <ul>
        <li><strong>Jaringan embrional (meristem)</strong> yang sel aktif membelah sepanjang hidup. Klasifikasinya berdasarkan asal (promeristem, meristem primer, meristem sekunder) dan berdasarkan letak (apikal, interkalar, lateral).</li>
        <li><strong>Jaringan permanen (dewasa)</strong> hasil diferensiasi meristem: dinding menebal, vakuola membesar, sel berhenti membelah. Meliputi jaringan pelindung, dasar, penguat, dan pengangkut.</li>
      </ul>
      <p>Secara fungsional, Campbell membagi jaringan tumbuhan menjadi tiga sistem, yaitu sistem <strong>dermal</strong>, sistem <strong>dasar (ground)</strong>, dan sistem <strong>vaskular</strong>.</p>`,
    funsi: ["Pertumbuhan sepanjang hayat", "Sistem dermal, dasar, vaskular", "Meristem sebagai pabrik sel"],
    children: ["meristem", "dewasa"],
  },

  // ---- Cabang MERISTEM ----
  meristem: {
    id: "meristem",
    title: "Meristem (Embrional)",
    icon: "sprout",
    branch: "plant",
    img: IMG("f/fb/Lycopodium_shoot_apex.png/960px-Lycopodium_shoot_apex.png"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Lycopodium_shoot_apex.png",
    imgCap: "Gambar klasik puncak pucuk Lycopodium dengan meristem apikal di pusatnya.",
    short: "Jaringan embrional yang sel-selnya aktif membelah melalui mitosis. Sel muda, dinding tipis, protoplasma padat, vakuola kecil, tanpa ruang antarsel. Istilah diberikan Nägeli (1858).",
    detail: `
      <h3>Jaringan Meristem (Embrional)</h3>
      <p><strong>Meristem</strong> adalah jaringan embrional yang sel-selnya selalu aktif membelah secara mitosis. Ciri-ciri sel meristem (Solomon dkk., <em>Biology</em>):</p>
      <ul>
        <li>Sel masih muda dengan dinding tipis</li>
        <li>Protoplasma padat, vakuola kecil atau belum terbentuk</li>
        <li>Tidak ada atau hanya sedikit ruang antarsel</li>
        <li>Belum terdiferensiasi sehingga masih serba bisa</li>
      </ul>
      <p>Istilah <em>meristem</em> diperkenalkan oleh <strong>Karl Wilhelm von Nägeli (1858)</strong>.</p>
      <h4>Berdasarkan asal</h4>
      <ul>
        <li><strong>Promeristem</strong>, meristem paling muda yang merupakan turunan langsung embrio.</li>
        <li><strong>Meristem primer</strong>, turunan promeristem yang masih aktif membelah.</li>
        <li><strong>Meristem sekunder</strong>, sel dewasa yang kedewasaannya kembali (<em>de-diferensiasi</em>) lalu membelah lagi.</li>
      </ul>
      <h4>Berdasarkan letak</h4>
      <ul>
        <li><strong>Apikal</strong> di ujung akar dan ujung batang, menyebabkan pertumbuhan memanjang.</li>
        <li><strong>Interkalar</strong> di antara jaringan dewasa, misalnya buku rumput-rumputan.</li>
        <li><strong>Lateral</strong> di sisi organ, menyebabkan pertumbuhan membesar.</li>
      </ul>`,
    funsi: ["Pertumbuhan memanjang", "Pertumbuhan membesar", "Sel totipoten"],
    children: ["meristem-primer", "meristem-sekunder"],
  },

  "meristem-primer": {
    id: "meristem-primer",
    title: "Meristem Primer",
    icon: "ruler",
    branch: "plant",
    img: IMG("d/d3/Onion_root_mitosis.jpg/960px-Onion_root_mitosis.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Onion_root_mitosis.jpg",
    imgCap: "Ujung akar bawang merah (Allium cepa): semua fase mitosis terlihat, pabrik jaringan primer.",
    short: "Meristem di ujung akar dan ujung batang yang menyebabkan pertumbuhan memanjang. Berdiferensiasi menjadi protoderm, prokambium, dan meristem dasar.",
    detail: `
      <h3>Meristem Primer</h3>
      <p><strong>Meristem primer</strong> berasal dari promeristem, yaitu jaringan embrional biji. Sel-selnya terus membelah dan menyebabkan <strong>pertumbuhan primer</strong> (memanjang) pada ujung akar dan ujung batang.</p>
      <p>Setelah membelah, sel-selnya berdiferensiasi menjadi tiga jaringan primer:</p>
      <ul>
        <li><strong>Protoderm</strong> menjadi epidermis, jaringan permukaan.</li>
        <li><strong>Prokambium</strong> menjadi silinder pusat berisi xilem dan floem primer.</li>
        <li><strong>Meristem dasar</strong> menjadi jaringan dasar berisi parenkim, kolenkim, dan sklerenkim.</li>
      </ul>
      <p>Di antara jaringan dewasa terdapat <strong>kambium interkalar</strong>, yaitu sisa meristem primer pada pangkal ruas monokotil seperti rumput, bambu, dan jagung.</p>`,
    funsi: ["Pertumbuhan memanjang", "Ujung akar dan batang", "Tiga jaringan primer"],
    children: ["protoderm", "prokambium", "meristem-dasar", "kambium-interkalar"],
  },

  "meristem-sekunder": {
    id: "meristem-sekunder",
    title: "Meristem Sekunder",
    icon: "repeat",
    branch: "plant",
    img: IMG("3/3a/Woody_Dicot_Stem_Periderm_in_Two_Year_Tilia_(34319700254).jpg/960px-Woody_Dicot_Stem_Periderm_in_Two_Year_Tilia_(34319700254).jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Woody_Dicot_Stem_Periderm_in_Two_Year_Tilia_(34319700254).jpg",
    imgCap: "Periderm batang Tilia dua tahun, produk pertumbuhan sekunder yang menambah diameter.",
    short: "Sel dewasa yang mengalami de-diferensiasi lalu aktif membelah lagi. Contohnya kambium vasikuler dan kambium gabus yang menghasilkan kayu dan periderm.",
    detail: `
      <h3>Meristem Sekunder</h3>
      <p><strong>Meristem sekunder</strong> berasal dari jaringan dewasa yang mengalami <em>de-diferensiasi</em>, yaitu sel yang telah terspesialisasi kembali menjadi meristematik lalu membelah lagi.</p>
      <p>Dua contoh utama (meristem lateral):</p>
      <ul>
        <li><strong>Kambium vasikuler</strong> menghasilkan xilem sekunder (kayu) ke dalam dan floem sekunder ke luar.</li>
        <li><strong>Kambium gabus (felogen)</strong> menghasilkan felem atau gabus ke luar dan feloderm ke dalam, yang bersama membentuk periderm.</li>
      </ul>
      <p>Aktivitas kedua kambium ini menambah diameter akar dan batang, disebut <strong>pertumbuhan sekunder</strong>, dan membuat batang dikotil menjadi berkayu.</p>`,
    funsi: ["Pertumbuhan membesar", "Kambium dan felogen", "Kayu dan kulit kayu"],
    children: ["kambium-vasikuler", "kambium-gabus"],
  },

  protoderm: {
    id: "protoderm",
    title: "Protoderm",
    icon: "layers",
    branch: "plant",
    img: IMG("7/7c/Leaf_epidermis.jpg/960px-Leaf_epidermis.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Leaf_epidermis.jpg",
    imgCap: "Epidermis daun, produk dewasa dari protoderm.",
    short: "Meristem primer terluar yang berdiferensiasi menjadi epidermis, jaringan pelindung permukaan.",
    detail: `
      <h3>Protoderm</h3>
      <p><strong>Protoderm</strong> adalah lapisan sel terluar meristem apikal. Setelah berdiferensiasi, protoderm menjadi <strong>epidermis</strong> yang menutupi seluruh permukaan organ muda tumbuhan.</p>
      <p>Pada akar, turunan protoderm juga membentuk <strong>rambut akar</strong> untuk memperluas bidang penyerapan air dan mineral.</p>`,
    funsi: ["Menjadi epidermis", "Membentuk rambut akar"],
  },

  prokambium: {
    id: "prokambium",
    title: "Prokambium",
    icon: "git-branch",
    branch: "plant",
    img: IMG("4/4d/Herbaceous_Dicot_Stem_Vascular_Bundle_in_Younger_Trifolium_(36988203031).jpg/960px-Herbaceous_Dicot_Stem_Vascular_Bundle_in_Younger_Trifolium_(36988203031).jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Herbaceous_Dicot_Stem_Vascular_Bundle_in_Younger_Trifolium_(36988203031).jpg",
    imgCap: "Berkas pengangkut muda pada batang Trifolium, hasil diferensiasi prokambium.",
    short: "Meristem primer pembentuk silinder pusat yang berdiferensiasi menjadi xilem dan floem primer.",
    detail: `
      <h3>Prokambium</h3>
      <p><strong>Prokambium</strong> adalah meristem primer yang menurunkan <strong>silinder pusat</strong> (stele), yaitu jaringan pengangkut primer tubuh tumbuhan.</p>
      <p>Hasil diferensiasinya:</p>
      <ul>
        <li><strong>Xilem primer</strong> yang terdiri atas protoxilem dan metaxilem.</li>
        <li><strong>Floem primer</strong> yang terdiri atas protoloem dan metafloem.</li>
        <li>Pada dikotil dan gymnosperma, sisanya menjadi <strong>kambium vasikuler</strong> pada fase sekunder.</li>
      </ul>`,
    funsi: ["Menjadi xilem primer", "Menjadi floem primer", "Menjadi kambium"],
  },

  "meristem-dasar": {
    id: "meristem-dasar",
    title: "Meristem Dasar",
    icon: "box",
    branch: "plant",
    img: IMG("e/e9/Herbaceous_Dicot_Stem_Collenchyma%2C_Sclerenchyma_and_Parenchyma_in_Cucurbita_%2837411748021%29.jpg/960px-Herbaceous_Dicot_Stem_Collenchyma%2C_Sclerenchyma_and_Parenchyma_in_Cucurbita_%2837411748021%29.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Herbaceous_Dicot_Stem_Collenchyma,_Sclerenchyma_and_Parenchyma_in_Cucurbita_(37411748021).jpg",
    imgCap: "Parenkim, kolenkim, dan sklerenkim dalam satu bidang pandang batang Cucurbita.",    short: "Meristem primer yang berdiferensiasi menjadi jaringan dasar berupa parenkim, kolenkim, dan sklerenkim.",
    detail: `
      <h3>Meristem Dasar (Ground Meristem)</h3>
      <p><strong>Meristem dasar</strong> mengisi sebagian besar volume meristem apikal dan berdiferensiasi menjadi <strong>jaringan dasar</strong>:</p>
      <ul>
        <li><strong>Parenkim</strong> sebagai pengisi dan penyimpan.</li>
        <li><strong>Kolenkim</strong> sebagai penguat organ muda.</li>
        <li><strong>Sklerenkim</strong> sebagai penguat organ dewasa.</li>
      </ul>
      <p>Jaringan dasar membentuk korteks di luar silinder pusat, sumsum di dalam batang, serta seluruh isi daun (mesofil).</p>`,
    funsi: ["Menjadi parenkim", "Menjadi kolenkim", "Menjadi sklerenkim"],
  },

  "kambium-interkalar": {
    id: "kambium-interkalar",
    title: "Kambium Interkalar",
    icon: "wheat",
    branch: "plant",
    img: IMG("0/09/Zea_mays_leaf_Kranz_anatomy_1_200%C3%97.png/960px-Zea_mays_leaf_Kranz_anatomy_1_200%C3%97.png"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Zea_mays_leaf_Kranz_anatomy_1_200%C3%97.png",
    imgCap: "Anatomi daun jagung (Zea mays), monokotil yang tumbuh berkat kambium interkalar.",
    short: "Sisa meristem primer pada pangkal ruas monokotil seperti rumput, bambu, dan jagung sehingga ruas tetap memanjang meski ujungnya terpotong.",
    detail: `
      <h3>Kambium Interkalar</h3>
      <p><strong>Kambium interkalar</strong> adalah meristem primer yang tersisa di antara dua jaringan permanen. Letaknya khas pada monokotil, di pangkal buku batang dan pangkal daun rumput-rumputan.</p>
      <p>Inilah sebabnya rumput tetap tumbuh memanjang meski ujungnya dipotong mesin pemotong, dan bambu dapat memanjang sangat cepat dalam hitungan hari.</p>`,
    funsi: ["Memanjangkan ruas monokotil", "Khas rumput dan bambu"],
  },

  "kambium-vasikuler": {
    id: "kambium-vasikuler",
    title: "Kambium Vasikuler",
    icon: "tree-deciduous",
    branch: "plant",
    img: IMG("e/e1/Herbaceous_Dicot_Stem_Vascular_Bundle_in_Older_Helianthus_(35053073093).jpg/960px-Herbaceous_Dicot_Stem_Vascular_Bundle_in_Older_Helianthus_(35053073093).jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Herbaceous_Dicot_Stem_Vascular_Bundle_in_Older_Helianthus_(35053073093).jpg",
    imgCap: "Berkas pengangkut batang Helianthus tua dengan kambium di antara xilem dan floem.",
    short: "Meristem lateral pembentuk kayu. Xilem sekunder ke dalam, floem sekunder ke luar, sehingga batang dikotil dan gymnosperma mengayu.",
    detail: `
      <h3>Kambium Vasikuler</h3>
      <p><strong>Kambium vasikuler</strong> adalah meristem lateral berbentuk silinder di antara xilem dan floem. Sel-selnya membelah dua arah:</p>
      <ul>
        <li><strong>Ke dalam</strong> menghasilkan xilem sekunder (kayu), penyusun utama batang berkayu.</li>
        <li><strong>Ke luar</strong> menghasilkan floem sekunder yang mengedarkan hasil fotosintesis.</li>
      </ul>
      <p>Aktivitas kambium berubah mengikuti musim sehingga membentuk <strong>cincin tahun</strong> yang dipakai untuk menghitung umur pohon (dendrokronologi).</p>`,
    funsi: ["Membentuk kayu", "Membentuk floem sekunder", "Mencetak cincin tahun"],
  },

  "kambium-gabus": {
    id: "kambium-gabus",
    title: "Kambium Gabus (Felogen)",
    icon: "brick-wall",
    branch: "plant",
    img: IMG("8/84/Outer_Bark_or_Periderm_in_One_Year_Tilia_(34319699434).jpg/960px-Outer_Bark_or_Periderm_in_One_Year_Tilia_(34319699434).jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Outer_Bark_or_Periderm_in_One_Year_Tilia_(34319699434).jpg",
    imgCap: "Periderm Tilia hasil kerja felogen: gabus ke luar, feloderm ke dalam.",
    short: "Meristem lateral pembentuk periderm. Felem (gabus) ke luar, feloderm ke dalam, menggantikan epidermis pada organ berkayu.",
    detail: `
      <h3>Kambium Gabus (Felogen)</h3>
      <p><strong>Kambium gabus</strong> atau <strong>felogen</strong> adalah meristem lateral yang menghasilkan:</p>
      <ul>
        <li><strong>Felem (gabus)</strong> ke arah luar, sel mati berdinding suberin yang kedap air dan menjadi pelindung mekanik.</li>
        <li><strong>Feloderm</strong> ke arah dalam, sel parenkim yang hidup.</li>
      </ul>
      <p>Ketiganya (felogen, felem, feloderm) membentuk <strong>periderm</strong>, kulit kayu muda yang menggantikan epidermis pada batang dan akar yang mengayu. Pada kulit kayu tua terdapat <strong>lentisel</strong>, celah gabus untuk pertukaran gas.</p>
      <p>Gabus komersial untuk tutup botol diambil dari pohon ek gabus, <em>Quercus suber</em>.</p>`,
    funsi: ["Menghasilkan gabus", "Menghasilkan feloderm", "Membentuk periderm"],
  },

  // ---- Cabang DEWASA / PERMANEN ----
  dewasa: {
    id: "dewasa",
    title: "Jaringan Permanen (Dewasa)",
    icon: "leafy-green",
    branch: "plant",
    img: IMG("a/ae/Sunflower_Helianthus_stem_mag_100x_actual_1.4-1.6mm.jpg/960px-Sunflower_Helianthus_stem_mag_100x_actual_1.4-1.6mm.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Sunflower_Helianthus_stem_mag_100x_actual_1.4-1.6mm.jpg",
    imgCap: "Penampang batang Helianthus perbesaran 100 kali: epidermis, korteks, berkas pengangkut, dan sumsum.",
    short: "Hasil diferensiasi meristem: dinding menebal, vakuola besar, umumnya tidak membelah lagi. Meliputi pelindung, dasar, penguat, dan pengangkut.",
    detail: `
      <h3>Jaringan Permanen (Dewasa)</h3>
      <p><strong>Jaringan permanen</strong> adalah hasil diferensiasi jaringan meristem dengan ciri dinding sel menebal, vakuola membesar, dan sel umumnya kehilangan kemampuan membelah.</p>
      <p>Tiga kelompok fungsionalnya:</p>
      <ul>
        <li><strong>Jaringan pelindung</strong> berupa epidermis untuk organ muda dan periderm untuk organ tua.</li>
        <li><strong>Jaringan dasar dan penguat</strong> berupa parenkim, kolenkim, dan sklerenkim.</li>
        <li><strong>Jaringan pengangkut</strong> berupa xilem dan floem.</li>
      </ul>`,
    funsi: ["Diferensiasi dari meristem", "Pelindung, dasar, pengangkut", "Dinding sel menebal"],
    children: ["epidermis", "gabus", "parenkim", "kolenkim", "sklerenkim", "xilem", "floem"],
  },

  epidermis: {
    id: "epidermis",
    title: "Epidermis",
    icon: "shield",
    branch: "plant",
    img: IMG("6/68/Olea_europaea_leaf_epidermis_and_stomata_100x.jpg/960px-Olea_europaea_leaf_epidermis_and_stomata_100x.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Olea_europaea_leaf_epidermis_and_stomata_100x.jpg",
    imgCap: "Epidermis daun zaitun (Olea europaea) perbesaran 100 kali dengan stomata di antara selnya.",
    short: "Lapisan sel terluar organ muda: satu lapis, rapat, dilindungi kutikula, dilengkapi stomata dan trikoma. Pada akar membentuk rambut akar.",
    detail: `
      <h3>Epidermis</h3>
      <p><strong>Epidermis</strong> adalah jaringan pelindung pada permukaan organ muda. Umumnya hanya <em>satu lapis</em> sel rapat tanpa ruang antarsel, dengan ciri khas:</p>
      <ul>
        <li><strong>Kutikula</strong>, lapisan kutin lilin di dinding luar yang mencegah penguapan berlebih.</li>
        <li><strong>Stomata</strong>, sepasang sel penutup yang mengatur pertukaran gas CO2 dan O2 serta transpirasi.</li>
        <li><strong>Trikoma</strong>, rambut halus yang mengurangi aliran udara dan kadang berkelenjar.</li>
        <li><strong>Rambut akar</strong>, modifikasi epidermis akar untuk penyerapan.</li>
      </ul>
      <p>Pada organ tua, epidermis digantikan oleh <strong>periderm</strong> yang dihasilkan felogen.</p>`,
    funsi: ["Melindungi organ muda", "Stomata untuk pertukaran gas", "Kutikula menahan penguapan"],
  },

  gabus: {
    id: "gabus",
    title: "Gabus / Periderm",
    icon: "brick-wall",
    branch: "plant",
    img: IMG("7/75/Gymnosperm_Stem_Cork_in_Three_Year_Pinus_(36279470416).jpg/960px-Gymnosperm_Stem_Cork_in_Three_Year_Pinus_(36279470416).jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Gymnosperm_Stem_Cork_in_Three_Year_Pinus_(36279470416).jpg",
    imgCap: "Gabus (felem) tiga tahun pada batang Pinus: lapisan sel mati berdinding suberin.",
    short: "Jaringan pelindung organ tua hasil felogen. Sel mati berdinding suberin yang kedap air dan gas. Lentisel menjadi celah pernapasan kulit kayu.",
    detail: `
      <h3>Gabus (Felem) dan Periderm</h3>
      <p>Pada organ tua, epidermis digantikan <strong>periderm</strong>, yaitu gabus yang dihasilkan felogen. Sel gabus mati saat dewasa dan berdinding tebal <strong>suberin</strong> sehingga tahan air, gas, bahkan api.</p>
      <ul>
        <li><strong>Lentisel</strong> adalah celah kecil pada gabus untuk pertukaran gas kulit kayu.</li>
        <li><strong>Gabus komersial</strong> dipanen dari ek gabus (Quercus suber) setiap sembilan tahun sekali.</li>
        <li>Robert Hooke (1665) mencetuskan istilah <em>cell</em> setelah mengamati sel gabus yang tampak seperti sel-sel kecil biara.</li>
      </ul>`,
    funsi: ["Melindungi organ tua", "Suberin kedap air", "Lentisel untuk respirasi"],
  },

  parenkim: {
    id: "parenkim",
    title: "Parenkim (Dasar)",
    icon: "puzzle",
    branch: "plant",
    img: IMG("6/60/Root_parenchyma_cells_of_Amaranthus_viridis_containing_endophytic_bacterium_Pseudomonas_sp.jpg/960px-Root_parenchyma_cells_of_Amaranthus_viridis_containing_endophytic_bacterium_Pseudomonas_sp.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Root_parenchyma_cells_of_Amaranthus_viridis_containing_endophytic_bacterium_Pseudomonas_sp.jpg",
    imgCap: "Sel parenkim akar Amaranthus yang hidup, berdinding tipis, dengan vakuola besar.",
    short: "Sel hidup berdinding tipis dengan ruang antarsel jelas, paling banyak di tubuh tumbuhan. Berfungsi untuk asimilasi, penyimpanan, pengisi, dan penyembuhan luka.",
    detail: `
      <h3>Parenkim (Jaringan Dasar)</h3>
      <p><strong>Parenkim</strong> adalah jaringan dasar paling melimpah: sel hidup, dinding primer tipis, vakuola besar, ruang antarsel jelas. Modifikasinya sangat beragam:</p>
      <ul>
        <li><strong>Klorenkim</strong>, parenkim berklorofil untuk fotosintesis (mesofil daun).</li>
        <li><strong>Jaringan penyimpanan</strong> berupa amilum pada endosperm dan umbi, serta lemak dan air.</li>
        <li><strong>Aerenkim</strong>, parenkim berongga besar untuk mengapungkan tumbuhan air.</li>
        <li><strong>Sel pengiring</strong>, parenkim khusus floem.</li>
      </ul>
      <p>Sebagian parenkim tetap mampu membelah sehingga berperan dalam <strong>penyembuhan luka</strong> dan pembentukan tunas adventif, dasar teknik stek dan cangkok.</p>`,
    funsi: ["Asimilasi (klorenkim)", "Penyimpanan makanan", "Aerenkim mengapungkan", "Penyembuhan luka"],
  },

  kolenkim: {
    id: "kolenkim",
    title: "Kolenkim",
    icon: "spline",
    branch: "plant",
    img: IMG("6/68/Herbaceous_Dicot_Stem_Collenchyma_in_Hypodermis_of_Older_Helianthus_(35479360870).jpg/960px-Herbaceous_Dicot_Stem_Collenchyma_in_Hypodermis_of_Older_Helianthus_(35479360870).jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Herbaceous_Dicot_Stem_Collenchyma_in_Hypodermis_of_Older_Helianthus_(35479360870).jpg",
    imgCap: "Kolenkim pada hipodermis batang Helianthus, dinding menebal di sudut sel.",
    short: "Sel hidup penguat organ muda. Dinding primer menebal tidak merata, biasanya di sudut sel. Contohnya ujung tangkai seledri yang kenyal.",
    detail: `
      <h3>Kolenkim</h3>
      <p><strong>Kolenkim</strong> adalah jaringan penguat yang tersusun atas sel <strong>hidup</strong> dengan dinding primer yang menebal <strong>tidak merata</strong>, biasanya di sudut-sudut sel (kolenkim sudut) atau di dinding tangensial (kolenkim lembaran).</p>
      <p>Letaknya tepat di bawah epidermis pada organ muda yang masih memanjang: pucuk, tangkai daun, dan tulang daun. Karena selnya hidup dan dindingnya lentur, kolenkim menguat tanpa menghambat pertumbuhan.</p>
      <p>Contoh mudah dikenali adalah benang-benang kenyal di permukaan tangkai <strong>seledri</strong> yang sesungguhnya adalah bundel kolenkim.</p>`,
    funsi: ["Menguatkan organ muda", "Dinding tebal tak merata", "Sel hidup dan lentur"],
  },

  sklerenkim: {
    id: "sklerenkim",
    title: "Sklerenkim",
    icon: "gem",
    branch: "plant",
    img: IMG("c/c2/Flax_stem_cross-section_showing_bast_fibers_(modified_from_image_by_Ryan_R._McKenzie).png/960px-Flax_stem_cross-section_showing_bast_fibers_(modified_from_image_by_Ryan_R._McKenzie).png"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Flax_stem_cross-section_showing_bast_fibers_(modified_from_image_by_Ryan_R._McKenzie).png",
    imgCap: "Serat kulit (bast fibers) batang flax dengan dinding sekunder tebal berlignin.",
    short: "Sel mati berdinding sekunder tebal berlignin dengan lumen sempit, penguat organ dewasa. Dua bentuk utama: serat (fiber) dan sklereid (sel batu).",
    detail: `
      <h3>Sklerenkim</h3>
      <p><strong>Sklerenkim</strong> adalah jaringan penguat yang tersusun atas sel yang <strong>mati</strong> pada kedewasaan fungsionalnya. Dinding sekundernya sangat tebal ber<strong>lignin</strong> sehingga lumen menyempit atau hilang.</p>
      <p>Dua bentuk utamanya:</p>
      <ul>
        <li><strong>Serat (fiber)</strong>, sel memanjang ujung lancip, misalnya serat bast flax dan serat kayu, bahan tekstil dan kertas.</li>
        <li><strong>Sklered (sel batu)</strong>, sel pendek hampir isodiametrik pada kulit biji dan daging buah pear yang berpasir.</li>
      </ul>
      <p>Karena selnya mati, sklerenkim hanya menguatkan organ yang telah berhenti memanjang.</p>`,
    funsi: ["Penguat permanen", "Serat untuk tekstil", "Sklered pada kulit biji"],
  },

  xilem: {
    id: "xilem",
    title: "Xilem (Kayu)",
    icon: "droplets",
    branch: "plant",
    img: IMG("9/9e/Ranunculus_Root_Cross_Section.png/960px-Ranunculus_Root_Cross_Section.png"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Ranunculus_Root_Cross_Section.png",
    imgCap: "Penampang akar Ranunculus dengan xilem primer berpola salib di silinder pusat.",
    short: "Pengangkut air dan mineral dari akar ke daun dengan arah naik. Selnya mati saat berfungsi, terdiri atas trakeid dan elemen pembuluh, sekaligus penguat.",
    detail: `
      <h3>Xilem (Jaringan Kayu)</h3>
      <p><strong>Xilem</strong> mengangkut air dan mineral terlarut dari akar ke daun, disebut <em>getah mentah</em>. Alirannya naik, digerakkan oleh tekanan akar dan <strong>tarikan transpirasi</strong> (teori kohesi-tensi Dixon-Jolly).</p>
      <p>Sel pengangkutnya <strong>mati</strong> saat berfungsi sehingga hanya tersisa dindingnya:</p>
      <ul>
        <li><strong>Trakeid</strong>, sel tunggal ujung lancip, khas paku pakis dan gymnosperma, air melewati celah dinding (pit).</li>
        <li><strong>Elemen pembuluh (trakea)</strong>, sel-sel yang bergabung menjadi pipa panjang berujung terbuka, lebih efisien, khas angiosperma.</li>
      </ul>
      <p>Komponen lainnya adalah <strong>parenkim xilem</strong> untuk pengangkutan lateral dan <strong>serat</strong> sebagai penguat. Kayu yang kita kenal adalah xilem sekunder.</p>`,
    funsi: ["Mengangkut air ke atas", "Trakeid dan elemen pembuluh", "Sel mati berlignin", "Kayu adalah xilem sekunder"],
  },

  floem: {
    id: "floem",
    title: "Floem (Pembuluh Tapis)",
    icon: "filter",
    branch: "plant",
    img: IMG("8/8a/Gymnosperm_Leaves_Vascular_Bundle_in_Five_Needle_Pinus_(36462623246).jpg/960px-Gymnosperm_Leaves_Vascular_Bundle_in_Five_Needle_Pinus_(36462623246).jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Gymnosperm_Leaves_Vascular_Bundle_in_Five_Needle_Pinus_(36462623246).jpg",
    imgCap: "Floem dan xilem pada berkas pengangkut daun Pinus berlima jarum.",
    short: "Pengangkut hasil fotosintesis dari daun ke seluruh tubuh dengan arah dua arah. Sel tabung ayak hidup tanpa inti dan didampingi sel pengiring.",
    detail: `
      <h3>Floem (Pembuluh Tapis)</h3>
      <p><strong>Floem</strong> mengedarkan <em>getah olahan</em>, terutama sukrosa hasil fotosintesis, dari sumber (daun dewasa) ke seluruh bagian tumbuhan. Alirannya <strong>dua arah</strong>, digerakkan tekanan turgor (hipotesis aliran tekanan Münch).</p>
      <p>Sel pengangkutnya <strong>hidup</strong> namun telah kehilangan inti:</p>
      <ul>
        <li><strong>Sel tabung ayak</strong> pada angiosperma, berpintu-pintu (dinding ayak) untuk aliran getah.</li>
        <li><strong>Sel pengiring</strong> yang mengatur metabolisme sel tabung ayak.</li>
        <li>Pada gymnosperma ditemukan <strong>sel tapis</strong> dan sel protein albuminosa.</li>
      </ul>
      <p>Kutu daun mengisap getah olahan langsung dari floem karena makanannya sangat padat gula.</p>`,
    funsi: ["Mengedarkan gula dua arah", "Sel tabung ayak", "Aliran tekanan Münch"],
  },

  // ---- CABANG HEWAN ----
  hewan: {
    id: "hewan",
    title: "Jaringan Hewan",
    icon: "paw-print",
    branch: "animal",
    img: IMG("8/82/SEM_blood_cells.jpg/960px-SEM_blood_cells.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:SEM_blood_cells.jpg",
    imgCap: "Mikrograf SEM darah manusia: eritrosit, trombosit, dan neutrofil.",
    short: "Empat jaringan utama tubuh hewan dan manusia, yaitu epitel, ikat (termasuk darah dan lemak), otot, dan saraf.",
    detail: `
      <h3>Jaringan Hewan</h3>
      <p>Tubuh hewan dan manusia tersusun atas <strong>empat jaringan utama</strong> (Campbell, Bab 40):</p>
      <ul>
        <li><strong>Jaringan epitel</strong>, penutup permukaan dan pelapis rongga tubuh yang berfungsi proteksi, sekresi, absorbsi, dan filtrasi.</li>
        <li><strong>Jaringan ikat</strong>, paling beragam: longgar, padat, lemak, tulang rawan, tulang, dan darah.</li>
        <li><strong>Jaringan otot</strong>, kontraktil untuk gerak: polos, rangka, dan jantung.</li>
        <li><strong>Jaringan saraf</strong>, menerima, mengolah, dan meneruskan impuls, tersusun atas neuron dan sel glia.</li>
      </ul>
      <p>Enam kotak yang digambar di papan tulis (otot, ikat, darah, lemak, tulang, saraf) adalah cuplikan keempat kelompok besar ini. <strong>Darah</strong> dan <strong>lemak</strong> sejatinya adalah anggota khusus jaringan ikat.</p>`,
    funsi: ["Empat jaringan utama", "Darah dan lemak termasuk ikat", "Neuron dan glia"],
    children: ["epitel", "ikat", "otot", "saraf"],
  },

  epitel: {
    id: "epitel",
    title: "Jaringan Epitel",
    icon: "square-stack",
    branch: "animal",
    img: IMG("e/e8/Epithelial_Tissues_Simple_Columnar_Epithelium_(40824137585).jpg/960px-Epithelial_Tissues_Simple_Columnar_Epithelium_(40824137585).jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Epithelial_Tissues_Simple_Columnar_Epithelium_(40824137585).jpg",
    imgCap: "Epitel kolom selapis dengan inti memanjang pada dasar sel.",
    short: "Penutup permukaan dan pelapis rongga tubuh dengan sel rapat tanpa matriks. Klasifikasi menurut bentuk sel dan jumlah lapisan.",
    detail: `
      <h3>Jaringan Epitel</h3>
      <p><strong>Jaringan epitel</strong> menutupi permukaan luar tubuh dan melapisi semua rongga dalam. Selnya rapat dengan sedikit matriks antarsel dan tidak berpembuluh darah (avaskular), sehingga bergizi lewat difusi dari jaringan ikat di bawahnya.</p>
      <p>Klasifikasinya ganda:</p>
      <ul>
        <li>Menurut <em>bentuk sel</em>: <strong>skuamosa</strong> (pipih), <strong>kuboid</strong> (kubus), dan <strong>kolom</strong> (silindris).</li>
        <li>Menurut <em>jumlah lapis</em>: <strong>selapis (simpleks)</strong> dan <strong>berlapis (stratifikasi)</strong>.</li>
      </ul>
      <p>Contohnya epitel skuamosa berlapis pada kulit, epitel kolom bersilia pada saluran pernapasan, dan epitel kuboid pada tubulus ginjal.</p>`,
    funsi: ["Melindungi permukaan", "Sekresi dan absorbsi", "Filtrasi"],
  },

  otot: {
    id: "otot",
    title: "Jaringan Otot",
    icon: "dumbbell",
    branch: "animal",
    img: IMG("f/fe/Muscle_Tissue_Intercalated_Discs_in_Cardiac_Muscle_(27061943807).jpg/960px-Muscle_Tissue_Intercalated_Discs_in_Cardiac_Muscle_(27061943807).jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Muscle_Tissue_Intercalated_Discs_in_Cardiac_Muscle_(27061943807).jpg",
    imgCap: "Serat otot jantung bercabang dengan diskus interkalar sebagai garis penghubung antarsel.",
    short: "Jaringan kontraktil khas hewan. Sel memendek karena geseran aktin-miosin. Tiga tipenya adalah otot rangka, polos, dan jantung.",
    detail: `
      <h3>Jaringan Otot</h3>
      <p><strong>Jaringan otot</strong> tersusun atas sel-sel kontraktil (serat otot) yang mengandung protein <strong>aktin</strong> dan <strong>miosin</strong>. Kontraksi terjadi ketika kedua filament saling menggeser (teori filament geser Huxley).</p>
      <p>Tiga tipe jaringan otot:</p>
      <ul>
        <li><strong>Otot rangka</strong> menempel pada tulang dengan gerak sadar (voluntar).</li>
        <li><strong>Otot polos</strong> melapisi organ berongga dengan gerak tak sadar.</li>
        <li><strong>Otot jantung</strong> hanya ada di dinding jantung dengan gerak tak sadar.</li>
      </ul>`,
    funsi: ["Menggerakkan tubuh", "Kontraksi aktin-miosin", "Menghasilkan panas"],
    children: ["otot-rangka", "otot-polos", "otot-jantung"],
  },

  "otot-rangka": {
    id: "otot-rangka",
    title: "Otot Rangka",
    icon: "footprints",
    branch: "animal",
    img: IMG("0/0a/Muscle_Tissue_Skeletal_Muscle_Fibers_(28089114338).jpg/960px-Muscle_Tissue_Skeletal_Muscle_Fibers_(28089114338).jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Muscle_Tissue_Skeletal_Muscle_Fibers_(28089114338).jpg",
    imgCap: "Serat otot rangka dengan striasi yang dikendalikan secara sadar.",
    short: "Serat panjang, multi-inti, bergaris, dengan gerak sadar. Menempel pada tulang lewat tendon dan cepat lelah.",
    detail: `
      <h3>Otot Rangka (Skeletal)</h3>
      <p><strong>Otot rangka</strong> tersusun atas serat otot raksasa (bisa lebih dari 30 cm) yang terbentuk dari peleburan sel-sel embrional, sehingga <em>multi-inti</em> dan bergaris karena penyusunan sarkomer yang teratur.</p>
      <ul>
        <li>Kontraksinya <strong>cepat dan kuat</strong>, dikendalikan sinyal motorik sadar (voluntar).</li>
        <li>Melekat pada tulang lewat <strong>tendon</strong> dan bekerja berpasangan antagonis, misalnya bisep dan trisep.</li>
        <li>Unit fungsionalnya adalah <strong>sarkomer</strong>, segmen antara dua garis Z.</li>
      </ul>`,
    funsi: ["Gerak sadar dan cepat", "Sarkomer dan garis Z", "Pasangan antagonis"],
  },

  "otot-polos": {
    id: "otot-polos",
    title: "Otot Polos",
    icon: "waves",
    branch: "animal",
    img: IMG("f/f0/Smooth_muscle_400x.jpg/960px-Smooth_muscle_400x.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Smooth_muscle_400x.jpg",
    imgCap: "Otot polos perbesaran 400 kali: sel fusiform tanpa striasi, inti tunggal di tengah.",
    short: "Sel fusiform tanpa striasi dengan inti satu di tengah. Gerak tak sadar, melapisi organ berongga, kontraksi lambat dan tahan lama.",
    detail: `
      <h3>Otot Polos</h3>
      <p><strong>Otot polos</strong> tersusun atas sel fusiform (berbentuk gelendong) dengan inti tunggal di tengah dan tanpa striasi. Terdapat di dinding organ berongga: saluran cerna, pembuluh darah, kandung kemih, dan rahim.</p>
      <ul>
        <li>Kontraksinya <strong>lambat dan berombak</strong> (peristaltik), tak sadar (involuntar), dikendalikan saraf otonom dan hormon.</li>
        <li>Sangat <strong>tahan lelah</strong> karena bekerja terus sepanjang hidup.</li>
        <li>Contohnya menggerakkan makanan di usus dan mengatur diameter pembuluh darah.</li>
      </ul>`,
    funsi: ["Peristaltik organ dalam", "Involuntar", "Tahan lelah"],
  },

  "otot-jantung": {
    id: "otot-jantung",
    title: "Otot Jantung (Kardiak)",
    icon: "heart-pulse",
    branch: "animal",
    img: IMG("3/3d/Cardiac_muscle_histology_400x.jpg/960px-Cardiac_muscle_histology_400x.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Cardiac_muscle_histology_400x.jpg",
    imgCap: "Otot jantung perbesaran 400 kali: sel bercabang yang tersambung diskus interkalar.",
    short: "Sel silindris bercabang dengan satu sampai dua inti dan striasi. Tersambung diskus interkalar, involuntar, berdenyut seumur hidup tanpa lelah.",
    detail: `
      <h3>Otot Jantung</h3>
      <p><strong>Otot jantung</strong> hanya ditemukan pada dinding jantung (miokardium). Selnya silindris bercabang dengan satu sampai dua inti dan striasi. Sel-selnya saling menaut lewat <strong>diskus interkalar</strong> yang berisi desmosom (penguat mekanik) dan gap junction (penyambung sinyal).</p>
      <ul>
        <li>Kontraksi ritmis <strong>involuntar</strong> dipicu nodus sinoatrial sebagai pacemaker alami.</li>
        <li>Seluruh dinding jantung berkontraksi sebagai satu kesatuan (sinsitium fungsional).</li>
        <li>Sangat kaya mitokondria dan mioglobin sehingga tidak lelah seumur hidup.</li>
      </ul>`,
    funsi: ["Memompa darah seumur hidup", "Diskus interkalar", "Pacemaker nodus SA"],
  },

  ikat: {
    id: "ikat",
    title: "Jaringan Ikat",
    icon: "network",
    branch: "animal",
    img: IMG("e/e6/Areolar3.jpg/960px-Areolar3.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Areolar3.jpg",
    imgCap: "Jaringan ikat longgar (areolar) dengan sel jarang, serat kolagen, dan elastin.",
    short: "Jaringan paling melimpah. Sel-selnya jarang dan terbenam dalam matriks ekstraselular yang melimpah. Mengikat, menopang, dan melindungi jaringan lain.",
    detail: `
      <h3>Jaringan Ikat</h3>
      <p><strong>Jaringan ikat</strong> adalah jaringan paling melimpah dan beragam. Ciri khasnya sel-sel jarang yang terbenam dalam <strong>matriks ekstraselular</strong>, terdiri atas serat (kolagen, elastin, retikulin) dan substansi dasar.</p>
      <p>Klasifikasi besarnya:</p>
      <ul>
        <li><strong>Jaringan ikat longgar (areolar)</strong> sebagai pembungkus organ.</li>
        <li><strong>Jaringan ikat padat</strong>, teratur pada tendon dan ligamen, tak teratur pada dermis kulit.</li>
        <li><strong>Jaringan ikat khusus</strong> berupa lemak, tulang rawan, tulang, dan darah.</li>
      </ul>
      <p>Sel utamanya adalah <strong>fibroblas</strong> (pembentuk serat), makrofag (pemakan partikel), dan mastosit (penghasil histamin).</p>`,
    funsi: ["Mengikat dan menopang", "Matriks dominan", "Fibroblas dan makrofag"],
    children: ["darah", "lemak", "tulang"],
  },

  darah: {
    id: "darah",
    title: "Jaringan Darah",
    icon: "droplet",
    branch: "animal",
    img: IMG("0/0b/WBC_(neutrophil)_at_centre%2C_numerous_erythrocytes_and_platelets_(dot_like_bodies)_in_Wright%27s_stained_peripheral_blood_smear_(PBS)_microscopy.jpg/960px-WBC_(neutrophil)_at_centre%2C_numerous_erythrocytes_and_platelets_(dot_like_bodies)_in_Wright%27s_stained_peripheral_blood_smear_(PBS)_microscopy.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:WBC_(neutrophil)_at_centre,_numerous_erythrocytes_and_platelets_(dot_like_bodies)_in_Wright's_stained_peripheral_blood_smear_(PBS)_microscopy.jpg",
    imgCap: "Sediaan apus darah tepi berpewarnaan Wright: netrofil di tengah, dikelilingi eritrosit dan trombosit.",
    short: "Jaringan ikat cair dengan sel darah terapung dalam plasma. Eritrosit mengangkut oksigen, leukosit bertahan, trombosit membekukan.",
    detail: `
      <h3>Jaringan Darah</h3>
      <p><strong>Darah</strong> adalah jaringan ikat khusus dengan matriks cair (<strong>plasma</strong>, sekitar 55 persen volume). Komponen selnya:</p>
      <ul>
        <li><strong>Eritrosit</strong> (sel darah merah), bikonkaf tanpa inti pada mamalia, kaya hemoglobin, mengangkut O2 dan sebagian CO2.</li>
        <li><strong>Leukosit</strong> (sel darah putih), pertahanan tubuh, terbagi granulosit (netrofil, eosinofil, basofil) dan agranulosit (limfosit, monosit).</li>
        <li><strong>Trombosit</strong> (keping darah), fragmen sel yang menghasilkan faktor pembekuan.</li>
      </ul>
      <p>Darah juga mengedarkan nutrien, hormon, dan limbah metabolisme sehingga dijuluki sungai kehidupan.</p>`,
    funsi: ["Mengangkut O2 dan nutrien", "Pertahanan imun", "Pembekuan luka"],
  },

  lemak: {
    id: "lemak",
    title: "Jaringan Lemak (Adiposa)",
    icon: "candy",
    branch: "animal",
    img: IMG("4/41/Connective_Tissue_Adipose_(41066512834).jpg/960px-Connective_Tissue_Adipose_(41066512834).jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Connective_Tissue_Adipose_(41066512834).jpg",
    imgCap: "Jaringan lemak dengan adiposit berinti terdorong ke tepi.",
    short: "Jaringan ikat khusus penyimpan lemak. Adiposit penuh tetesan lipid. Berfungsi sebagai cadangan energi, isolasi termal, dan pelindung benturan.",
    detail: `
      <h3>Jaringan Lemak (Adiposa)</h3>
      <p><strong>Jaringan lemak</strong> tersusun dominan atas <strong>adiposit</strong>, sel yang hampir seluruh sitoplasmanya terisi satu tetesan lemak besar sehingga intinya terdorong ke tepi.</p>
      <ul>
        <li><strong>Lemak putih</strong> menyimpan energi (trigliserida), mengisolasi panas, dan menyerap benturan.</li>
        <li><strong>Lemak cokelat</strong> kaya mitokondria dan menghasilkan panas pada bayi serta hewan hibernasi.</li>
        <li>Adiposa juga organ <strong>endokrin</strong> yang menghasilkan hormon leptin pengatur nafsu makan.</li>
      </ul>`,
    funsi: ["Cadangan energi", "Isolasi dan peredam", "Endokrin (leptin)"],
  },

  tulang: {
    id: "tulang",
    title: "Jaringan Tulang",
    icon: "bone",
    branch: "animal",
    img: IMG("5/5d/Compact_bone_histology_2014.jpg/960px-Compact_bone_histology_2014.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Compact_bone_histology_2014.jpg",
    imgCap: "Histologi tulang kompak dengan sistem Havers (osteon) berupa lingkaran lamela.",
    short: "Jaringan ikat paling keras dengan matriks kolagen dan garam kalsium (hidroksiapatit). Selnya osteosit, osteoblas, dan osteoklas. Unit strukturalnya sistem Havers.",
    detail: `
      <h3>Jaringan Tulang</h3>
      <p><strong>Tulang</strong> adalah jaringan ikat paling keras karena matriksnya terkalsifikasi oleh <strong>hidroksiapatit</strong> pada serat kolagen, sehingga keras namun tidak rapuh.</p>
      <ul>
        <li><strong>Osteoblas</strong> membentuk tulang, <strong>osteoklas</strong> menguraikannya, dan <strong>osteosit</strong> adalah sel tulang dewasa dalam lakuna.</li>
        <li>Pada tulang kompak, osteosit tersusun konsentris (lamela) mengelilingi <strong>kanal Havers</strong>, disebut <strong>sistem Havers (osteon)</strong>.</li>
        <li>Fungsinya untuk rangka dan pelindung, penyimpan kalsium, serta pembentuk sel darah pada sumsum merah.</li>
      </ul>`,
    funsi: ["Rangka dan pelindung", "Penyimpan kalsium", "Membentuk sel darah"],
    children: ["rawan", "osteon"],
  },

  rawan: {
    id: "rawan",
    title: "Tulang Rawan (Kartilago)",
    icon: "circle-dashed",
    branch: "animal",
    img: IMG("0/07/Connective_Tissue_Hyaline_Cartilage_(26989336187).jpg/960px-Connective_Tissue_Hyaline_Cartilage_(26989336187).jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Connective_Tissue_Hyaline_Cartilage_(26989336187).jpg",
    imgCap: "Rawan hyaline dengan kondrosit dalam lakuna dan matriks semi-padat.",
    short: "Jaringan ikat semi-padat yang lentur. Kondrosit berada dalam lakuna, matriks berisi kolagen dan kondroitin, tanpa pembuluh darah.",
    detail: `
      <h3>Tulang Rawan (Kartilago)</h3>
      <p><strong>Tulang rawan</strong> bersifat semi-padat namun lentur. Selnya, <strong>kondrosit</strong>, duduk dalam rongga (lakuna) yang terbenam dalam matriks berisi kolagen tipe II dan kondroitin.</p>
      <ul>
        <li><strong>Avaskular</strong>, nutrisi didapat lewat difusi dari perikondrium sehingga cedera rawan sulit sembuh.</li>
        <li>Tipenya: <strong>hyaline</strong> pada ujung tulang sendi dan rangka embrio, <strong>elastis</strong> pada daun telinga, <strong>fibrosa</strong> pada diskus sendi dan meniskus.</li>
      </ul>`,
    funsi: ["Melicinkan sendi", "Rangka embrio", "Penopang fleksibel"],
  },

  osteon: {
    id: "osteon",
    title: "Sistem Havers (Osteon)",
    icon: "target",
    branch: "animal",
    img: IMG("5/58/624_Diagram_of_Compact_Bone-new.jpg/960px-624_Diagram_of_Compact_Bone-new.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:624_Diagram_of_Compact_Bone-new.jpg",
    imgCap: "Diagram tulang kompak dengan osteon dan kanal Havers di pusat lingkaran lamela.",
    short: "Unit struktural tulang kompak: lamela konsentris, osteosit dalam lakuna, dan kanalikulus mengelilingi kanal Havers berisi pembuluh serta saraf.",
    detail: `
      <h3>Sistem Havers (Osteon)</h3>
      <p><strong>Osteon</strong> adalah unit struktural tulang kompak berupa silinder berlapis <strong>lamela</strong> yang mengelilingi <strong>kanal Havers</strong> berisi pembuluh darah dan saraf.</p>
      <ul>
        <li>Osteosit duduk dalam <strong>lakuna</strong> dan dihubungkan oleh rambut sel (<strong>kanalikulus</strong>) agar terjangkau nutrisi.</li>
        <li>Rotasi osteon bertetangga berbeda arah sehingga tulang kuat terhadap puntiran.</li>
      </ul>`,
    funsi: ["Unit struktural tulang", "Jalur pembuluh dan saraf"],
  },

  saraf: {
    id: "saraf",
    title: "Jaringan Saraf",
    icon: "zap",
    branch: "animal",
    img: IMG("2/22/Cortical_Neurons%2C_stained.jpg/960px-Cortical_Neurons%2C_stained.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Cortical_Neurons,_stained.jpg",
    imgCap: "Sel-sel neuron korteks hasil pewarnaan mikroskopis dengan proses yang saling menjalin.",
    short: "Jaringan pengendali. Neuron (dendrit, soma, akson) meneruskan impuls listrik, sel glia menopang dan melindungi. Berfungsi menerima, mengolah, dan memerintah.",
    detail: `
      <h3>Jaringan Saraf</h3>
      <p><strong>Jaringan saraf</strong> tersusun atas dua kelompok sel:</p>
      <ul>
        <li><strong>Neuron</strong>, sel penghantar impuls dengan <em>dendrit</em> (menerima sinyal), <em>badan sel</em> (mengolah, berinti), dan <em>akson</em> (meneruskan keluar) yang berlapis <em>selubung mielin</em> hingga impuls melaju 120 meter per detik. Ujung akson mengirim sinyal lewat <strong>sinapsis</strong> dan neurotransmiter.</li>
        <li><strong>Sel glia</strong>, penopang yang terdiri atas sel Schwann (mielin di saraf tepi), oligodendrosit (mielin di pusat), astrosit, dan mikroglia.</li>
      </ul>
      <p>Impuls bergerak sebagai <strong>potensial aksi</strong>, yaitu perubahan muatan listrik membran. Jaringan ini membentuk sistem saraf pusat dan tepi.</p>`,
    funsi: ["Menerima dan memerintah", "Impuls potensial aksi", "Glia membentuk mielin"],
  },
};

// ------------------------------------------------------------
// PETA KONSEP
// ------------------------------------------------------------
export interface ConceptExtra {
  title: string;
  icon: string;
  text: string;
}

export const CM_EXTRA: Record<string, ConceptExtra> = {
  "c-air": { title: "Air dan mineral naik", icon: "droplets", text: "Getah mentah diangkut xilem dari akar menuju daun." },
  "c-gula": { title: "Hasil fotosintesis", icon: "filter", text: "Sukrosa diedarkan floem dari daun ke seluruh tubuh." },
  "c-kuat": { title: "Kekuatan mekanis", icon: "landmark", text: "Kolenkim dan sklerenkim menopang batang, daun, dan tangkai." },
  "c-gerak": { title: "Gerak tubuh dan organ", icon: "footprints", text: "Kontraksi otot menghasilkan gerak dan panas." },
  "c-o2": { title: "O2, nutrien, imunitas", icon: "droplet", text: "Darah mengedarkan gas, zat makanan, hormon, dan sel imun." },
  "c-impuls": { title: "Impuls dan koordinasi", icon: "zap", text: "Saraf menerima sinyal, mengolah, dan memerintahkan respons." },
};

export interface ConceptNodePos { id: string; x: number; y: number }
export interface ConceptEdge { a: string; b: string; label: string }

export const CM_NODES: ConceptNodePos[] = [
  // KLASTER TUMBUHAN (kiri atas)
  { id: "jaringan", x: 900, y: 60 },
  { id: "tumbuhan", x: 420, y: 220 },
  { id: "meristem", x: 190, y: 390 },
  { id: "meristem-primer", x: 90, y: 570 },
  { id: "meristem-sekunder", x: 330, y: 570 },
  { id: "protoderm", x: 40, y: 750 },
  { id: "prokambium", x: 190, y: 750 },
  { id: "meristem-dasar", x: 340, y: 750 },
  { id: "kambium-interkalar", x: 490, y: 750 },
  { id: "kambium-vasikuler", x: 250, y: 930 },
  { id: "kambium-gabus", x: 460, y: 930 },
  { id: "dewasa", x: 630, y: 390 },
  { id: "epidermis", x: 590, y: 580 },
  { id: "gabus", x: 630, y: 760 },
  { id: "parenkim", x: 760, y: 580 },
  { id: "kolenkim", x: 890, y: 580 },
  { id: "sklerenkim", x: 1030, y: 580 },
  { id: "xilem", x: 800, y: 780 },
  { id: "floem", x: 950, y: 780 },
  { id: "c-air", x: 690, y: 950 },
  { id: "c-gula", x: 1010, y: 950 },
  { id: "c-kuat", x: 1190, y: 780 },
  // KLASTER HEWAN (kanan)
  { id: "hewan", x: 1420, y: 220 },
  { id: "epitel", x: 1260, y: 390 },
  { id: "otot", x: 1420, y: 390 },
  { id: "otot-rangka", x: 1330, y: 580 },
  { id: "otot-polos", x: 1470, y: 580 },
  { id: "otot-jantung", x: 1610, y: 580 },
  { id: "ikat", x: 1560, y: 390 },
  { id: "darah", x: 1700, y: 580 },
  { id: "lemak", x: 1700, y: 390 },
  { id: "tulang", x: 1560, y: 580 },
  { id: "saraf", x: 1690, y: 220 },
  { id: "c-gerak", x: 1330, y: 760 },
  { id: "c-o2", x: 1700, y: 760 },
  { id: "c-impuls", x: 1690, y: 390 },
];

export const CM_EDGES: ConceptEdge[] = [
  { a: "jaringan", b: "tumbuhan", label: "dibedakan menjadi" },
  { a: "jaringan", b: "hewan", label: "dibedakan menjadi" },
  { a: "tumbuhan", b: "meristem", label: "embrional, membelah" },
  { a: "tumbuhan", b: "dewasa", label: "permanen, dewasa" },
  { a: "meristem", b: "meristem-primer", label: "menghasilkan" },
  { a: "meristem", b: "meristem-sekunder", label: "de-diferensiasi" },
  { a: "meristem-primer", b: "protoderm", label: "menjadi epidermis" },
  { a: "meristem-primer", b: "prokambium", label: "menjadi pembuluh primer" },
  { a: "meristem-primer", b: "meristem-dasar", label: "menjadi jaringan dasar" },
  { a: "meristem-primer", b: "kambium-interkalar", label: "sisa di monokotil" },
  { a: "meristem-sekunder", b: "kambium-vasikuler", label: "contohnya" },
  { a: "meristem-sekunder", b: "kambium-gabus", label: "contohnya" },
  { a: "dewasa", b: "epidermis", label: "pelindung organ muda" },
  { a: "epidermis", b: "gabus", label: "diganti saat tua" },
  { a: "dewasa", b: "parenkim", label: "jaringan dasar" },
  { a: "dewasa", b: "kolenkim", label: "penguat muda" },
  { a: "dewasa", b: "sklerenkim", label: "penguat tua" },
  { a: "dewasa", b: "xilem", label: "pengangkut" },
  { a: "dewasa", b: "floem", label: "pengangkut" },
  { a: "xilem", b: "c-air", label: "mengangkut" },
  { a: "floem", b: "c-gula", label: "mengedarkan" },
  { a: "kolenkim", b: "c-kuat", label: "memberi" },
  { a: "sklerenkim", b: "c-kuat", label: "memberi" },
  { a: "hewan", b: "epitel", label: "melapisi" },
  { a: "hewan", b: "otot", label: "kontraktil" },
  { a: "hewan", b: "ikat", label: "mengikat" },
  { a: "hewan", b: "saraf", label: "mengendalikan" },
  { a: "ikat", b: "darah", label: "matriks cair" },
  { a: "ikat", b: "lemak", label: "khusus lemak" },
  { a: "ikat", b: "tulang", label: "matriks kalsium" },
  { a: "otot", b: "otot-rangka", label: "voluntar" },
  { a: "otot", b: "otot-polos", label: "involuntar" },
  { a: "otot", b: "otot-jantung", label: "involuntar" },
  { a: "otot", b: "c-gerak", label: "menghasilkan" },
  { a: "darah", b: "c-o2", label: "mengedarkan" },
  { a: "saraf", b: "c-impuls", label: "meneruskan" },
  { a: "saraf", b: "otot", label: "memerintahkan" },
  { a: "tulang", b: "c-gerak", label: "menopang gerak" },
];

// ------------------------------------------------------------
// ESAI (8)
// ------------------------------------------------------------
export interface Essay {
  id: string;
  title: string;
  icon: string;
  img: string;
  imgPage: string;
  imgCap: string;
  lead: string;
  body: string;
}

export const ESSAYS: Essay[] = [
  {
    id: "esai-tumbuhan",
    title: "Pabrik yang Tak Pernah Berhenti: Menyelami Jaringan Tumbuhan",
    icon: "leaf",
    img: IMG("1/13/Mesophytic_Leaf_Cross_Section_Microscope_Image.jpg/960px-Mesophytic_Leaf_Cross_Section_Microscope_Image.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Mesophytic_Leaf_Cross_Section_Microscope_Image.jpg",
    imgCap: "Penampang daun dari mikroskop cahaya, kota kecil yang dikelola tiga sistem jaringan sekaligus.",
    lead: "Berbeda dari hewan yang berhenti tumbuh setelah dewasa, tumbuhan terus membangun tubuhnya sepanjang hidup berkat jaringan embrional yang tak pernah habis.",
    body: `
      <p>Berdiri di bawah pohon beringin tua, kita sebenarnya sedang berdiri di hadapan konstruksi yang tak pernah selesai. Tumbuhan adalah organisme yang tumbuh sepanjang hidupnya (<em>indeterminate growth</em>), dan rahasia keabadian pertumbuhan itu tersimpan dalam jaringan mungil bernama <strong>meristem</strong>, kumpulan sel embrional yang dindingnya tipis, protoplasmanya padat, dan yang terpenting: tak pernah berhenti membelah.</p>
      <p>Para ahli membagi jaringan tumbuhan berdasarkan asalnya. <strong>Promeristem</strong>, warisan langsung embrio biji, duduk di puncak tumbuh akar dan batang. Di belakangnya, <strong>meristem primer</strong> terus membelah lalu berdiferensiasi menjadi tiga jaringan utama: <em>protoderm</em> yang menjadi epidermis, <em>prokambium</em> yang menjadi xilem dan floem primer, serta <em>meristem dasar</em> yang menjadi parenkim, kolenkim, dan sklerenkim. Inilah <strong>pertumbuhan primer</strong> yang memanjangkan tubuh tumbuhan.</p>
      <p>Namun pohon yang mengagumkan tidak cukup hanya tinggi; ia juga harus membesar. Tugas itu diambil alih <strong>meristem sekunder</strong>, sel-sel dewasa yang kedewasaannya kembali (<em>de-diferensiasi</em>) lalu membelah lagi. <strong>Kambium vasikuler</strong> melapisi kayu baru ke dalam dan floem baru ke luar, sedangkan <strong>kambium gabus</strong> menggantikan epidermis tua dengan periderm. Aktivitas kambium yang berubah mengikuti musim mencetak <strong>cincin tahun</strong>, arsip alami untuk menghitung umur pohon.</p>
      <p>Jaringan permanen kemudian menjalankan pemerintahan sehari-hari. <strong>Epidermis</strong> menjaga perbatasan dengan kutikula lilin dan mengatur pintu napas lewat stomata. <strong>Parenkim</strong> berdinding tipis menyimpan amilum, mengapungkan tumbuhan air lewat aerenkim, bahkan memulihkan luka karena sebagian selnya masih bisa membelah. <strong>Kolenkim</strong> menopang pucuk yang masih bertumbuh, sedangkan <strong>sklerenkim</strong>, sel mati berlignin, memberi kekuatan permanen pada organ dewasa.</p>
      <p>Lalu ada dua sungai di dalam batang. <strong>Xilem</strong>, yang sel-selnya mati saat berfungsi, mengangkut air dan mineral ke atas dengan bantuan tarikan transpirasi. <strong>Floem</strong>, yang sel tabungnya hidup namun kehilangan inti, mengedarkan gula dua arah. Kedua sungai ini saling menyusup dalam bundel pengangkut, arsitektur yang membuat pohon memindahkan ratusan liter air sehari tanpa satu pun pompa.</p>`,
  },
  {
    id: "esai-hewan",
    title: "Empat Kain Tubuh: Menyelami Jaringan Hewan",
    icon: "paw-print",
    img: IMG("8/82/SEM_blood_cells.jpg/960px-SEM_blood_cells.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:SEM_blood_cells.jpg",
    imgCap: "Eritrosit, trombosit, dan neutrofil dalam mikrograf SEM. Darah adalah jaringan ikat yang mengalir.",
    lead: "Tubuh hewan adalah mozaik empat jaringan: epitel yang melindungi, ikat yang menghubungkan, otot yang menggerakkan, dan saraf yang memerintah.",
    body: `
      <p>Jika tumbuhan tumbuh dari ujung-ujungnya, hewan membangun dirinya dari dalam. Embrio hewan menetapkan nasib sel-selnya sejak dini menjadi empat kain besar yang tak akan berubah lagi: <strong>epitel, ikat, otot, dan saraf</strong>.</p>
      <p><strong>Jaringan epitel</strong> adalah kulit semua permukaan: luar tubuh, rongga dalam, dan pembuluh. Sel-selnya rapat tanpa matriks, tersusun presisi menurut bentuk (pipih, kubus, silindris) dan lapisan (selapis hingga berlapis). Ia menjadi benteng pertama, mesin sekresi kelenjar, penyerapan usus, hingga filtrasi ginjal, namun tetap avaskular karena hidup dari difusi jaringan di bawahnya.</p>
      <p><strong>Jaringan ikat</strong> justru kebalikannya: sel-selnya jarang, matriksnya melimpah. Inilah lem dan rangka tubuh, dari jaringan areolar longgar di bawah kulit, tendon padat penambat otot, tulang rawan pelicin sendi, tulang berhidroksiapatit penyimpan kalsium, hingga <strong>darah</strong> yang matriksnya cair dan mengalir sepanjang hayat. Bahkan lemak pun jaringan ikat, berupa adiposit yang menyimpan energi dalam bentuk paling padat.</p>
      <p><strong>Jaringan otot</strong> mengubah energi kimia menjadi gerak melalui geseran aktin-miosin. Tiga kerabat dengan watak berbeda: otot rangka yang kuat, cepat, dan tunduk pada kehendak; otot polos yang pelan dan berombak; serta otot jantung yang bercabang, tersambung diskus interkalar, dan berdenyut lebih dari tiga miliar kali tanpa meminta istirahat.</p>
      <p>Terakhir, <strong>jaringan saraf</strong> adalah jaringan paling terspesialisasi. Neuron menerima ribuan sinyal lewat dendrit, memutuskan di soma, lalu mengirim potensial aksi sepanjang akson yang dipercepat selubung mielin hingga 120 meter per detik, dan menyampaikannya lewat sinapsis. Bersama sel glia, jaringan ini membentuk otak, struktur paling kompleks yang kita kenal di alam semesta.</p>`,
  },
  {
    id: "esai-meristem",
    title: "Elegi Ujung yang Tak Pernah Tua",
    icon: "sprout",
    img: IMG("f/fb/Lycopodium_shoot_apex.png/960px-Lycopodium_shoot_apex.png"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Lycopodium_shoot_apex.png",
    imgCap: "Gambar klasik puncak pucuk Lycopodium dengan meristem apikal di pusatnya.",
    lead: "Di ujung setiap akar dan setiap pucuk tersimpan sebuah paradoks: sel tertua dalam tubuh tumbuhan justru yang tetap paling muda selamanya.",
    body: `
      <p>Tumbuhan hidup dengan paradoks yang indah. Bagian tubuhnya yang paling tua secara sejarah (ujung akar dan ujung batang yang pertama kali ada) adalah bagian yang paling awet muda. Sel-sel di sana, yang disebut <strong>meristem apikal</strong>, tidak pernah menua sebab mereka tidak pernah berhenti membelah, dan setiap pembelahan selalu menyisakan satu anak sel yang tetap meristematik.</p>
      <p>Strategi ini disebut <em>indeterminate growth</em>. Hewan menghentikan pertumbuhannya setelah mencapai ukuran dewasa, tetapi tumbuhan terus menambah organ baru sepanjang hidup: daun baru, cabang baru, bunga baru. Kuncinya adalah mempertahankan populasi sel embrional di titik-titik strategis yang disebut <strong>daerah tumbuh</strong>.</p>
      <p>Dari puncak tumbuh, nasib sel ditentukan seperti lini produksi. Lapisan terluar menjadi <strong>protoderm</strong> yang menyelubungi tubuh. Jalur tengah menjadi <strong>prokambium</strong> yang mencetak pipa air dan pipa makanan. Sisanya menjadi <strong>meristem dasar</strong> yang mengisi dan menyimpan. Ketiganya adalah cetakan pertama tubuh tumbuhan dewasa.</p>
      <p>Menariknya, sisa meristem primer tidak selalu habis. Pada rumput, bambu, dan jagung, tersisa <strong>kambium interkalar</strong> di pangkal ruas yang terus memanjangkan batang meski ujungnya dipotong. Inilah alasan lapangan bola tetap hijau setelah digunduli, dan alasan pemandu alam menasihati pengunjung untuk tidak menginjak tunas bambu yang sedang melesat.</p>
      <p>Maka setiap kali kita memetik sehelai daun muda, ingatlah bahwa ujung tumbuhan adalah millis detik keabadiannya: daerah yang tidak mengenal tua karena selalu mencetak masa depan lebih cepat daripada waktu yang berlalu.</p>`,
  },
  {
    id: "esai-kayu",
    title: "Arsip yang Tumbuh: Membaca Sejarah dalam Kayu",
    icon: "tree-deciduous",
    img: IMG("3/3a/Woody_Dicot_Stem_Periderm_in_Two_Year_Tilia_(34319700254).jpg/960px-Woody_Dicot_Stem_Periderm_in_Two_Year_Tilia_(34319700254).jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Woody_Dicot_Stem_Periderm_in_Two_Year_Tilia_(34319700254).jpg",
    imgCap: "Periderm batang Tilia dua tahun, lapisan pelindung yang terus menebal seiring umur.",
    lead: "Setiap tahun, kambium mencatat cuaca, kekeringan, dan kebakaran ke dalam cincin kayu. Pohon adalah penulis yang paling jujur tentang iklim bumi.",
    body: `
      <p>Pohon yang mengayu melakukan sesuatu yang langka: ia menuliskan tiap tahun hidupnya ke dalam tubuhnya sendiri. Penulisnya adalah <strong>kambium vasikuler</strong>, lapisan sel meristematik tipis di antara kayu dan kulit kayu yang membelah dua arah, menghasilkan xilem sekunder ke dalam dan floem sekunder ke luar.</p>
      <p>Catatan itu terjadi karena aktivitas kambium tidak konstan. Ketika musim semi datang dengan air melimpah, kambium mencetak sel kayu besar dan berdinding tipis (kayu awal). Ketika musim kering tiba, sel yang dicetak kecil dan berdinding tebal (kayu akhir). Kontras kedua zona inilah yang tampak sebagai <strong>cincin tahun</strong> pada penampang batang.</p>
      <p>Karena polanya berulang setiap tahun, jumlah cincin menunjukkan umur pohon. Namun ilmunya tidak berhenti di situ. Cincin yang sempit menandakan tahun kering, cincin yang lebar menandakan tahun basah, bekas luka menandakan kebakaran atau tanah longsor, dan cincin yang tiba-tiba hilang pada satu sisi menandakan kemungkinan tanah longsor yang merusak sisi kambium. Ilmu membaca arsip ini disebut <strong>dendrokronologi</strong>, dan ia telah dipakai untuk merekonstruksi iklim ribuan tahun ke belakang serta menentukan umur bangunan kuno.</p>
      <p>Di luar kayu, <strong>kambium gabus (felogen)</strong> mengerjakan pekerjaan yang lebih tersembunyi. Ia menggantikan epidermis yang tak sanggup mengikuti pertambahan diameter dengan lapisan baru bernama <strong>periderm</strong>, tersusun dari gabus (felem) yang selnya mati berdinding suberin. Suberin ini kedap air dan gas sehingga kulit kayu menjadi perisai sekaligus mantel isolasi.</p>
      <p>Maka ketika tangan kita menyentuh kulit kasar pohon jati tua, kita sebenarnya menyentuh arsip yang lebih tua dari negara tempat kita berdiri, ditulis rapi oleh dua kambium yang tak pernah berhenti bekerja.</p>`,
  },
  {
    id: "esai-dv",
    title: "Dua Dunia, Satu Prinsip: Meristem dan Kambium",
    icon: "git-branch",
    img: IMG("8/85/Herbaceous_Dicot_Stem_Cambium_and_Phloem_in_Cucurbita_(37411755521).jpg/960px-Herbaceous_Dicot_Stem_Cambium_and_Phloem_in_Cucurbita_(37411755521).jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Herbaceous_Dicot_Stem_Cambium_and_Phloem_in_Cucurbita_(37411755521).jpg",
    imgCap: "Berkas pengangkut batang Cucurbita dengan kambium di antara xilem dan floem.",
    lead: "Tumbuhan punya dua strategi bertumbuh: memanjang lewat meristem primer dan membesar lewat meristem sekunder. Keduanya memakai trik yang sama: menunda penuaan sel.",
    body: `
      <p>Semua pertumbuhan tumbuhan bermula dari satu kemampuan ajaib: sel yang tidak mau membedakan nasibnya terlalu cepat. Sel meristem menjaga khasiat embrionalnya, membelah terus, dan hanya berdiferensiasi ketika posisinya sudah memungkinkan. Dari prinsip tunggal ini lahir dua strategi pertumbuhan yang berbeda tujuan.</p>
      <p><strong>Pertumbuhan primer</strong> dikerjakan meristem apikal di ujung akar dan ujung batang. Sel-selnya membelah lalu memanjang, mendorong ujung tumbuh menyusup ke dalam tanah atau menjulang ke udara. Pada monokotil seperti bambu, strategi ini disempurnakan dengan <strong>kambium interkalar</strong> di pangkal setiap ruas sehingga pertumbuhan panjang terjadi di banyak titik sekaligus.</p>
      <p><strong>Pertumbuhan sekunder</strong> adalah cerita yang berbeda. Di sini sel-sel yang telah dewasa mengalami <em>de-diferensiasi</em>: mereka melepas identitas dewasanya, kembali membelah, dan menjadi meristem lagi. Dua kambium utamanya adalah <strong>kambium vasikuler</strong> yang menghasilkan kayu dan floem sekunder, serta <strong>kambium gabus (felogen)</strong> yang menghasilkan periderm.</p>
      <p>Perbandingan keduanya mengajarkan konsep besar biologi. Pertumbuhan primer membangun tubuh yang baru; pertumbuhan sekunder memperkuat tubuh yang lama. Yang satu menambah panjang, yang lain menambah diameter. Yang satu membuat daun dan bunga, yang lain membuat kayu dan kulit kayu. Namun keduanya bermula dari sel yang sama dengan kemampuan yang sama: tetap muda saat dibutuhkan, dan membedakan diri saat dipanggil.</p>
      <p>Ketika sebatang pohon jati tumbuh dari biji menjadi raksasa yang menaungi, ia melakukannya dengan dua kambium yang bekerja bergantian sepanjang tahun. Dari luar tampak diam, tetapi di dalamnya sedang berlangsung dua proyek konstruksi raksasa yang tak pernah berhenti.</p>`,
  },
  {
    id: "esai-otot",
    title: "Tiga Saudara yang Berbeda Nasib: Cerita Jaringan Otot",
    icon: "dumbbell",
    img: IMG("0/0a/Muscle_Tissue_Skeletal_Muscle_Fibers_(28089114338).jpg/960px-Muscle_Tissue_Skeletal_Muscle_Fibers_(28089114338).jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Muscle_Tissue_Skeletal_Muscle_Fibers_(28089114338).jpg",
    imgCap: "Serat otot rangka yang panjang, multi-inti, dan bergaris.",
    lead: "Otot rangka, polos, dan jantung berasal dari mesoderm yang sama, namun menjalani hidup yang sangat berbeda: satu patuh pada kehendak, dua lainnya bekerja senyap seumur hidup.",
    body: `
      <p>Tubuh kita memiliki tiga jenis otot yang bermula dari jaringan embrional yang sama, mesoderm, namun menjalani tiga kehidupan yang berbeda. Sebut mereka tiga saudara: si bungsung otot rangka, si senyap otot polos, dan si setia otot jantung.</p>
      <p><strong>Otot rangka</strong> adalah saudara yang paling gemar menonjol. Sel-selnya raksasa, hasil peleburan banyak sel embrional sehingga berinti banyak, dan bergaris karena sarkomer tersusun presisi. Ia bekerja hanya bila diperintah sadar: mengangkat tangan, melangkah, tersenyum. Sebagai konsekuensi kecepatannya, ia cepat lelah dan butuh istirahat.</p>
      <p><strong>Otot polos</strong> adalah saudara yang bekerja senyap. Selnya kecil, gelendong, tanpa garis, dan berinti satu. Ia melapisi usus, pembuluh darah, kandung kemih, dan rahim, berkontraksi lambat berombak tanpa kita sadari. Kontraksinya lambat, tetapi ia tidak pernah lelah karena energinya diatur hemat oleh saraf otonom dan hormon.</p>
      <p><strong>Otot jantung</strong> adalah saudara yang paling setia. Selnya bercabang dan tersambung lewat <strong>diskus interkalar</strong> yang berisi desmosom sebagai angkup mekanik dan gap junction sebagai kabel listrik. Akibatnya, satu sel berdenyut, semua sel ikut berdenyut: jantung berkontraksi sebagai satu kesatuan. Mitokondrinya sangat banyak sehingga jantung tak pernah merasakan kelelahan seumur hidup.</p>
      <p>Tiga saudara ini mengajarkan bahwa dari asal yang sama, sel dapat mengambil jalur spesialisasi yang sangat berbeda. Kita adalah penjumlahan dari tiga watak itu: yang tunduk pada kehendak, yang bekerja di balik layar, dan yang berdenyut tanpa pernah meminta pengakuan.</p>`,
  },
  {
    id: "esai-darah",
    title: "Sungai yang Mengalir dalam Kita",
    icon: "droplet",
    img: IMG("c/c6/Blood_film_01.jpg/960px-Blood_film_01.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Blood_film_01.jpg",
    imgCap: "Sediaan darah tepi: eritrosit yang merata, leukosit yang besar, dan trombosit yang kecil.",
    lead: "Darah adalah jaringan ikat yang menolak diam. Sel-selnya mengapung dalam sungai plasma, bekerja tanpa pernah bertemu satu sama lain.",
    body: `
      <p>Pada umumnya jaringan ikat berupa sel-sel yang tersebar dalam matriks padat, seperti tulang atau tendon. Namun darah adalah versi paling radikal dari resep itu: matriksnya cair, sel-selnya terapung, dan jaringannya mengalir ke seluruh tubuh dalam satu hari.</p>
      <p>Penduduk utamanya adalah <strong>eritrosit</strong>, sel darah merah berbentuk bikonkaf yang telah melepas intinya agar isi penuh oleh <strong>hemoglobin</strong>. Satu tetes darah memuat jutaan eritrosit, dan setiap eritrosit membawa jutaan molekul hemoglobin yang mampu mengikat O2 di paru lalu melepaskannya di jaringan yang butuh.</p>
      <p>Di antara mereka berpatroli <strong>leukosit</strong>, sel darah putih yang lebih besar dan berinti. Mereka tentara dengan spesialisasi berbeda: netrofil yang first responder memakan bakteri, limfosit yang mengingat musuh dan memproduksi antibodi, monosit yang menjadi makrofag besar di jaringan, eosinofil yang menangani parasit, dan basofil yang melepaskan histamin saat alergi.</p>
      <p>Penduduk terkecil adalah <strong>trombosit</strong>, fragmen sel tanpa inti yang berpatroli menunggu kebocoran. Ketika pembuluh robek, mereka menempel, membentuk sumbat, dan melepaskan faktor pembekuan yang menarik serat fibrin menjadi jaring penutup luka.</p>
      <p>Semua itu terapung dalam <strong>plasma</strong>, cairan kuning pucat yang membawa nutrien, hormon, limbah, dan panas. Darah adalah jaringan ikat yang paling tidak biasa namun paling penuh pengorbanan: selnya mati dalam hitungan hari dan diganti terus, sehingga sungai kehidupan ini tak pernah kehabisan pendayung.</p>`,
  },
  {
    id: "esai-saraf",
    title: "Kota yang Berbisik Listrik: Menyelami Jaringan Saraf",
    icon: "zap",
    img: IMG("2/22/Cortical_Neurons%2C_stained.jpg/960px-Cortical_Neurons%2C_stained.jpg"),
    imgPage: "https://commons.wikimedia.org/wiki/File:Cortical_Neurons,_stained.jpg",
    imgCap: "Sel-sel neuron korteks hasil pewarnaan mikroskopis dengan proses yang saling menjalin seperti jaringan kabel.",
    lead: "Otak manusia memuat sekitar 86 miliar neuron yang saling terhubung ratusan triliun sinapsis. Jaringan saraf adalah infrastruktur paling kompleks di alam yang diketahui.",
    body: `
      <p>Jika setiap jaringan tubuh punya keahlian khas, jaringan saraf adalah ahli komunikasi tercepat. Sinyalnya berupa <strong>potensial aksi</strong>, gelombang listrik yang merambat di membran sel hingga 120 meter per detik pada saraf bermielin. Tidak ada hormon, tidak ada aliran darah, yang dapat menandingi kecepatan itu.</p>
      <p>Sel utamanya, <strong>neuron</strong>, dirancang seperti kabel berbio: <em>dendrit</em> bercabang banyak untuk menerima ribuan sinyal, <em>badan sel</em> menjumlahkan semuanya, dan <em>akson</em> meneruskan keputusan ke sel berikutnya. Di ujung akson terdapat <strong>sinapsis</strong>, celah sempit yang dilintasi neurotransmiter seperti dopamin dan serotonin.</p>
      <p>Kecepatan potensial aksi bukan bakat bawaan. Ia diperoleh lewat <strong>selubung mielin</strong>, lapisan lemak yang dibungkus sel Schwann di saraf tepi dan oligodendrosit di otak. Celah-celah kecil di antara mielin (nodus Ranvier) membuat impuls melompat dari satu celah ke celah berikutnya (konduksi saltatori), mempercepat perjalanan sepuluh kali lipat.</p>
      <p>Neuron tidak bekerja sendiri. Mereka didampingi <strong>sel glia</strong> yang jumlahnya justru setara atau lebih banyak: astrosit yang memberi makan dan mengatur sinapsis, oligodendrosit dan sel Schwann yang membungkus mielin, serta mikroglia yang menjadi penjaga imun. Sekitar separuh volume otak adalah glia, mitra yang selama ini diremehkan.</p>
      <p>Semua itu bermuara pada sebuah fakta yang membingungkan: subjek yang sedang membaca kalimat ini adalah hasil kerja jaringan yang sedang membaca dirinya sendiri. Tidak ada cermin yang lebih dalam daripada sistem saraf yang berpikir tentang sistem saraf.</p>`,
  },
];

// ------------------------------------------------------------
// KUIS (berlevel)
// ------------------------------------------------------------
export type QuizLevel = 1 | 2 | 3;

export interface QuizItem {
  q: string;
  o: string[];
  a: number;
  why: string;
}

export interface QuizLevelDef {
  level: QuizLevel;
  title: string;
  icon: string;
  desc: string;
  items: QuizItem[];
}

export const QUIZ_LEVELS: QuizLevelDef[] = [
  {
    level: 1,
    title: "Pemula",
    icon: "signal-low",
    desc: "Kenali definisi dasar dan klasifikasi jaringan.",
    items: [
      { q: "Kelompok sel yang berasal dari sel yang sama dengan bentuk dan fungsi sama disebut…", o: ["Organ", "Jaringan", "Sistem organ", "Populasi"], a: 1, why: "Jaringan adalah kelompok sel serupa, unit struktural organisme multiseluler." },
      { q: "Jaringan embrional tumbuhan yang sel-selnya selalu membelah disebut…", o: ["Parenkim", "Meristem", "Xilem", "Sklerenkim"], a: 1, why: "Meristem adalah jaringan embrional yang aktif membelah (mitosis) sepanjang hidup." },
      { q: "Berikut yang bukan jaringan utama hewan adalah…", o: ["Epitel", "Ikat", "Otot", "Kolenkim"], a: 3, why: "Kolenkim adalah jaringan penguat tumbuhan, bukan jaringan hewan." },
      { q: "Jaringan pengangkut air pada tumbuhan adalah…", o: ["Floem", "Xilem", "Kambium", "Epidermis"], a: 1, why: "Xilem mengangkut air dan mineral dari akar ke daun (getah mentah)." },
      { q: "Jaringan ikat yang matriksnya cair adalah…", o: ["Tulang", "Rawan", "Darah", "Tendon"], a: 2, why: "Darah adalah jaringan ikat dengan matriks cair berupa plasma." },
    ],
  },
  {
    level: 2,
    title: "Menengah",
    icon: "signal-medium",
    desc: "Pahami fungsi, struktur, dan contoh spesifik tiap jaringan.",
    items: [
      { q: "Sel pengangkut floem yang telah kehilangan inti adalah…", o: ["Trakeid", "Sel tabung ayak", "Elemen pembuluh", "Sel pengiring"], a: 1, why: "Sel tabung ayak hidup tanpa inti, metabolismenya diatur sel pengiring." },
      { q: "Penebalan dinding sel tidak merata pada sel hidup penguat organ muda terdapat pada…", o: ["Sklerenkim", "Kolenkim", "Xilem", "Periderm"], a: 1, why: "Kolenkim berupa sel hidup dengan dinding primer menebal di sudut sel." },
      { q: "Kambium gabus (felogen) menghasilkan…", o: ["Kayu dan floem", "Felem dan feloderm", "Protoderm dan prokambium", "Trakeid dan trakea"], a: 1, why: "Felogen menghasilkan felem (gabus) ke luar dan feloderm ke dalam, membentuk periderm." },
      { q: "Unit struktural tulang kompak yang mengelilingi kanal Havers disebut…", o: ["Osteon", "Lakuna", "Lamela", "Osteoklas"], a: 0, why: "Osteon (sistem Havers) terdiri atas lamela konsentris, osteosit, dan kanalikulus." },
      { q: "Otot yang berinti satu di tengah, fusiform, tanpa striasi adalah…", o: ["Otot rangka", "Otot jantung", "Otot polos", "Serat sklerenkim"], a: 2, why: "Otot polos berbentuk gelendong, satu inti tengah, tanpa garis, involuntar." },
    ],
  },
  {
    level: 3,
    title: "Mahir",
    icon: "signal-high",
    desc: "Uji nalar: kaitkan struktur, mekanisme, dan kasus nyata.",
    items: [
      { q: "Cincin tahun pada kayu terbentuk karena…", o: ["Kambium vasikuler menghasilkan sel berbeda tiap musim", "Felogen bekerja hanya saat kering", "Floem mati tiap akhir tahun", "Xilem primer berganti tiap tahun"], a: 0, why: "Kambium vasikuler mencetak kayu awal besar (musim basah) dan kayu akhir kecil (musim kering), kontrasnya tampak sebagai cincin." },
      { q: "Rumput tetap memanjang meski ujungnya terpotong karena memiliki…", o: ["Kambium vasikuler", "Kambium interkalar", "Felogen", "Promeristem"], a: 1, why: "Kambium interkalar adalah sisa meristem primer di pangkal ruas monokotil." },
      { q: "Kontraksi otot jantung seluruh dinding terjadi serempak karena adanya…", o: ["Sarkomer", "Diskus interkalar", "Garis Z", "Tendon"], a: 1, why: "Diskus interkalar berisi desmosom dan gap junction yang meneruskan sinyal antarsel." },
      { q: "Setelah terjadi luka pada tumbuhan, jaringan yang paling berperan menutup luka adalah…", o: ["Sklerenkim", "Parenkim yang kembali membelah", "Xilem", "Trikoma"], a: 1, why: "Sebagian parenkim tetap mampu membelah sehingga menutup luka dan membentuk tunas adventif." },
      { q: "Impuls saraf dapat melaju hingga 120 m/s karena…", o: ["Jumlah dendrit yang banyak", "Selubung mielin dan konduksi saltatori", "Ukuran soma yang besar", "Neurotransmiter yang melimpah"], a: 1, why: "Mielin membuat impuls melompat antar nodus Ranvier, mempercepat sepuluh kali lipat." },
    ],
  },
];

// ------------------------------------------------------------
// SUMBER
// ------------------------------------------------------------
export interface Source { t: string; u: string }

export const SOURCES: Source[] = [
  { t: "Campbell, N. A. dkk. (2021). Biology: A Global Approach (12th ed.). Pearson.", u: "https://www.pearson.com/en-us/subject-catalog/p/biology-a-global-approach/P200000003358" },
  { t: "Solomon, E. P., Martin, C. E., Martin, D. W., & Berg, L. R. (2019). Biology (11th ed.). Cengage.", u: "https://www.cengage.com/c/biology-11e-solomon" },
  { t: "OpenStax. Biology 2e: Plant Form and Physiology serta Animal Tissues.", u: "https://openstax.org/details/books/biology-2e" },
  { t: "Evert, R. F. (2006). Esau's Plant Anatomy (3rd ed.). Wiley.", u: "https://www.wiley.com/en-us/Esau%27s+Plant+Anatomy%3A+Meristems%2C+Cells%2C+and+Tissues+of+the+Plant+Body%3A+Their+Structure%2C+Function%2C+and+Development%2C+3rd+Edition-p-9780470047385" },
  { t: "Wikimedia Commons: seluruh gambar mikroskopis dan diagram dengan lisensi terbuka.", u: "https://commons.wikimedia.org" },
  { t: "KBBI VI: definisi kata jaringan.", u: "https://kbbi.kemdikbud.go.id/entri/jaringan" },
];
