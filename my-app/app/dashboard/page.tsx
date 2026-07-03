import Image from "next/image";
import {
  BadgeCheck,
  Download,
  Fingerprint,
  Filter,
  QrCode,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SiteAnimations } from "@/components/site-animations";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavigation } from "@/components/site-navigation";

const members = [
  {
    name: "Dr. Andreas Setiawan",
    nta: "10.0124.0089",
    region: "Jakarta",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbpFq5U5uXV7fwjZXC4on3U3vjB7QXJUxZ0cQnwCSaHXLfuCW0pZ1OnGJrLltWQfsXlvkxpt22j1j0gOk4ztyvq3jqICsye9jzWnQar3fokN9Rw-Pi_rJSCF5jBPFaAgWGPnxZeFMeu-9x667sGOyIhNbk_rRnOrdGFOyIV2f6dH136dU9ChQqEhAfyoEwTaTzfT05cJI0Y1aCLe-ncr_2xaSooZr8m0X9mxHaS9Rt0f_L45b4hQeALA",
  },
  {
    name: "Prof. Maria Hutagalung",
    nta: "10.0224.1102",
    region: "Medan",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZtU8eGhH3rygNDCxT5V4s4QIjRtD52FyTeTtbnYkjh3k1H_rFxpmuVW23tH60vsStjzbr1X0g13SyWZUmD6nMcylFl1xF8pdBAnZDHjOYd18Zv_oAL97YeZssJ54NCPVWMBeJVMiOEoeXTFZtB6EibgyDPwDH0ahzIyaGMq0z1lqtLMrxedoRLzUqawa8gg9nLBjrgd_pPV-p_q8UcWTMhT3kRnmrMDKicUi-EmHs_VcmXKLyNRZpDQ",
  },
  {
    name: "Budi Santoso, M.Si.",
    nta: "10.0124.2045",
    region: "Surabaya",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVqmLk841I5h5BZKRDwc_nU7ubwP5nIogcZ5i2YiEcwGlyqqKCwx4TFIuKiw003Cx7Y-pMcVgwhXXcRli1DjFAtPeDo-LcKJr8bzAs5yVc4C8L5XMiuEToTsjquAx4kcwCZnqaMLarw0u69ww63o85qu6kJCELpyV29Vas8zpnktNtylBdw7csxzz6BdwgeU47fpLW6ZRky2CvHpFP1WLHQFjftS9B6xkPCLCEF_b1FXB2O6k0kQzFYw",
  },
];

const stats = [
  ["12.4k", "Total Members"],
  ["34", "DPD Provinces"],
  ["18", "Expertise Groups"],
  ["98%", "Data Accuracy"],
];

