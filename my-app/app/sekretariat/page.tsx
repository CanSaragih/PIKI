import Image from "next/image";
import {
  BadgeCheck,
  CheckCircle2,
  Clock3,
  FileDigit,
  Inbox,
  Printer,
  Send,
  ShieldCheck,
  Upload,
  ZoomIn,
} from "lucide-react";
import { SiteAnimations } from "@/components/site-animations";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavigation } from "@/components/site-navigation";

const stats = [
  { label: "Surat Masuk", value: "12", icon: Inbox, tone: "primary" },
  { label: "Surat Keluar", value: "34", icon: Send, tone: "secondary" },
  { label: "Menunggu TTD", value: "3", icon: Clock3, tone: "warning" },
  { label: "Selesai", value: "48", icon: CheckCircle2, tone: "success" },
];

const workflowLegend = [
  { label: "Inbox", tone: "bg-primary" },
  { label: "Review", tone: "bg-secondary" },
  { label: "Signing", tone: "bg-tertiary-container" },
  { label: "Archived", tone: "bg-success" },
];

export default function SekretariatPage() {
  return (
    <SiteAnimations className="min-h-screen bg-background">
      <SiteNavigation active="membership" />

      <main className="pt-24">
        <section className="hero-mesh border-b border-border">
          <div className="mx-auto w-full max-w-350 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
                <BadgeCheck className="h-4 w-4" />
                E-Sekretariat PIKI
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-[3.9rem]">
                Pengelolaan Surat dan Dokumen Organisasi dalam Satu Ruang Kerja
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Tampilan ini tetap mempertahankan konsep generator surat dan
                preview dokumen A4, tetapi dirapikan agar lebih clean, lebih
                selaras dengan tema halaman lain, dan lebih nyaman dibaca.
              </p>
            </div>

            <section data-reveal className="mb-12">
              <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((item) => {
                  const Icon = item.icon;
                  const isWarning = item.tone === "warning";
                  const isSuccess = item.tone === "success";

                  return (
                    <div
                      key={item.label}
                      className={`rounded-2xl border border-border bg-surface p-card-padding p-4 text-center shadow-[0px_4px_12px_rgba(11,47,100,0.05)] ${
                        isWarning ? "ring-2 ring-secondary/30" : ""
                      }`}
                    >
                      <Icon
                        className={`mx-auto mb-2 h-8 w-8 ${
                          isWarning
                            ? "text-secondary"
                            : isSuccess
                              ? "text-success"
                              : item.tone === "secondary"
                                ? "text-secondary"
                                : "text-primary"
                        }`}
                      />
                      <h4 className="text-sm font-semibold text-muted">
                        {item.label}
                      </h4>
                      <p
                        className={`text-[2.15rem] font-bold leading-none ${
                          isWarning
                            ? "text-secondary"
                            : isSuccess
                              ? "text-success"
                              : item.tone === "secondary"
                                ? "text-secondary"
                                : "text-primary"
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6 shadow-[0px_4px_12px_rgba(11,47,100,0.05)] sm:p-8">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <h3 className="font-[family-name:var(--font-merriweather)] text-2xl font-bold text-primary sm:text-[2.1rem]">
                    Administrative Workflow
                  </h3>
                  <span className="text-sm font-semibold text-muted">
                    78% Monthly Target Reached
                  </span>
                </div>

                <div className="flex h-3 w-full overflow-hidden rounded-full bg-surface-muted">
                  <div className="w-[15%] bg-primary" title="Surat Masuk" />
                  <div className="w-[10%] bg-secondary" title="Review" />
                  <div
                    className="w-[5%] bg-tertiary-container"
                    title="Pending TTD"
                  />
                  <div className="w-[70%] bg-success" title="Completed" />
                </div>

                <div className="mt-4 flex flex-wrap gap-4 text-[12px] font-semibold uppercase tracking-wider text-muted">
                  {workflowLegend.map((item) => (
                    <span
                      key={item.label}
                      className="flex items-center gap-1.5"
                    >
                      <span className={`h-2 w-2 rounded-full ${item.tone}`} />
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-[0px_4px_12px_rgba(11,47,100,0.05)] lg:sticky lg:top-28 lg:col-span-5 sm:p-8">
                <h2 className="mb-3 font-[family-name:var(--font-merriweather)] text-2xl font-bold text-primary sm:text-[2.1rem]">
                  Letter Generator
                </h2>
                <p className="mb-6 max-w-md text-sm leading-7 text-muted">
                  Buat, tinjau, dan kirim surat resmi dengan alur kerja yang
                  ringkas, tetap formal, dan mudah dipakai oleh sekretariat.
                </p>

                <form className="space-y-6" id="letterForm">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Jenis Surat
                    </label>
                    <select className="w-full rounded-xl border border-border bg-white p-3.5 text-base outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/10">
                      <option>Surat Keputusan (SK)</option>
                      <option>Surat Tugas</option>
                      <option>Surat Rekomendasi</option>
                      <option>Surat Undangan</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Perihal / Subject
                    </label>
                    <input
                      className="w-full rounded-xl border border-border p-3.5 text-base outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/10"
                      placeholder="Masukkan perihal surat..."
                      type="text"
                      value="Pengangkatan Panitia Konferensi Nasional PIKI 2024"
                      readOnly
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Penerima / Recipient
                    </label>
                    <input
                      className="w-full rounded-xl border border-border p-3.5 text-base outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/10"
                      placeholder="Nama Lengkap &amp; Jabatan..."
                      type="text"
                      value="Seluruh Anggota DPP PIKI"
                      readOnly
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Isi Surat / Content
                    </label>
                    <textarea
                      className="min-h-40 w-full resize-none rounded-xl border border-border p-3.5 text-base outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/10"
                      rows={6}
                      value="Berdasarkan hasil Rapat Pleno DPP PIKI pada tanggal 15 Oktober 2023, maka dengan ini diputuskan pembentukan Panitia Pelaksana untuk agenda Konferensi Nasional yang akan dilaksanakan di Jakarta. Segala biaya yang timbul akan dibebankan kepada anggaran organisasi."
                      readOnly
                    />
                  </div>

                  <div className="space-y-3 pt-4">
                    <button
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary py-4 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 active:scale-[0.98]"
                      type="button"
                    >
                      <FileDigit className="h-4 w-4" />
                      Generate &amp; Digital Sign
                    </button>
                    <button
                      className="w-full rounded-xl border border-primary py-4 text-sm font-semibold text-primary transition-all hover:bg-primary/5"
                      type="button"
                    >
                      Save as Draft
                    </button>
                  </div>
                </form>
              </div>

              <div className="flex flex-col items-center lg:col-span-7">
                <div
                  className="letter-preview-shadow relative w-full overflow-hidden rounded-2xl border border-border bg-white p-6 sm:p-10 lg:p-12"
                  style={{ aspectRatio: "1 / 1.414" }}
                >
                  <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center opacity-[0.03]">
                    <span className="rotate-[-45deg] font-[family-name:var(--font-merriweather)] text-[120px] font-black text-primary">
                      PIKI
                    </span>
                  </div>

                  <div className="relative z-10 mb-8 flex items-center gap-5 border-b-4 border-double border-primary pb-4 sm:gap-6">
                    <Image
                      src="/logo.png"
                      alt="PIKI Logo"
                      width={55}
                      height={30}
                      className="object-contain ml-4"
                    />
                    <div className="w-full text-center">
                      <h1 className="font-[family-name:var(--font-merriweather)] text-[20px] font-bold uppercase leading-tight tracking-widest text-primary sm:text-[21px]">
                        Persatuan Inteligensia Kristen Indonesia
                      </h1>
                      <p className="mt-1 text-[10px] leading-4 text-muted sm:text-[11px]">
                        Gedung Grha Oikoumene, Lt. 3, Jl. Salemba Raya No. 10,
                        Jakarta Pusat
                        <br />
                        Email: sekretariat@piki.or.id | Web: www.piki.or.id
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 space-y-5 text-justify text-[14px] leading-relaxed text-foreground sm:space-y-6 sm:text-[15px]">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p>Nomor: 042/SK/DPP-PIKI/XI/2023</p>
                        <p>Lamp: -</p>
                        <p>
                          Hal:{" "}
                          <strong>
                            Pengangkatan Panitia Konferensi Nasional
                          </strong>
                        </p>
                      </div>
                      <p>Jakarta, 12 November 2023</p>
                    </div>

                    <div className="mt-8">
                      <p>Kepada Yth,</p>
                      <p className="font-bold">Seluruh Anggota DPP PIKI</p>
                      <p>Di Tempat</p>
                    </div>

                    <div className="mt-6">
                      <p>Salam Sejahtera,</p>
                      <p className="mt-2">
                        Berdasarkan hasil Rapat Pleno DPP PIKI pada tanggal 15
                        Oktober 2023, maka dengan ini diputuskan pembentukan
                        Panitia Pelaksana untuk agenda Konferensi Nasional yang
                        akan dilaksanakan di Jakarta. Segala biaya yang timbul
                        akan dibebankan kepada anggaran organisasi.
                      </p>
                      <p className="mt-4">
                        Demikian surat keputusan ini dibuat untuk dapat
                        dipergunakan sebagaimana mestinya. Atas perhatian dan
                        kerjasamanya kami ucapkan terima kasih.
                      </p>
                    </div>

                    <div className="relative mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-12">
                      <div className="relative text-center">
                        <p className="mb-16">Ketua Umum,</p>
                        <div className="absolute left-1/2 top-6 z-20 -translate-x-1/2">
                          <div className="signature-stamp">
                            <Image
                              alt="Tanda tangan Ketua Umum"
                              className="h-16 w-auto object-contain"
                              height={64}
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS9LP-Wc4ebRICODcfPrRUkDovUz1rGCQopylGGPvLKEYsAD78_gaZq2dRFPwDlKZtoq3UDh_utUYYX6xGKrTaowpYvzVyktAvU7pjB14vHIeQRpG5lQ9Hj1YL54CEmMZYiYnp13FkFhlnfDoB99unn0TRHeyY7sQk8takQPTKZwugHT0yF-YuPFZFdOqHP23sPl5beczpM69nrakRHz-BIL1ntFyWSWi89Z2eWUmbMMhbKGjWgB7LSg"
                              width={160}
                            />
                          </div>
                        </div>
                        <p className="inline-block border-b border-on-surface font-bold">
                          Dr. Badikenita Sitepu, SE., M.Si
                        </p>
                      </div>

                      <div className="relative text-center">
                        <p className="mb-16">Sekretaris Jenderal,</p>
                        <div className="absolute left-1/2 top-6 z-20 -translate-x-1/2">
                          <div className="signature-stamp">
                            <Image
                              alt="Tanda tangan Sekretaris Jenderal"
                              className="h-16 w-auto object-contain"
                              height={64}
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ01X3bkCnbZDwO20fYSnNkWEycOawPwKA9bWhx3WQGgNG7byyQDyYI4R0iJwGwoYmdvoxizTPGQD5SZhWumT4j2mqUSZ6GxLASHr2KSunCGhEkqmpILIFHHs8k8CYyAy-YrlPnqdyr9Jrmy0Bjr307nw2P8F4cFlmwyNWQTODrW0En5rkdP0WLOpvgqDaCHiM5jv0jVVrLW_rGyEQjWgFu0ot_TO9EBZbvEkm2nVaf_Zs3gB5jkStyw"
                              width={160}
                            />
                          </div>
                        </div>
                        <p className="inline-block border-b border-on-surface font-bold">
                          Audy WMR Wuisang, S.Th., M.Si
                        </p>
                      </div>

                      <div className="official-seal absolute left-1/2 top-4 z-30 h-32 w-32 -translate-x-1/2 rotate-[12deg] opacity-80 pointer-events-none md:left-1/4">
                        <div className="flex flex-col items-center justify-center rounded-full border border-dashed border-primary p-2">
                          <span className="text-[8px] font-bold uppercase">
                            Sekretariat Jenderal
                          </span>
                          <span className="font-[family-name:var(--font-merriweather)] text-[12px] font-black">
                            PIKI
                          </span>
                          <span className="text-[8px] uppercase">
                            Digital Certified
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between border-t border-border pt-4 text-[10px] text-muted opacity-60 sm:left-12 sm:right-12">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4" />
                        <span>
                          Digitally Signed &amp; Verified via PIKI Blockchain
                        </span>
                      </div>
                      <div>ID: 992-AXQ-2023-PIKI</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <button
                    className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                    type="button"
                  >
                    <ZoomIn className="h-5 w-5" />
                    Zoom
                  </button>
                  <button
                    className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                    type="button"
                  >
                    <Upload className="h-5 w-5" />
                    PDF
                  </button>
                  <button
                    className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                    type="button"
                  >
                    <Printer className="h-5 w-5" />
                    Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </SiteAnimations>
  );
}
