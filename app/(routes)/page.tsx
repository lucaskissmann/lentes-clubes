import PillNav from "@/components/pill-nav";
import { ClubCard } from "@/components/club-card";

const clubs = [
  {
    id: "inter",
    name: "Inter",
    feeling: "Vermelho que pulsa.",
    href: "/inter",
    logo: "/inter/inter-logo.png",
    logoWidth: 96,
    logoHeight: 96,
    bg: "from-[#350008] via-[#900F1C] to-[#e30513]/70",
    glow: "rgba(216,25,42,0.25)",
  },
  {
    id: "gremio",
    name: "Grêmio",
    feeling: "Tricolor até no olhar.",
    href: "/gremio",
    logo: "/gremio/gremio-logo.png",
    logoWidth: 96,
    logoHeight: 96,
    bg: "from-[#05091a] via-[#0D1E54] to-[#0093dd]/70",
    glow: "rgba(26,59,140,0.28)",
  },
];

export default function Home() {
  return (
    <>
      <PillNav active="hub" />
      <main
        className="relative min-h-screen flex flex-col items-center overflow-hidden pb-28"
        style={{
          background: `
            radial-gradient(ellipse 80% 40% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%),
            #0A0A0A
          `,
        }}
      >
        {/* ── HEADER ── */}
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
          <h1
            className="flex flex-col font-semibold tracking-[3px] text-zinc-50 text-4xl sm:text-6xl md:text-7xl leading-tight max-w-xl"
            style={{ fontFamily: "'Trump Soft Pro', sans-serif" }}>
            <span>DE QUAL TIME</span>
            <span>É O SEU CORAÇÃO?</span>
          </h1>
          <p className="flex flex-col text-white/40 text-sm leading-relaxed mt-4 max-w-sm">
            Escolha o seu clube e descubra a lente feita para você.
          </p>
        </header>

        {/* ── GRID DE CLUBES ── */}
        <section className="w-full max-w-lg px-6 mb-8">
          <div className="grid grid-cols-2 gap-[3px] rounded-2xl overflow-hidden">
            {clubs.map((club) => (
              <ClubCard key={club.id} {...club} />
            ))}
          </div>
        </section>

        <div className="flex flex-col items-center text-center text-[#A8884A] mb-8 text-[10px]">
          <span>Official Licensed Product © Fama Licenciamentos 2026</span>
          <span>Todos os Direitos Reservados.</span>
        </div>

        {/* ── SELOS ── */}
        <div className="flex flex-wrap justify-center gap-5 mb-12 px-6 text-[12px] text-white/35">
          {["15 Camadas AR", "Qualidade Forla Laboratório", "Entrega para todo o Brasil"].map((selo) => (
            <span key={selo} className="flex items-center gap-2">
              <span className="text-[#A8884A]">✦</span>
              <strong className="text-white/55 font-medium">{selo}</strong>
            </span>
          ))}
        </div>

        {/* ── TAGLINE ── */}
        <p className="text-white/20 text-sm italic tracking-widest text-center">
          Enxergue com a alma do seu time.
        </p>
      </main>
    </>
  );
}