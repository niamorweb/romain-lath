"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ProjectLayoutGlobal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      // On affiche le bouton si le scroll dépasse la hauteur de la fenêtre (window.innerHeight)
      if (!showScroll && window.scrollY > window.innerHeight) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= window.innerHeight) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-neutral-50 mt-4 flex flex-col gap-6 md:gap-10 px-6 lg:px-24 py-4 lg:py-12 font-sans pb-12 relative">
      <div className="flex flex-col gap-6 md:gap-10 w-full max-w-[1240px] mx-auto">
        {children}
      </div>

      {/* Bouton Retour en haut */}
      <button
        onClick={scrollTop}
        className={`fixed bottom-8 right-8 p-4 bg-neutral-800 hover:bg-neutral-900 text-white rounded-2xl shadow-2xl transition-all duration-300 z-50 active:scale-95 border border-neutral-700 ${
          showScroll
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Retour en haut"
      >
        <ArrowUp size={24} strokeWidth={3} />
      </button>
    </div>
  );
}
