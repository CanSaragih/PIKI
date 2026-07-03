"use client";

import { useState } from "react";
import Link from "next/link";
import { BadgeCheck, Menu, X } from "lucide-react";
import Image from "next/image";

type SiteNavigationProps = {
  active: "home" | "dashboard" | "membership" | "journals";
};

const navItems = [
  { href: "/", label: "Beranda", key: "home" },
  { href: "/journals", label: "Portal Jurnal", key: "journals" },
  { href: "/dashboard", label: "Satu Data & KTA", key: "dashboard" },
  { href: "/sekretariat", label: "E-Sekretariat", key: "membership" },
] as const;

export function SiteNavigation({ active }: SiteNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      data-navbar
      className="fixed top-0 z-50 w-full border-b border-border/60 bg-surface/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex w-full max-w-350 items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo PIKI"
            className="font-serif text-2xl font-black tracking-tight text-primary"
            width={30}
            height={30}
          />

          <span className="hidden items-center gap-1.5 rounded-full bg-secondary/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary md:inline-flex">
            <BadgeCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
            Akademis • Kebangsaan • Oikumene
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 rounded-full border border-border/60 bg-white/50 p-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.key;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted hover:bg-primary/5 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/membership"
            className="hidden text-sm font-medium text-muted transition-colors hover:text-primary xl:block"
          >
            Member Access
          </Link>
          <Link
            href="/membership"
            className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-105 active:scale-95"
          >
            Daftar KTA
          </Link>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-full p-2.5 text-primary transition-colors hover:bg-primary/5 lg:hidden"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-border/60 bg-surface/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {navItems.map((item) => {
              const isActive = active === item.key;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/8 text-primary"
                      : "text-muted hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
