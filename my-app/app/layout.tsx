import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
// import { Kanit } from "next/font/google";
import { SiteSmoothScroll } from "@/components/site-smooth-scroll";
import "./globals.css";

// const kanit = Kanit({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-prompt",
//   display: "swap",
// });

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

// const merriweather = Merriweather({
//   variable: "--font-merriweather",
//   subsets: ["latin"],
//   weight: ["400", "700", "900"],
// });

export const metadata: Metadata = {
  title: "PIKI - Persatuan Inteligensia Kristen Indonesia",
  description:
    "Website resmi PIKI dengan portal organisasi, dashboard KTA digital, layanan anggota, dan jurnal ilmiah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteSmoothScroll>{children}</SiteSmoothScroll>
      </body>
    </html>
  );
}
