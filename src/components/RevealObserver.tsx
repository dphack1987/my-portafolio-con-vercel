"use client";

import { useEffect, useRef } from "react";

export default function RevealObserver() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Crear observer solo una vez
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observerRef.current?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
    }

    // Observar todos los elementos .reveal
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return null;
}
