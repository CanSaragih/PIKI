export type BeritaCategory =
  | "Nasional"
  | "Organisasi"
  | "Opini"
  | "Daerah"
  | "Agenda";

export type Berita = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: BeritaCategory;
  date: string;
  dateISO: string;
  author: string;
  source: string;
  sourceUrl: string;
  image: string;
  featured?: boolean;
  breaking?: boolean;
  readMinutes: number;
};

export const beritaCategories: BeritaCategory[] = [
  "Nasional",
  "Organisasi",
  "Opini",
  "Daerah",
  "Agenda",
];

export const beritaList: Berita[] = [
  {
    slug: "maruarar-sirait-dilantik-ketua-umum-dpp-piki-2026-2031",
    title:
      "Maruarar Sirait Resmi Dilantik sebagai Ketua Umum DPP PIKI Periode 2026–2031",
    excerpt:
      "Menteri PKP Maruarar Sirait dilantik memimpin Persatuan Inteligensia Kristen Indonesia setelah serah terima dari kepengurusan Badikenita Sitepu di GPIB Paulus, Jakarta.",
    body: [
      "Menteri Perumahan dan Kawasan Permukiman (PKP) RI Maruarar Sirait resmi dilantik menjadi Ketua Umum Dewan Pimpinan Pusat (DPP) Persatuan Inteligensia Kristen Indonesia (PIKI) periode 2026–2031.",
      "Serah terima jabatan dari kepengurusan DPP PIKI 2020–2025 berlangsung di GPIB Paulus, Menteng, Jakarta Pusat, Sabtu (30/5/2026) malam. Estafet kepemimpinan diterima dari Ketua Umum periode sebelumnya, Dr. Badikenita Br. Sitepu, S.E., S.H., M.Si., dan Sekretaris Jenderal Dr. Audy Wuisang.",
      "Dalam kepengurusan baru, Maruarar didampingi Drs. Benyamin Patondok, M.M. sebagai Sekretaris Jenderal dan Juniver Girsang sebagai Bendahara Umum, bersama jajaran pengurus lintas profesi yang disebut sebagai “Superteam”.",
      "Dalam pidato perdananya, Maruarar menegaskan PIKI harus menjadi organisasi yang menghasilkan gagasan, kebijakan, dan kepemimpinan berdampak—bukan sekadar forum diskusi. Ia juga menekankan pentingnya kualitas SDM dan akses guru agama Kristen di daerah sebagai bagian dari hak pendidikan yang adil.",
      "Acara pelantikan dihadiri Menteri Dalam Negeri Tito Karnavian, Menteri Agama Nasaruddin Umar, Kepala Badan Komunikasi Pemerintah Muhammad Qodari, serta Ketua Umum PGI Pdt. Jacklevyn Frits Manuputty.",
    ],
    category: "Nasional",
    date: "31 Mei 2026",
    dateISO: "2026-05-31",
    author: "Redaksi Portal Berita PIKI",
    source: "ANTARA / Media Indonesia",
    sourceUrl:
      "https://mataram.antaranews.com/berita/556015/maruarar-sirait-resmi-dilantik-menjadi-ketua-umum-dpp-piki",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    breaking: true,
    readMinutes: 4,
  },
  {
    slug: "piki-fokus-jadi-pusat-pemikiran-indonesia-emas-2045",
    title: "PIKI Fokus Jadi Pusat Pemikiran Menuju Indonesia Emas 2045",
    excerpt:
      "Kepengurusan DPP PIKI 2026–2031 menegaskan transformasi organisasi menjadi strategic national think tank yang menghasilkan gagasan dan solusi konkret bagi bangsa.",
    body: [
      "Pelantikan pengurus pusat PIKI periode 2026–2031 menandai babak baru bagi organisasi untuk mempertegas peran intelektual Kristen dalam mengawal visi Indonesia Emas 2045.",
      "Ketua Umum Maruarar Sirait menegaskan komitmen organisasi bertransformasi menjadi pusat pemikiran (think tank) yang progresif. “PIKI tidak boleh hanya menjadi organisasi diskusi, tetapi harus menjadi organisasi yang menghasilkan gagasan, kebijakan, inovasi, dan kepemimpinan yang berdampak,” tegasnya.",
      "Wakil Ketua Umum DPP PIKI Fary Djemy Francis menyampaikan enam pilar arah gerak organisasi: Strategic National Think Tank, Christian Leadership Academy, ekosistem talenta dan inovasi, kewirausahaan dan investasi, digitalisasi organisasi, serta kontribusi nyata bagi Indonesia Emas 2045.",
      "Mendagri Tito Karnavian yang hadir memberikan arahan menekankan pentingnya moderasi, toleransi, peningkatan kualitas SDM unggul, serta pengembangan kepemimpinan muda yang berkarakter.",
    ],
    category: "Organisasi",
    date: "2 Juni 2026",
    dateISO: "2026-06-02",
    author: "Redaksi Portal Berita PIKI",
    source: "Media Indonesia",
    sourceUrl:
      "https://mediaindonesia.com/humaniora/896054/piki-fokus-jadi-pusat-pemikiran-indonesia-emas-2045",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    readMinutes: 5,
  },
  {
    slug: "mendagri-tito-ajak-piki-ambil-peran-strategis",
    title:
      "Mendagri Tito Ajak PIKI Ambil Peran Strategis Wujudkan Indonesia Emas 2045",
    excerpt:
      "Di Gereja Paulus Jakarta, Mendagri Muhammad Tito Karnavian mendorong kalangan intelektual PIKI melahirkan gagasan dan inovasi untuk kemajuan bangsa.",
    body: [
      "Menteri Dalam Negeri Muhammad Tito Karnavian mengajak Persatuan Inteligensia Kristen Indonesia mengambil peran strategis dalam mendukung terwujudnya Indonesia Emas 2045.",
      "Menurut Tito, Indonesia memiliki peluang besar menjadi negara maju berkat kekayaan sumber daya alam, jumlah penduduk, dan letak geografis strategis. Namun potensi itu tidak akan maksimal tanpa dukungan SDM berkualitas.",
      "Ia menekankan kontribusi kelompok intelektual tidak ditentukan oleh jumlah, melainkan kualitas gagasan dan pengaruh yang dihasilkan. “Inilah tugas para pemikir, tugas para cendekiawan, tugas para inteligensia,” ujarnya.",
      "Arahan tersebut disampaikan saat menghadiri Serah Terima Kepengurusan dan Pelantikan DPP PIKI Masa Bakti 2026–2031 di GPIB Paulus, Menteng, Jakarta Pusat.",
    ],
    category: "Nasional",
    date: "31 Mei 2026",
    dateISO: "2026-05-31",
    author: "Redaksi Portal Berita PIKI",
    source: "Wartakota / Lingkar News",
    sourceUrl:
      "https://wartakota.tribunnews.com/nasional/891332/mendagri-tito-ajak-piki-ambil-peran-strategis-wujudkan-indonesia-emas-2045",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    readMinutes: 3,
  },
  {
    slug: "pra-kongres-vii-piki-2026-konsolidasi-nasional",
    title:
      "Pra Kongres VII PIKI 2026: Konsolidasi Nasional dan Penguatan Arah Strategis",
    excerpt:
      "DPP PIKI menggelar Pra Kongres VII secara hybrid di Jakarta sebagai langkah konsolidasi menjelang Kongres 30 April–2 Mei 2026.",
    body: [
      "Dewan Pimpinan Pusat Persatuan Inteligensia Kristen Indonesia menggelar Pra Kongres VII PIKI Tahun 2026 sebagai langkah konsolidasi nasional dalam merumuskan arah strategis organisasi di tengah perubahan lanskap global dan nasional.",
      "Forum diikuti jajaran DPD dan DPC dari seluruh Indonesia, dengan fokus pada pembaruan Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) sebagai instrumen penguatan tata kelola berbasis nilai dan intelektualitas.",
      "Ketua Umum saat itu, Badikenita Sitepu, mengajak seluruh kader menjadikan momentum kongres sebagai titik balik konsolidasi gagasan dan penguatan peran organisasi. Sekretaris Jenderal Audy Wuisang menekankan revisi AD/ART sebagai agenda mendesak sejak Kongres Luar Biasa 2017.",
      "Ketua Panitia Kongres VII Benyamin Patondok memastikan rangkaian menuju Kongres VII PIKI 30 April–2 Mei 2026 di Jakarta tersiapkan sesuai ketentuan pengamanan nasional.",
    ],
    category: "Agenda",
    date: "28 Maret 2026",
    dateISO: "2026-03-28",
    author: "Redaksi Portal Berita PIKI",
    source: "ANTARA News",
    sourceUrl:
      "https://www.antaranews.com/berita/5509145/dpp-piki-rumuskan-penguatan-organisasi-di-tengah-tantangan-global",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1600&q=80",
    readMinutes: 4,
  },
  {
    slug: "piki-catat-capaian-strategis-jelang-kongres-vii",
    title: "PIKI Catat Capaian Strategis Jelang Kongres VII",
    excerpt:
      "Dalam konferensi pers di Hotel Gran Melia Jakarta, DPP PIKI memaparkan pertumbuhan DPD, pembenahan AD/ART, dan kolaborasi lintas agama menjelang Kongres VII.",
    body: [
      "Persatuan Inteligensia Kristen Indonesia memaparkan sejumlah capaian penting dalam lima tahun terakhir menjelang Kongres VII. Paparan disampaikan dalam konferensi pers di Hotel Gran Melia Jakarta, Selasa (28/4/2026).",
      "Ketua Umum DPP PIKI Badikenita Putri Sitepu menegaskan organisasi terus memperkuat kolaborasi lintas agama sebagai bagian dari kontribusi kebangsaan, sekaligus melakukan restrukturisasi dan revisi AD/ART.",
      "Sekjen Audy Wuisang memaparkan perkembangan struktur: jumlah DPD definitif mencapai 29 wilayah, meningkat dari sebelumnya, dengan 87 DPC aktif sepanjang periode 2020–2026.",
      "Ketua Panitia Kongres VII Benyamin Patondok memastikan persiapan mencapai hampir 99 persen. Rangkaian diawali Study Meeting seminar kajian strategis di Lumire Hotel, dilanjutkan agenda utama di Hotel Gran Melia Jakarta.",
    ],
    category: "Organisasi",
    date: "28 April 2026",
    dateISO: "2026-04-28",
    author: "Redaksi Portal Berita PIKI",
    source: "Radio Pelita Kasih",
    sourceUrl:
      "https://www.radiopelitakasih.com/2026/04/28/piki-catat-capaian-strategis-jelang-kongres-vii/",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80",
    readMinutes: 4,
  },
  {
    slug: "piki-memulai-langkah-baru-peran-intelektual-kristen",
    title:
      "PIKI Memulai Langkah Baru, Serukan Peran Intelektual Kristen untuk Bangsa",
    excerpt:
      "Dengan tema “Melangkah dengan Harapan yang Kokoh”, pelantikan DPP PIKI 2026–2031 menegaskan intelektualitas yang berbuah pelayanan bagi kehidupan berbangsa.",
    body: [
      "Persatuan Intelegensia Kristen Indonesia menggelar serah terima kepengurusan dan pelantikan DPP PIKI Masa Bakti 2026–2031 di GPIB Paulus, Menteng, dengan tema “Melangkah dengan Harapan yang Kokoh” diambil dari Amsal 28:18.",
      "Ibadah dibuka Persekutuan Gereja-gereja di Indonesia. Dalam kotbahnya, Ketua Umum PGI Pdt. Jacklevyn Frits Manuputty mengingatkan warisan sejarah PIKI yang ikut memberi warna perjalanan Indonesia sejak masa awal kemerdekaan.",
      "Mengusung subtema “Mewujudkan Masa Depan Indonesia yang Sejahtera dan Berkeadilan”, kepengurusan baru diharapkan memperkuat kontribusi pemikiran strategis bagi pembangunan nasional.",
      "Dengan semangat Ad Caritas Et Veritas (demi kasih dan kebenaran), PIKI menegaskan intelektualitas yang tidak berhenti pada wacana, melainkan berbuah dalam pelayanan kepada masyarakat.",
    ],
    category: "Opini",
    date: "31 Mei 2026",
    dateISO: "2026-05-31",
    author: "Redaksi Portal Berita PIKI",
    source: "Radio Pelita Kasih",
    sourceUrl:
      "https://www.radiopelitakasih.com/2026/05/31/piki-memulai-langkah-baru-serukan-peran-intelektual-kristen-untuk-bangsa/",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=80",
    readMinutes: 3,
  },
  {
    slug: "maruarar-sirait-superteam-lintas-profesi-piki",
    title:
      "Sah! Maruarar Sirait dan “Superteam” Lintas Profesi Nakhodai DPP PIKI",
    excerpt:
      "Prosesi serah terima memori jabatan dan penandatanganan berita acara digelar dengan khidmat; Maruarar menekankan kepercayaan pada kerja tim, bukan “Superman”.",
    body: [
      "Tongkat estafet kepemimpinan PIKI resmi berganti. Perhelatan Serah Terima Jabatan sekaligus Pelantikan DPP PIKI Masa Bakti 2026–2031 sukses digelar Sabtu (30/5/2026).",
      "Acara inti dimulai dengan pembacaan SK Susunan Pengurus DPP PIKI 2026–2031 oleh Sekjen Benyamin Patondok. Nama-nama yang dipanggil mencerminkan “Superteam” lintas profesi yang dijanjikan Maruarar Sirait.",
      "Dalam pidato perdana, Maruarar menegaskan: “Saya tidak percaya Superman, saya percaya Superteam. Saya bujuk orang-orang hebat ini untuk membantu saya… mereka harus bekerja keras membangun PIKI ke depan.”",
      "Penandatanganan Berita Acara Serah Terima dilakukan oleh Dr. Badikenita Sitepu dan Maruarar Sirait, disaksikan tokoh senior Baktinendra Prawiro dan Ketua Umum PGI.",
    ],
    category: "Organisasi",
    date: "31 Mei 2026",
    dateISO: "2026-05-31",
    author: "Redaksi Portal Berita PIKI",
    source: "Indonesia Voice",
    sourceUrl:
      "https://indonesiavoice.com/sah-pelantikan-maruarar-sirait-dpp-piki-2026-2031/",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=80",
    readMinutes: 3,
  },
  {
    slug: "benyamin-patondok-sekjen-juniver-girsang-bendum-piki",
    title:
      "Benyamin Patondok Jadi Sekjen, Juniver Girsang Bendahara Umum DPP PIKI",
    excerpt:
      "Trio kepemimpinan Maruarar–Benyamin–Juniver memimpin PIKI lima tahun ke depan dengan komitmen pembangunan berkelanjutan dan politik garam.",
    body: [
      "Dalam struktur DPP PIKI 2026–2031, Maruarar Sirait sebagai Ketua Umum didampingi Benyamin Patondok sebagai Sekretaris Jenderal dan Juniver Girsang sebagai Bendahara Umum.",
      "Kepemimpinan baru menyampaikan PIKI akan mendukung pembangunan dan kemajuan ekonomi nasional, dengan penekanan pada kelestarian lingkungan serta perlindungan hak masyarakat agar manfaat pembangunan dirasakan adil.",
      "Maruarar menekankan pentingnya bersikap terbuka terhadap masukan dan kritik sebagai bahan perbaikan. Ia menilai kaum intelektual perlu hadir sebagai mitra yang memberi gagasan bagi pengambilan keputusan publik.",
      "Ia mengajak menerapkan “politik garam”—peran yang tidak selalu tampak tetapi memberi dampak nyata, sebagaimana garam yang larut dalam air namun menghadirkan rasa.",
    ],
    category: "Daerah",
    date: "30 Mei 2026",
    dateISO: "2026-05-30",
    author: "Redaksi Portal Berita PIKI",
    source: "Garuda 24 Jam / JPNN",
    sourceUrl:
      "https://m.jpnn.com/news/jadi-ketum-piki-maruarar-sirait-yakini-menag-nasaruddin-adil-soal-hak-pendidikan-agama",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    readMinutes: 3,
  },
];

export function getBeritaBySlug(slug: string) {
  return beritaList.find((item) => item.slug === slug);
}

export function getFeaturedBerita() {
  return beritaList.filter((item) => item.featured);
}

export function getLatestBerita(limit = 6) {
  return [...beritaList]
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
    .slice(0, limit);
}

export function getRelatedBerita(slug: string, limit = 3) {
  const current = getBeritaBySlug(slug);
  if (!current) return getLatestBerita(limit);
  return beritaList
    .filter(
      (item) =>
        item.slug !== slug &&
        (item.category === current.category || item.featured),
    )
    .slice(0, limit);
}
