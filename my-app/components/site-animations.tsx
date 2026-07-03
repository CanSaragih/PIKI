"use client";

import type { ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SiteAnimationsProps = {
  children: ReactNode;
  className?: string;
};

export function SiteAnimations({ children, className }: SiteAnimationsProps) {
  const scopeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scope = scopeRef.current;

    if (!scope) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      gsap.set(scope.querySelectorAll("[data-hero-item], [data-reveal]"), {
        opacity: 1,
        y: 0,
        clearProps: "transform",
      });
      return;
    }

    const ctx = gsap.context(() => {
      const heroItems = scope.querySelectorAll<HTMLElement>("[data-hero-item]");
      const revealItems = scope.querySelectorAll<HTMLElement>("[data-reveal]");
      const floatingItems = scope.querySelectorAll<HTMLElement>("[data-orb]");

      if (heroItems.length > 0) {
        gsap.from(heroItems, {
          opacity: 0,
          y: 24,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.05,
        });
      }

      revealItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: index * 0.02,
            scrollTrigger: {
              trigger: item,
              start: "top 86%",
            },
          },
        );
      });

      if (floatingItems.length > 0) {
        gsap.to(floatingItems, {
          y: -16,
          x: 10,
          duration: 5.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.25,
        });
      }
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scopeRef} className={className}>
      {children}
    </div>
  );
}
