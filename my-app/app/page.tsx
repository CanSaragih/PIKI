import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  Building2,
  Compass,
  Download,
  ExternalLink,
  GraduationCap,
  Send,
  Share2,
  Users,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { SiteAnimations } from "@/components/site-animations";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavigation } from "@/components/site-navigation";
import { ParallaxHeroImagesDemo } from "@/components/ParallaxHeroImages";

type Stat = {
  value: string;
  label: string;
  tone: string;
  icon: LucideIcon;
};

const stats: Stat[] = [
  {
    value: "8,450",
    label: "Anggota Terverifikasi",
    tone: "+12% YoY",
    icon: Users,
  },
  { value: "412", label: "Cabang (DPC)", tone: "34 DPD", icon: Building2 },
  {
    value: "128",
    label: "Jurnal SINTA",
    tone: "Terakreditasi",
    icon: BookOpenText,
  },
  {
    value: "42%",
    label: "PhD/Master Degree",
    tone: "Kualitas Tinggi",
    icon: GraduationCap,
  },
];

const articles = [
  {
    category: "Kegiatan DPD",
    date: "12 Okt 2023",
    title:
      "Konsolidasi Intelektual di Wilayah Timur: Tantangan Pendidikan 2024",
    body: "Pertemuan rutin Dewan Pimpinan Daerah membahas pemerataan kualitas pendidikan tinggi dan peran cendekiawan lokal dalam transformasi digital pedesaan.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSJjWb2WmxhxoWm9Kq4Ct0DbxAYwdMuFqm4xincGwbp9o_rH5pIg_ROib7Mqz5hDZFAY23OzlCpeNkh3-FS7SJuELPDnDyQwENcYQO1lM4BRY-RUuNGCUNakKmuvgHd7Z1nm0YUD3HCJLZpEJQnhQ8b8WNtKY6XlzMU-EBrLeKWCBRyVG59COC920wINOUwiRAdNHJB_mvxcKijWvIK3s5IwpNhiH1m3G-nUALteXjVZAg6Uw9pUSX_w",
  },
  {
    category: "Publikasi",
    date: "08 Okt 2023",
    title: "Review Kebijakan: Keadilan Sosial dalam Perspektif Oikumene",
    body: "Jurnal PIKI edisi terbaru merilis kajian mendalam mengenai implementasi sila kelima dalam kerangka kebijakan publik kontemporer di Indonesia.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBX5yEWWU7S5K0VL4TFkvy3jWRFABSq9X9Go3L2VsqMD3FqkAC0eHDiWfePOs_eKi1-MZwgbi-7uT0HiW4_I7BnsYtUhTofuBGihw0pGoei0rwkPOtgMM2hxKKt--8mjsvV4o3tK83P749gWL0At6biOolBp0wfHV9d46EInkwQSkbIMykIVYqbrKfvSqDSE9J0oSIQg8Jglp7-evnOZIP-f1FxmsswSVO0VdM9SHmLYoEvHdgrOelDbQ",
  },
];

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "Instagram", icon: FaInstagram },
  { label: "YouTube", icon: FaYoutube },
  { label: "LinkedIn", icon: FaLinkedinIn },
];

