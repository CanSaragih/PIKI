import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-primary text-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          <div className="sm:col-span-2 xl:col-span-1">
            <div className="font-serif text-3xl font-black tracking-tight">
              PIKI
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
              Persatuan Inteligensia Kristen Indonesia berdedikasi untuk
              memajukan pemikiran kristen dalam bingkai Negara Kesatuan Republik
              Indonesia.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-secondary-soft">
              Organisasi
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link
                  className="transition-colors hover:text-secondary-soft"
                  href="/"
                >
                  Visi &amp; Misi
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-secondary-soft"
                  href="/"
                >
                  Struktur Organisasi
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-secondary-soft"
                  href="/"
                >
                  Anggaran Dasar/ART
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-secondary-soft"
                  href="/dashboard"
                >
                  Cabang &amp; Daerah
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-secondary-soft">
              Layanan
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link
                  className="transition-colors hover:text-secondary-soft"
                  href="/berita"
                >
                  Portal Berita
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-secondary-soft"
                  href="/journals"
                >
                  Portal Jurnal
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-secondary-soft"
                  href="/membership"
                >
                  Verifikasi KTA
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-secondary-soft"
                  href="/sekretariat"
                >
                  E-Sekretariat
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-secondary-soft">
              Kontak
            </h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-secondary-soft" />
                <span>Jl. Raya Menteng No. 12, Jakarta Pusat, DKI Jakarta</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-secondary-soft" />
                <span>sekretariat@piki.or.id</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-secondary-soft" />
                <span>+62 (21) 555-0123</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © 2024 Persatuan Inteligensia Kristen Indonesia. All Rights
            Reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              className="transition-colors hover:text-secondary-soft"
              href="/"
            >
              Academic Integrity
            </Link>
            <Link
              className="transition-colors hover:text-secondary-soft"
              href="/"
            >
              Privacy Policy
            </Link>
            <Link
              className="transition-colors hover:text-secondary-soft"
              href="/membership"
            >
              Secretariat Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
