import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Clock3,
  ExternalLink,
  Share2,
} from "lucide-react";
import { SiteAnimations } from "@/components/site-animations";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavigation } from "@/components/site-navigation";
import {
  beritaList,
  getBeritaBySlug,
  getRelatedBerita,
} from "@/lib/berita";

type BeritaDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return beritaList.map((item) => ({ slug: item.slug }));
}

export default async function BeritaDetailPage({
  params,
}: BeritaDetailPageProps) {
  const { slug } = await params;
  const article = getBeritaBySlug(slug);
  if (!article) notFound();

  const related = getRelatedBerita(slug);

  return (
    <SiteAnimations className="min-h-screen bg-background">
      <SiteNavigation active="berita" />

      <main className="pt-24">
        <article>
          <header className="border-b border-border bg-surface">
            <div className="mx-auto w-full max-w-350 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
              <Link
                href="/berita"
                className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Portal Berita
              </Link>

              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  {article.category}
                </span>
                <span className="text-sm text-muted">{article.date}</span>
                <span className="inline-flex items-center gap-1 text-sm text-muted">
                  <Clock3 className="h-3.5 w-3.5" />
                  {article.readMinutes} menit baca
                </span>
              </div>

              <h1 className="max-w-4xl text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-[2.75rem]">
                {article.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                {article.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-6 text-sm text-muted">
                <span>
                  Oleh{" "}
                  <strong className="text-primary">{article.author}</strong>
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
                <span>
                  Sumber:{" "}
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-primary hover:text-secondary"
                  >
                    {article.source}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </span>
                <button
                  type="button"
                  className="ml-auto inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  Bagikan
                </button>
              </div>
            </div>
          </header>

          <div className="mx-auto grid w-full max-w-350 gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-14">
            <div className="lg:col-span-8">
              <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              <div className="space-y-5 text-base leading-8 text-foreground/90">
                {article.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-border bg-surface-muted p-5 text-sm leading-7 text-muted">
                <p>
                  Artikel ini merupakan data dummy portal berita PIKI yang
                  disusun ulang dari liputan terbuka. Untuk versi asli, kunjungi{" "}
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:text-secondary"
                  >
                    sumber berita
                  </a>
                  .
                </p>
              </div>
            </div>

            <aside className="space-y-6 lg:col-span-4">
              <div className="rounded-2xl border border-border bg-surface p-5 shadow-[0px_4px_12px_rgba(11,47,100,0.05)]">
                <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Berita Terkait
                </h2>
                <ul className="space-y-4">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/berita/${item.slug}`}
                        className="group flex gap-3"
                      >
                        <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-secondary">
                            {item.category}
                          </p>
                          <p className="mt-1 text-sm font-semibold leading-snug text-primary transition-colors group-hover:text-secondary line-clamp-3">
                            {item.title}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-primary p-6 text-white">
                <h3 className="text-lg font-bold">Portal Jurnal PIKI</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  Cari publikasi ilmiah dan naskah terakreditasi di portal
                  jurnal terpisah.
                </p>
                <Link
                  href="/journals"
                  className="mt-5 inline-flex rounded-xl bg-secondary px-4 py-2.5 text-sm font-bold text-white transition-all hover:brightness-110"
                >
                  Buka Portal Jurnal
                </Link>
              </div>
            </aside>
          </div>
        </article>
      </main>

      <SiteFooter />
    </SiteAnimations>
  );
}