export default function Home() {
  return (
    <SiteAnimations className="min-h-screen bg-background">
      <SiteNavigation active="home" />

      <main className="pt-24">
        <ParallaxHeroImagesDemo />

        <section
          data-reveal
          className="mx-auto w-full max-w-350 px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
        >
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-primary sm:text-[2.4rem]">
                Dashboard Organisasi
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                Metrik real-time pertumbuhan dan sebaran intelektual PIKI di
                seluruh Indonesia.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-success/20 bg-success/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-success">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              Live Data
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <article
                key={stat.label}
                data-reveal
                className="rounded-2xl border border-border bg-surface p-6 shadow-[0px_4px_12px_rgba(11,47,100,0.05)] transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-success">
                    {stat.tone}
                  </span>
                </div>
                <div className="mb-1 text-[2rem] font-bold text-primary">
                  {stat.value}
                </div>
                <p className="text-sm text-muted">{stat.label}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <article
              data-reveal
              className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0px_4px_12px_rgba(11,47,100,0.05)] lg:col-span-8"
            >
              <div className="flex items-center justify-between border-b border-border p-6">
                <h3 className="text-sm font-semibold text-primary">
                  Sebaran Wilayah Nasional
                </h3>
                <button className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-secondary">
                  Detail Provinsi
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="relative min-h-88 bg-surface-muted p-6">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA99GGshbthptvUlG_ORC7OJRI3pVF6hsj6erquWEMqxuG14OgFOB-LpAXEGkp8Dqj6cB1Shufzfj5Z8wqhZNGi9EAMJ51lXqoxbxJuavJcFibfKIZajVnDrZGP5fLs7T6rZE4QtXbFu84BR8LaAgvptHKwLKFoR0Yh59fVoeY-MbwlW3J69RcDsX0uMWSS2KCWsi2E9qlyLEcXFv4rbtCdYiY8bqm6dmOsqlDJGZazct04R0Ym35E_Eg"
                  alt="Peta sebaran anggota PIKI di Indonesia"
                  fill
                  className="rounded-xl object-cover opacity-80"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="glass-card absolute bottom-4 left-4 rounded-xl border border-primary/10 p-4 shadow-sm">
                  <p className="mb-1 text-xs font-bold text-primary">
                    Pertumbuhan Tertinggi
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <span className="h-2 w-2 rounded-full bg-success" />
                    Papua &amp; NTT (+24%)
                  </div>
                </div>
              </div>
            </article>

            <aside
              data-reveal
              className="rounded-2xl bg-primary p-8 text-white shadow-[0px_20px_40px_rgba(11,47,100,0.2)] lg:col-span-4"
            >
              <h3 className="text-2xl font-bold">Expertise Taxonomy</h3>
              <div className="mt-8 space-y-6">
                {[
                  ["Hukum & Politik", "35%"],
                  ["Teknologi & STEM", "22%"],
                  ["Teologi & Filsafat", "20%"],
                  ["Ekonomi & Bisnis", "18%"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-sm text-white/80">
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-secondary"
                        style={{ width: value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-10 w-full border-t border-white/10 pt-6 text-sm font-semibold text-secondary-soft transition-opacity hover:opacity-90">
                <span className="inline-flex items-center gap-2">
                  Lihat Direktori Pakar <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </aside>
          </div>
        </section>

        <section data-reveal className="bg-surface-muted py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-350 gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div className="lg:col-span-2">
              <div className="mb-10 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-primary">
                    Warta Intelektual
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Opini, publikasi ilmiah, dan laporan kegiatan organisasi.
                  </p>
                </div>
                <Link
                  href="/journals"
                  className="hidden items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3 md:flex"
                >
                  Arsip Berita <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {articles.map((article) => (
                  <article
                    key={article.title}
                    data-reveal
                    className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:shadow-xl"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-4 flex items-center gap-2">
                        <span
                          className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] ${article.category === "Publikasi" ? "bg-secondary/10 text-secondary" : "bg-primary/5 text-primary"}`}
                        >
                          {article.category}
                        </span>
                        <span className="text-xs text-muted">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="mb-3 text-xl font-bold leading-snug text-primary transition-colors group-hover:text-secondary">
                        {article.title}
                      </h3>
                      <p className="mb-6 line-clamp-3 text-sm leading-7 text-muted">
                        {article.body}
                      </p>
                      <Link
                        href="/journals"
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-secondary"
                      >
                        Baca Selengkapnya <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div
                data-reveal
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h4 className="mb-6 flex items-center gap-2 text-sm font-semibold text-primary">
                  <Share2 className="h-5 w-5 text-primary" />
                  Ikuti Kami
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <Link
                        key={social.label}
                        href="/"
                        className="flex items-center gap-3 rounded-xl bg-surface-muted p-3 transition-all hover:bg-primary hover:text-white"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-xs font-bold">
                          {social.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div
                data-reveal
                className="rounded-2xl bg-primary-container p-6 text-white"
              >
                <h4 className="mb-2 text-sm font-semibold">E-Newsletter</h4>
                <p className="mb-4 text-xs leading-6 text-white/80">
                  Dapatkan update kajian rutin langsung di email Anda.
                </p>
                <div className="flex gap-2">
                  <input
                    className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/50"
                    placeholder="Email Anda"
                    type="email"
                  />
                  <button
                    className="rounded-lg bg-secondary px-3 py-3 text-white transition-all hover:brightness-110"
                    aria-label="Kirim newsletter"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          data-reveal
          className="relative overflow-hidden bg-primary py-20 text-white"
        >
          <div
            data-orb
            className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/5 blur-3xl"
          />
          <div className="mx-auto flex w-full max-w-350 flex-col items-center px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold sm:text-[2.4rem]">
              Bergabung dalam Barisan Intelektual
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Jadilah bagian dari gerakan intelektual Kristen yang aktif
              berkontribusi bagi kemajuan bangsa. Dapatkan akses ke jaringan
              pakar dan publikasi ilmiah eksklusif.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/membership"
                className="rounded-xl bg-secondary px-10 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5"
              >
                Daftar Kartu Tanda Anggota (KTA)
              </Link>
              <Link
                href="/membership"
                className="rounded-xl border border-white/20 bg-white/10 px-10 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Panduan Registrasi
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </SiteAnimations>
  );
}