export default function DashboardPage() {
  return (
    <SiteAnimations className="min-h-screen bg-background">
      <SiteNavigation active="dashboard" />

      <main className="pt-24">
        <section className="hero-mesh border-b border-border">
          <div className="mx-auto w-full max-w-350 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-10 max-w-350">
              <h1 className="text-4xl font-bold text-primary sm:text-5xl">
                Satu Data PIKI
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
                Pusat integrasi data keanggotaan dan layanan kartu digital
                eksklusif untuk Persatuan Inteligensia Kristen Indonesia.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-12">
              <aside data-reveal className="space-y-6 lg:col-span-5">
                <div className="rounded-2xl border border-border bg-surface p-6 shadow-[0px_4px_12px_rgba(11,47,100,0.05)]">
                  <div className="mb-6 flex items-center gap-3 text-primary">
                    <Filter className="h-4 w-4" />
                    <span className="text-sm font-semibold uppercase tracking-[0.28em]">
                      Directory Filters
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                      <input
                        className="w-full rounded-lg border border-border bg-white py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/10"
                        placeholder="Search members by name or NTA..."
                        type="text"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <select className="rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none">
                        <option>All DPD Provinces</option>
                        <option>DKI Jakarta</option>
                        <option>Jawa Barat</option>
                        <option>Sulawesi Utara</option>
                      </select>
                      <select className="rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none">
                        <option>Expertise Area</option>
                        <option>Education</option>
                        <option>Public Policy</option>
                        <option>Theology</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0px_4px_12px_rgba(11,47,100,0.05)]">
                  <div className="flex items-center justify-between border-b border-border bg-surface-muted p-4">
                    <span className="text-sm font-semibold text-primary">
                      Active Members (324)
                    </span>
                    <span className="text-xs text-muted">Showing top 5</span>
                  </div>
                  <div className="divide-y divide-border">
                    {members.map((member) => (
                      <div
                        key={member.nta}
                        className="group flex cursor-pointer items-center justify-between p-4 transition-colors hover:bg-surface-muted"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-surface-muted">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-primary transition-colors group-hover:text-secondary">
                              {member.name}
                            </div>
                            <div className="text-xs text-muted">
                              NTA: {member.nta} • {member.region}
                            </div>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-success">
                          <BadgeCheck className="h-3 w-3" />
                          Verified
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-surface-muted py-4 text-sm font-semibold text-primary transition-colors hover:bg-surface">
                    View Full Directory
                  </button>
                </div>
              </aside>

              <div data-reveal className="lg:col-span-7">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[0px_4px_12px_rgba(11,47,100,0.05)] lg:p-8">
                  <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-primary">
                        Kartu Tanda Anggota
                      </h2>
                      <p className="mt-2 text-sm text-muted">
                        Status Keanggotaan: Aktif
                      </p>
                    </div>
                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-opacity hover:opacity-80">
                      <Download className="h-4 w-4" />
                      Download PDF
                    </button>
                  </div>

                  <div className="mx-auto w-full max-w-[500px]">
                    <div className="relative aspect-[1.586/1] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B2F64] via-[#001a42] to-[#041a3a] p-1 shadow-2xl">
                      <div className="absolute inset-0 rounded-[24px] border border-[#D4AF37]/30" />
                      <div className="absolute -bottom-12 -right-12 select-none opacity-[0.03]">
                        <span className="text-[180px] font-black text-white">
                          PIKI
                        </span>
                      </div>
                      <div className="relative flex h-full flex-col p-8">
                        <div className="mb-6 flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="rounded bg-white p-1">
                              <div className="flex h-8 w-8 items-center justify-center font-bold text-primary">
                                P
                              </div>
                            </div>
                            <div className="flex flex-col text-[12px] font-bold tracking-[0.2em] text-white">
                              <span>PERSATUAN INTELIGENSIA</span>
                              <span>KRISTEN INDONESIA</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="inline-flex items-center gap-1 text-[18px] font-bold uppercase tracking-[0.28em] text-secondary-soft">
                              <Sparkles className="h-4 w-4" />
                              Premium
                            </div>
                            <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                              Member Access
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-1 items-center gap-6">
                          <div className="relative h-32 w-24 overflow-hidden rounded-lg border border-[#D4AF37]/40 bg-primary-container">
                            <Image
                              src={members[0].image}
                              alt="Foto anggota"
                              fill
                              className="object-cover grayscale brightness-110"
                              sizes="96px"
                            />
                          </div>

                          <div className="text-white">
                            <h3 className="mb-1 text-2xl font-bold leading-tight">
                              Dr. Andreas Setiawan
                            </h3>
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-secondary-soft">
                              Pakar Pendidikan &amp; Kebijakan
                            </p>
                            <div className="flex gap-4">
                              <div>
                                <p className="text-[8px] uppercase text-white/50">
                                  Nomor Tanda Anggota
                                </p>
                                <p className="font-mono text-sm font-bold tracking-[0.18em]">
                                  10.0124.0089
                                </p>
                              </div>
                              <div>
                                <p className="text-[8px] uppercase text-white/50">
                                  Berlaku Hingga
                                </p>
                                <p className="font-mono text-sm font-bold tracking-[0.18em]">
                                  12/2026
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 flex items-end justify-between border-t border-white/10 pt-4">
                          <div>
                            <div className="mb-1 text-[7px] uppercase text-white/50">
                              Authenticated Signature
                            </div>
                            <div className="h-10 w-24 border-b border-white/20" />
                            <div className="mt-1 text-[8px] font-bold text-white">
                              DPP PIKI CHAIRMAN
                            </div>
                          </div>
                          <div className="relative rounded bg-white p-1">
                            <div className="flex h-16 w-16 items-center justify-center bg-white">
                              <QrCode className="h-11 w-11 text-black" />
                            </div>
                            <div className="mt-1 text-[6px] font-bold uppercase text-black">
                              Verify Authenticity
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_80%)] mix-blend-overlay" />
                    </div>
                  </div>

                  <div className="mt-10 grid gap-6 rounded-2xl border border-border bg-surface-muted p-6 md:grid-cols-2">
                    <div className="flex gap-3">
                      <div className="h-fit rounded-lg bg-primary/5 p-2 text-primary">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-primary">
                          Cryptographic QR
                        </h4>
                        <p className="text-xs leading-6 text-muted">
                          Validated through DPP PIKI Central Database with
                          unique token.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-fit rounded-lg bg-primary/5 p-2 text-primary">
                        <Fingerprint className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-primary">
                          Biometric ID
                        </h4>
                        <p className="text-xs leading-6 text-muted">
                          Embedded profile synchronization for event check-ins.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-secondary-soft py-4 text-sm font-bold text-[#4a3900] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105">
                    <QrCode className="h-4 w-4" />
                    SHOW QR ACCESS
                  </button>
                </div>
              </div>
            </div>

            <div data-reveal className="mt-16 grid gap-8 md:grid-cols-4">
              {stats.map(([value, label]) => (
                <article
                  key={label}
                  className="rounded-2xl border border-border bg-surface p-6 text-center shadow-sm"
                >
                  <div className="text-4xl font-bold text-primary">{value}</div>
                  <p className="mt-2 text-sm text-muted">{label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </SiteAnimations>
  );
}
