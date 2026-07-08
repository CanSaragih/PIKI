import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Flame,
  Newspaper,
  Search,
  TrendingUp,
} from "lucide-react";
import { SiteAnimations } from "@/components/site-animations";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavigation } from "@/components/site-navigation";
import {
  beritaCategories,
  beritaList,
  getFeaturedBerita,
  getLatestBerita,
} from "@/lib/berita";

export default function BeritaPage() {
  const featured = getFeaturedBerita();
  const hero = featured[0] ?? beritaList[0];
  const sideFeatured = featured.slice(1, 3);
  const latest = getLatestBerita(8).filter((item) => item.slug !== hero.slug);
  const trending = [...beritaList]
    .sort((a, b) => a.title.length - b.title.length)
    .slice(0, 5);

  return (
    <SiteAnimations className="min-h-screen bg-background">
      <SiteNavigation active="berita" />

      <main className="pt-24">
        {/* Masthead */}
        <section className="border-b border-border bg-primary text-white">
          <div className="mx-auto flex w-full max-w-350 flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Newspaper className="h-5 w-5 text-secondary-soft" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary-soft">
                  Portal Berita
                </p>
                <h1 className="text-xl font-bold sm:text-2xl">Warta PIKI</h1>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/70">
              Liputan organisasi, agenda nasional, dan gagasan intelektual
              Persatuan Inteligensia Kristen Indonesia.
            </p>
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              <input
                className="w-full rounded-full border border-white/15 bg-white/10 py-2.5 pl-10 pr-4 text-sm outline-none placeholder:text-white/45 focus:border-secondary-soft/50"
                placeholder="Cari berita..."
                type="search"
                aria-label="Cari berita"
              />
            </div>
          </div>
        </section>

        {/* Category strip */}
        <div className="sticky top-[4.25rem] z-40 border-b border-border bg-surface/95 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-350 gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
            <span className="shrink-0 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white">
              Semua
            </span>
            {beritaCategories.map((cat) => (
              <span
                key={cat}
                className="shrink-0 rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-primary/30 hover:text-primary"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Breaking */}
        {hero.breaking && (
          <div className="border-b border-border bg-[#D4AF37]/10">
            <div className="mx-auto flex w-full max-w-350 items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#D4AF37] px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                <Flame className="h-3 w-3" />
                Breaking
              </span>
              <Link
                href={`/berita/${hero.slug}`}
                className="truncate text-sm font-semibold text-primary hover:text-secondary"
              >
                {hero.title}
              </Link>
            </div>
          </div>
        )}

        {/* Hero + side */}
        <section className="mx-auto w-full max-w-350 px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid gap-6 lg:grid-cols-12">
            <Link
              href={`/berita/${hero.slug}`}
              data-reveal
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[0px_4px_12px_rgba(11,47,100,0.05)] lg:col-span-8"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                <Image
                  src={hero.image}
                  alt={hero.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                      {hero.category}
                    </span>
                    <span className="text-xs text-white/80">{hero.date}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-white/70">
                      <Clock3 className="h-3.5 w-3.5" />
                      {hero.readMinutes} mnt baca
                    </span>
                  </div>
                  <h2 className="max-w-3xl text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
                    {hero.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75 line-clamp-2 sm:text-base">
                    {hero.excerpt}
                  </p>
                </div>
              </div>
            </Link>

            <div className="flex flex-col gap-4 lg:col-span-4">
              {sideFeatured.map((item) => (
                <Link
                  key={item.slug}
                  href={`/berita/${item.slug}`}
                  data-reveal
                  className="group flex flex-1 overflow-hidden rounded-2xl border border-border bg-surface shadow-[0px_4px_12px_rgba(11,47,100,0.05)]"
                >
                  <div className="relative w-32 shrink-0 sm:w-36">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="144px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-4">
                    <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold leading-snug text-primary transition-colors group-hover:text-secondary line-clamp-3">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted">{item.date}</p>
                  </div>
                </Link>
              ))}

              <div
                data-reveal
                className="rounded-2xl border border-border bg-surface-muted p-5"
              >
                <div className="mb-4 flex items-center gap-2 text-sm font-bold text-primary">
                  <TrendingUp className="h-4 w-4 text-secondary" />
                  Trending
                </div>
                <ol className="space-y-3">
                  {trending.map((item, index) => (
                    <li key={item.slug}>
                      <Link
                        href={`/berita/${item.slug}`}
                        className="group flex gap-3"
                      >
                        <span className="font-serif text-lg font-black text-secondary/40 group-hover:text-secondary">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-semibold leading-snug text-primary transition-colors group-hover:text-secondary line-clamp-2">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Latest grid */}
        <section className="border-t border-border bg-surface-muted py-12 sm:py-16">
          <div className="mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                  Berita Terbaru
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Ringkasan liputan PIKI dari sumber terbuka nasional.
                </p>
              </div>
              <span className="hidden text-xs font-semibold uppercase tracking-[0.25em] text-muted sm:block">
                {beritaList.length} artikel
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {latest.map((item) => (
                <article
                  key={item.slug}
                  data-reveal
                  className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-[0px_4px_12px_rgba(11,47,100,0.05)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Link href={`/berita/${item.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="rounded-full bg-primary/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                          {item.category}
                        </span>
                        <span className="text-xs text-muted">{item.date}</span>
                      </div>
                      <h3 className="mb-2 text-lg font-bold leading-snug text-primary transition-colors group-hover:text-secondary line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="mb-4 line-clamp-2 text-sm leading-6 text-muted">
                        {item.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                        Baca selengkapnya
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter band */}
        <section className="bg-primary py-14 text-white">
          <div className="mx-auto flex w-full max-w-350 flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
            <div>
              <h2 className="text-2xl font-bold">Langganan Warta PIKI</h2>
              <p className="mt-2 max-w-lg text-sm leading-7 text-white/70">
                Terima ringkasan berita organisasi dan agenda intelektual langsung
                ke kotak masuk Anda.
              </p>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <input
                className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/45"
                placeholder="Email Anda"
                type="email"
              />
              <button className="rounded-xl bg-secondary px-5 py-3 text-sm font-bold text-white transition-all hover:brightness-110">
                Langganan
              </button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </SiteAnimations>
  );
}
