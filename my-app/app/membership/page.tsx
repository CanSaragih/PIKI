import {
  LogIn,
  UploadCloud,
  Send,
  LockKeyhole,
  UserRound,
  ShieldCheck,
  FileUp,
} from "lucide-react";
import { SiteAnimations } from "@/components/site-animations";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavigation } from "@/components/site-navigation";

export default function MembershipPage() {
  return (
    <SiteAnimations className="min-h-screen bg-background">
      <SiteNavigation active="membership" />

      <main className="flex-grow pt-24 pb-16 lg:pb-20">
        <div className="mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-12">
            <h1 className="text-3xl font-bold text-primary sm:text-4xl lg:text-[3.25rem]">
              Gerbang Intelektual PIKI
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[1.05rem] leading-8 text-muted">
              Selamat datang di ekosistem digital Persatuan Inteligensia Kristen
              Indonesia. Masuk ke dashboard atau ajukan keanggotaan baru Anda.
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <section
              data-reveal
              className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8 shadow-[0px_4px_12px_rgba(11,47,100,0.05)] sm:p-10 lg:p-12"
            >
              <div className="mb-8">
                <span className="inline-flex rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Akses Terdaftar
                </span>
                <h2 className="mt-4 text-3xl font-bold text-primary sm:text-[2rem]">
                  Login Anggota
                </h2>
                <p className="mt-2 max-w-xl text-[0.98rem] leading-7 text-muted">
                  Gunakan kredensial resmi Anda untuk mengakses sumber daya
                  internal.
                </p>
              </div>

              <form className="flex flex-1 flex-col gap-5">
                <div className="space-y-2">
                  <label
                    className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-foreground"
                    htmlFor="username"
                  >
                    <UserRound className="h-4 w-4 text-primary" />
                    Username atau Email
                  </label>
                  <input
                    id="username"
                    className="w-full rounded-xl border border-border px-4 py-3.5 text-[0.98rem] outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/10"
                    placeholder="nama@email.com"
                    type="text"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <label
                      className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-foreground"
                      htmlFor="password"
                    >
                      <LockKeyhole className="h-4 w-4 text-primary" />
                      Password
                    </label>
                    <a
                      className="text-sm font-semibold text-primary transition-colors hover:underline"
                      href="#"
                    >
                      Lupa Password?
                    </a>
                  </div>
                  <input
                    id="password"
                    className="w-full rounded-xl border border-border px-4 py-3.5 text-[0.98rem] outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/10"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>

                <label
                  className="flex items-center gap-2 text-[0.95rem] text-muted"
                  htmlFor="remember"
                >
                  <input
                    id="remember"
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                    type="checkbox"
                  />
                  Tetap masuk di perangkat ini
                </label>

                <button
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary py-4 text-[0.98rem] font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-container"
                  type="submit"
                >
                  Masuk Ekosistem
                  <LogIn className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-10 border-t border-border pt-8 text-center">
                <p className="text-sm leading-6 text-muted">
                  Belum memiliki akun e-Secretariat? Silakan ajukan pendaftaran
                  KTA di panel sebelah kanan.
                </p>
              </div>
            </section>

            <section
              data-reveal
              className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8 shadow-[0px_4px_12px_rgba(11,47,100,0.05)] sm:p-10 lg:p-12"
            >
              <div className="mb-8">
                <span className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                  Aspirasi Anggota
                </span>
                <h2 className="mt-4 text-3xl font-bold text-primary sm:text-[2rem]">
                  Pendaftaran KTA
                </h2>
                <p className="mt-2 max-w-xl text-[0.98rem] leading-7 text-muted">
                  Bergabunglah dengan persatuan intelektual untuk berkontribusi
                  bagi bangsa.
                </p>
              </div>

              <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2 md:col-span-2">
                  <label
                    className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-foreground"
                    htmlFor="fullname"
                  >
                    <UserRound className="h-4 w-4 text-secondary" />
                    Nama Lengkap (Sesuai KTP)
                  </label>
                  <input
                    id="fullname"
                    className="w-full rounded-xl border border-border px-4 py-3.5 text-[0.98rem] outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary/10"
                    placeholder="Nama Tanpa Gelar"
                    type="text"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-[0.95rem] font-semibold text-foreground"
                    htmlFor="degree"
                  >
                    Gelar Akademik
                  </label>
                  <input
                    id="degree"
                    className="w-full rounded-xl border border-border px-4 py-3.5 text-[0.98rem] outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary/10"
                    placeholder="Contoh: Ph.D, M.Sc, S.T."
                    type="text"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-[0.95rem] font-semibold text-foreground"
                    htmlFor="expertise"
                  >
                    Profesi / Keahlian
                  </label>
                  <input
                    id="expertise"
                    className="w-full rounded-xl border border-border px-4 py-3.5 text-[0.98rem] outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary/10"
                    placeholder="Contoh: Akademisi, Birokrat"
                    type="text"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-[0.95rem] font-semibold text-foreground"
                    htmlFor="province"
                  >
                    DPD (Provinsi)
                  </label>
                  <select
                    id="province"
                    className="w-full rounded-xl border border-border bg-white px-4 py-3.5 text-[0.98rem] outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary/10"
                  >
                    <option>Pilih Provinsi</option>
                    <option>DKI Jakarta</option>
                    <option>Jawa Barat</option>
                    <option>Sumatera Utara</option>
                    <option>Sulawesi Utara</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    className="text-[0.95rem] font-semibold text-foreground"
                    htmlFor="city"
                  >
                    DPC (Kabupaten/Kota)
                  </label>
                  <input
                    id="city"
                    className="w-full rounded-xl border border-border px-4 py-3.5 text-[0.98rem] outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary/10"
                    placeholder="Masukkan Kota/Kab"
                    type="text"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-foreground">
                    <FileUp className="h-4 w-4 text-secondary" />
                    Dokumen Pendukung (KTP &amp; Ijazah Terakhir)
                  </label>
                  <div className="rounded-2xl border-2 border-dashed border-border bg-surface-muted p-8 text-center transition-colors hover:border-secondary">
                    <UploadCloud className="mx-auto mb-3 h-10 w-10 text-muted" />
                    <p className="text-[0.98rem] text-muted">
                      Seret dan lepas file di sini, atau{" "}
                      <span className="font-semibold text-secondary">
                        telusuri
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      Mendukung PDF, JPG, PNG (Maks. 5MB per file)
                    </p>
                  </div>
                </div>

                <div className="md:col-span-2 mt-1">
                  <button
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary py-4 text-[0.98rem] font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110"
                    type="submit"
                  >
                    Kirim Pengajuan KTA
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </section>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted lg:hidden">
            <ShieldCheck className="h-4 w-4 text-success" />
            Data pengajuan akan diverifikasi oleh sekretariat pusat.
          </div>
        </div>
      </main>

      <SiteFooter />
    </SiteAnimations>
  );
}
