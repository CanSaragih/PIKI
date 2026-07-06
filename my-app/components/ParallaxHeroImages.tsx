"use client";

import { BadgeCheck, Compass, Download } from "lucide-react";
import { ParallaxHeroImages } from "./ui/parallax-hero-images";
import Link from "next/link";

export function ParallaxHeroImagesDemo() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
      <ParallaxHeroImages images={images} />
      <div className="mx-auto flex w-full max-w-350 flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div
          data-hero-item
          className="glass-card mb-8 inline-flex items-center gap-2 rounded-full border border-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary"
        >
          <BadgeCheck className="h-4 w-4" />
          Akademis • Kebangsaan • Oikumene
        </div>

        <h1
          data-hero-item
          className="max-w-4xl text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-[4.25rem]"
        >
          Intelektual Kristen Mengabdi untuk Bangsa
        </h1>

        <p
          data-hero-item
          className="mt-6 max-w-2xl text-lg leading-8 text-muted"
        >
          Wadah pemikir dan kaum intelektual Kristen Indonesia dalam memberikan
          kontribusi strategis bagi pembangunan nasional melalui penguasaan ilmu
          pengetahuan dan nilai-nilai kebangsaan.
        </p>

        <div data-hero-item className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Compass className="h-4 w-4" />
            Pelajari Visi &amp; Misi
          </Link>
          <Link
            href="/journals"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-8 py-4 text-sm font-semibold text-primary transition-all hover:bg-primary/5"
          >
            <Download className="h-4 w-4" />
            Unduh Annual Report
          </Link>
        </div>
      </div>
    </div>
  );
}

const images = [
  "/images1.jpg",
  "/images2.webp",
  "/images3.jpeg",
  "/images4.webp",
  "/images5.jpeg",
  "/images6.jpeg",
];
