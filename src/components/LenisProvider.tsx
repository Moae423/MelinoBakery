"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisProvider = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Kontrol kecepatan smooth scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Efek smooth
      direction: "vertical", // Scroll vertikal
      gestureDirection: "vertical",
      smoothTouch: false, // Matikan efek smooth di perangkat touch
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Bersihkan saat komponen di-unmount
  }, []);

  return null;
};

export default LenisProvider;
