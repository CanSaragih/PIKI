import Image from "next/image";
import {
  ArrowRight,
  BookOpenText,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Filter,
  Search,
  Sparkles,
} from "lucide-react";
import { SiteAnimations } from "@/components/site-animations";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavigation } from "@/components/site-navigation";

const journals = [
  {
    label: "SINTA Q1",
    date: "Feb 2024",
    title: "Analisis Etika Digital dalam Masyarakat Pluralistik Modern",
    author: "Prof. Dr. Andreas Santosa",
    body: "Penelitian ini mengeksplorasi perpotongan antara nilai-nilai teologis tradisional dengan tantangan etika digital kontemporer di Indonesia...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCG5H7rLLDdgNxykUJRHuXQRvBRkZWbcso1hXTv0G2VpRnBDneQxL4Qqb3mlbHTGrM36mTSCWF4NPspQvtP_mCUn3ZPHX3ja218yhASK--FpqmCT0at6OYOqizya_HNbQnNpeZKAhpWKfB4701xPLEfDcXJ_V0Cd9xbfDS7p5Lq1ZK0TWokArv_2M_SxstrGl93fkEjxza4buU893-4gCW7kOnz6AR0WI67yuvnWaeCrrgXcaz9qUF6KQ",
  },
  {
    label: "SINTA Q2",
    date: "Jan 2024",
    title: "Transformasi Pendidikan di Era Disrupsi Teknologi",
    author: "Prof. Maria Magdalena, M.Ed.",
    body: "Mengkaji model pedagogi baru yang mengintegrasikan kecerdasan buatan tanpa mengabaikan aspek pembentukan karakter moral mahasiswa...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAj5SMHf1C3ulLONxucMiQ9ft4oq0Zc8HMdDu3XGZ1jqv7qc_uCWQmiwnxL-PNLoTMnDPbLaO7PzyJpO--jU6U-1ZgUZdh1L7xiY8EaTid48JBCCGWfHe9vW9sdmfO_QPGaH2Ojf2VhZ_RjY61ebWRlxipQzqzeaTBvTv_kNEiJqF7EViFhfRbRl2V2jpv5dLOqQmXY9uwJ0RnjUzbsbbT9SWJiZrITRcXz0qo08U3AOljxHU26a-rcng",
  },
  {
    label: "SINTA Q1",
    date: "Des 2023",
    title: "Ekonomi Kreatif dan Keadilan Sosial: Perspektif Intelektual",
    author: "Prof. Dr. Ir. Yohanes G.",
    body: "Studi komprehensif mengenai peran ekonomi kreatif dalam mengurangi kesenjangan ekonomi di wilayah rural Indonesia...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_bJsXTBe96kK7Pnv6U6OOUVwirgVmfptSL7WLC4kJVtaeSisFyvyVtEXqGJY86hguHtTOMpTtnjoYHDDBcQzieE3-CTdDIRwsViB-eJVchaNvgAqARkXg86yLXuVV4KflUt2vRyLYd2EjnhgNyLgcc3MmAGQ5yKnQ9Ys0-Uzm4e1eGKuZy4WIK49NW4sNp29Ro7C5C2c-UKthzD_MzKKG8IQK5rQM6siwSBa9X6SDAjXGZ_xJZSSBVQ",
  },
];

export default function JournalsPage() {
  return (
    <SiteAnimations className="min-h-screen bg-background">
      <SiteNavigation active="journals" />

      <main className="pt-24">
        <section className="hero-mesh border-b border-border">
          <div className="mx-auto w-full max-w-350 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-12 max-w-3xl">
              <h1 className="text-4xl font-bold text-primary sm:text-5xl">
                Portal Jurnal Ilmiah
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
                Akses ke khazanah pemikiran kristiani dan penelitian ilmiah
                berkualitas tinggi dari para akademisi dan intelektual PIKI.
              </p>
            </div>

            <div
              data-reveal
              className="mb-12 rounded-2xl border border-border bg-surface p-6 shadow-[0px_4px_12px_rgba(11,47,100,0.05)]"
            >
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    className="w-full rounded-lg border border-border bg-white py-3 pl-12 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/10"
                    placeholder="Cari judul, penulis, atau kata kunci..."
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <select className="w-full min-w-[160px] rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none sm:w-auto">
                    <option>Semua Kategori</option>
                    <option>Teologi &amp; Sosial</option>
                    <option>Pendidikan</option>
                    <option>Ekonomi Politik</option>
                  </select>
                  <div className="flex rounded-lg bg-surface-muted p-1">
                    {["All", "Q1", "Q2", "Q3"].map((tier, index) => (
                      <button
                        key={tier}
                        className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${index === 0 ? "bg-white text-primary shadow-sm" : "text-muted hover:bg-surface"}`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg sm:w-auto">
                    <Filter className="h-4 w-4" />
                    Filter
                  </button>
                </div>
              </div>
            </div>

            <div
              data-reveal
              className="mb-16 overflow-hidden rounded-2xl bg-[#D4AF37] p-8 shadow-xl"
            >
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="max-w-2xl">
                  <h2 className="inline-flex items-center gap-2 text-3xl font-bold text-white">
                    <Sparkles className="h-6 w-6" />
                    Punya karya ilmiah?
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-white/90">
                    Sampaikan pemikiran Anda ke komunitas akademik global. Kami
                    mengundang Anda untuk mengajukan naskah penelitian Anda.
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-bold text-[#735c00] transition-all hover:bg-surface-muted">
                  Ajukan naskah Anda
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {journals.map((journal) => (
                <article
                  key={journal.title}
                  data-reveal
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-primary/20 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={journal.image}
                      alt={journal.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1280px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <span
                        className={`rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-[0.22em] ${journal.label === "SINTA Q2" ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"}`}
                      >
                        {journal.label}
                      </span>
                      <span className="text-sm text-muted">{journal.date}</span>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold leading-tight text-primary transition-colors group-hover:text-secondary">
                      {journal.title}
                    </h3>
                    <div className="mb-4 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-surface-muted">
                        <BookOpenText className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">
                        {journal.author}
                      </span>
                    </div>
                    <p className="mb-6 flex-1 text-sm leading-7 text-muted">
                      {journal.body}
                    </p>
                    <div className="flex gap-3 border-t border-border pt-4">
                      <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-white transition-all hover:opacity-90">
                        <Download className="h-4 w-4" />
                        PDF
                      </button>
                      <button className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5">
                        Detail
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div
              data-reveal
              className="mt-16 flex items-center justify-center gap-4"
            >
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-primary hover:text-primary">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                <button className="h-10 w-10 rounded-full bg-primary text-sm font-bold text-white">
                  1
                </button>
                <button className="h-10 w-10 rounded-full border border-border text-sm text-muted transition-all hover:bg-surface-muted">
                  2
                </button>
                <button className="h-10 w-10 rounded-full border border-border text-sm text-muted transition-all hover:bg-surface-muted">
                  3
                </button>
                <span className="flex h-10 w-10 items-center justify-center text-muted">
                  ...
                </span>
                <button className="h-10 w-10 rounded-full border border-border text-sm text-muted transition-all hover:bg-surface-muted">
                  12
                </button>
              </div>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-primary hover:text-primary">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </SiteAnimations>
  );
}
