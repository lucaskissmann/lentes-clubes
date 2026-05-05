"use client";

import PillNav from "@/components/pill-nav";
import Image from "next/image";
import Link from "next/link";

const clubs = [
  {
    id: "inter",
    name: "Inter",
    feeling: "Vermelho que pulsa.",
    href: "/inter",
    logo: "/inter-logo.png",
    logoWidth: 96,   // ← ajuste o escudo do Inter aqui
    logoHeight: 96,
    bg: "from-[#350008] via-[#900F1C] to-[#D8192A]",
    glow: "rgba(216,25,42,0.25)",
  },
  {
    id: "gremio",
    name: "Grêmio",
    feeling: "Tricolor no olhar.",
    href: "/gremio",
    logo: "/Gremio_logo.svg",
    logoWidth: 92,   // ← ajuste o escudo do Grêmio aqui
    logoHeight: 92,
    bg: "from-[#05091a] via-[#0D1E54] to-[#1A3B8C]",
    glow: "rgba(26,59,140,0.28)",
  },
];

export default function Home() {
  return (
    <>
      <PillNav active="hub" />
      <main className="relative min-h-screen flex flex-col items-center overflow-hidden pb-28 bg-[#0A0A0A]">

        {/* ── HEADER ────────────────────────────────── */}
        <header className="flex flex-col items-center text-center pt-16 pb-10 px-6">
          <h1 
            className="text-white font-bold text-3xl sm:text-4xl py-2 tracking-widest"
            style={{ fontFamily: "'Trump Soft Pro', sans-serif" }}>
              LENTES CLUBES
          </h1>
          <h3
            className="text-[#A8884A] text-base py-2 tracking-widest mb-4"
            style={{ fontFamily: "'Trump Soft Pro', sans-serif" }}>
              POR FORLA LABORATÓRIO
          </h3>
          <p className="text-[11px] tracking-[3px] uppercase text-white/30 mb-10">
            Tecnologia Antirreflexo · Identidade de Torcedor
          </p>
          <h1 className="flex flex-col font-semibold tracking-[3px] text-zinc-50 text-4xl sm:text-6xl md:text-7xl leading-tight max-w-xl" style={{ fontFamily: "'Trump Soft Pro', sans-serif" }}>
            <span>DE QUAL TIME</span>
            <span>É O SEU CORAÇÃO?</span>
          </h1>
          <p className="flex flex-col text-white/40 text-sm leading-relaxed mt-4 max-w-sm">
            Escolha o seu clube e descubra a lente feita para você.
          </p>
        </header>

        {/* ── GRID DE CLUBES ────────────────────────── */}
        <section className="w-full max-w-lg px-6 mb-16">
          <div className="grid grid-cols-2 gap-[3px] rounded-2xl overflow-hidden">
            {clubs.map((club) => (
              <Link key={club.id} href={club.href} className="group block">
                <div
                  className={`
                    relative flex flex-col items-center justify-center
                    aspect-square w-full overflow-hidden
                    bg-gradient-to-br ${club.bg}
                    transition-all duration-300 group-hover:brightness-110
                  `}
                >
                  {/* Glow radial ao hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 60%, ${club.glow} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Escudo — dimensões individuais por clube */}
                  <div
                    className="relative z-10 mb-4 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                    style={{ width: club.logoWidth, height: club.logoHeight }}
                  >
                    <Image
                      src={club.logo}
                      alt={`Escudo ${club.name}`}
                      width={club.logoWidth}
                      height={club.logoHeight}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Nome do clube */}
                  <p className="relative z-10 text-white font-bold tracking-widest uppercase text-sm sm:text-base md:text-lg mb-1">
                    {club.name}
                  </p>

                  {/* Frase */}
                  <p className="relative z-10 text-white/40 text-[12px] italic text-center px-4 mb-4 leading-snug">
                    {club.feeling}
                  </p>

                  {/* CTA pill */}
                  <span className="relative z-10 text-[10px] font-semibold tracking-widest uppercase text-white/60 border border-white/20 rounded-full px-3 py-1 transition-all duration-200 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/40">
                    Ver lentes →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── SELOS DE CONFIANÇA ────────────────────── */}
        <div className="flex flex-wrap justify-center gap-5 mb-12 px-6 text-[12px] text-white/35">
          {["Produto oficialmente licenciado", "15 Camadas AR", "Qualidade Forla Laboratório", "Entrega para todo o Brasil"].map((selo) => (
            <span key={selo} className="flex items-center gap-2">
              <span className="text-[#A8884A]">✦</span>
              <strong className="text-white/55 font-medium">{selo}</strong>
            </span>
          ))}
        </div>

        {/* ── TAGLINE ───────────────────────────────── */}
        <p className="text-white/20 text-sm italic tracking-widest text-center">
          Enxergue com a alma do seu time.
        </p>

      </main>
    </>
  );
}