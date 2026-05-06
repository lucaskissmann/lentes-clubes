"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { gaEvent, pixelTrack } from "@/app/analytics/analytics-provider";

interface ClubCardProps {
  id: string;
  name: string;
  feeling: string;
  href: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  bg: string;
  glow: string;
}

export function ClubCard({ id, name, feeling, href, logo, logoWidth, logoHeight, bg, glow }: ClubCardProps) {
  const router = useRouter();

  function handleClick() {
    // Dispara evento no GA4
    gaEvent("club_selected", {
      time: id,                        // "inter" | "gremio"
      utm_source: "qrcode",
      utm_medium: "pdv",
      utm_campaign: "lentes_clubes",
    });

    // Dispara evento no Meta Pixel
    pixelTrack("ViewContent", {
      content_name: `lentes_${id}`,   // "lentes_inter" | "lentes_gremio"
      content_category: "clube",
    });

    // Navega para a página do time
    router.push(href);
  }

  return (
    <button onClick={handleClick} className="group block w-full text-left cursor-pointer">
      <div
        className={`
          relative flex flex-col items-center justify-center
          w-full bg-gradient-to-br ${bg}
          transition-all duration-300 group-hover:brightness-110
          py-10 px-4
        `}
      >
        {/* Glow radial ao hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 60%, ${glow} 0%, transparent 70%)`,
          }}
        />

        {/* Escudo */}
        <div
          className="relative z-10 mb-5 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          style={{
            width:  `clamp(52px, 25vw, ${logoWidth}px)`,
            height: `clamp(52px, 25vw, ${logoHeight}px)`,
          }}
        >
          <Image
            src={logo}
            alt={`Escudo ${name}`}
            width={logoWidth}
            height={logoHeight}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Nome */}
        <p className="relative z-10 text-white font-bold tracking-widest uppercase text-sm sm:text-base text-center mb-1">
          {name}
        </p>

        {/* Frase */}
        <p className="relative z-10 text-white/40 text-[11px] italic text-center px-2 mb-5 leading-snug">
          {feeling}
        </p>

        {/* CTA pill */}
        <span className="relative z-10 text-[10px] font-semibold tracking-widest uppercase text-white/60 border border-white/20 rounded-full px-3 py-1 transition-all duration-200 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/40 whitespace-nowrap">
          Ver lentes →
        </span>
      </div>
    </button>
  );
}