"use client";
import type { ReactNode } from "react";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type SiteSmoothScrollProps = { children: ReactNode };

export function SiteSmoothScroll({ children }: SiteSmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    // simpan referensi fungsi yang SAMA untuk add & remove
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    document.documentElement.style.scrollBehavior = "auto";

    return () => {
      gsap.ticker.remove(update); // sekarang benar-benar match
      lenis.destroy();
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return <>{children}</>;
}
