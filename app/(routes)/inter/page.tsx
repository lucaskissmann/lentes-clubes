import Image from "next/image";
import { ProductSpecs } from "@/components/product-specs";
import NavbarTeste from "@/components/navbar";
import Background from "@/components/background";
import Link from "next/link";
import PillNav from "@/components/pill-nav";
import { OticaCard } from "@/components/otica-card";
import oticas from "@/app/data/oticas-inter.json";
import { OticaFilter } from "@/components/otica-filter";

export default function Inter() {
  return (
    <>
      <Background variant="inter" />
      <PillNav active="inter" />
      <main className="text-white">

        <section className="min-h-screen flex items-center px-6 my-12">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto w-full">

            <div>
              <span className="text-sm tracking-widest uppercase text-red-400/60 mb-3 block">
                Linha Licenciada
              </span>

              {/* MOBILE: emblema acima, tudo numa linha */}
              <div className="flex flex-col items-start gap-y-3 mb-4">
                <div className="flex gap-x-2 items-center">
                  <Image
                    src="/inter/inter-logo.png"
                    height={60}
                    width={60}
                    alt="Escudo do Inter."
                    className="w-9 h-9 min-[425px]:w-12 min-[425px]:h-12 sm:w-[68px] sm:h-[68px]"
                  />
                  <h1
                    style={{ fontFamily: "'Trump Soft Pro', sans-serif" }}
                    className="flex items-end gap-x-2 text-[2.2rem] min-[425px]:text-[3rem] sm:text-[4rem] font-medium text-[#e30513] leading-none whitespace-nowrap"
                  >
                    <span
                      style={{ fontFamily: "'Segoe UI', sans-serif" }}
                      className="text-[2.6rem] min-[425px]:text-[3.5rem] sm:text-7xl font-bold italic text-white leading-none"
                    >
                      AR
                    </span>
                    COLORADO
                  </h1>
                </div>
              </div>

              <p className="text-xs sm:text-base text-neutral-400 mb-10 leading-relaxed">
                Um produto feito para quem carrega a paixão colorada em cada detalhe.
                Tecnologia de ponta com a identidade do seu clube.
              </p>

              <ProductSpecs
                accentColor="text-red-400"
                roundedColor="#e30513"
                badgeBorderColor="border-red-400/40"
                badgeBgColor="bg-red-500/30"
                badgeTextColor="text-red-300"
                pillBorderColor="border-red-400/50"
                pillBgColor="bg-red-500/30"
                pillTextColor="text-red-300"
                residualLabel="Residual Vermelho Inovador"
              />
            </div>

            <div className="relative mb-4">
              <Image
                src="/inter-torcedor.png"
                alt="Produto Inter"
                width={500}
                height={500}
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </section>

        {/* ── ÓTICAS AUTORIZADAS ── */}
        <section className="px-6 pb-12">
          <div className="max-w-5xl mx-auto w-full">

            <div className="mb-10">
              <span className="text-sm tracking-widest uppercase text-red-400/60 mb-3 block">
                Onde encontrar
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Óticas autorizadas
              </h2>
              <p className="text-white/40 text-sm mt-2 max-w-md leading-relaxed">
                Encontre uma loja perto de você e garanta as suas lentes com atendimento especializado.
              </p>
            </div>

            <OticaFilter
              oticas={oticas}
              accentColor="text-red-400"
              borderColor="border-red-400/20"
            />

          </div>
        </section>

        <section>
          <div className="flex flex-col items-center text-center text-[#A8884A] mb-24 text-[10px]">
            <div className="flex items-center gap-2">
              <span>✦</span>
              <span>Produto Oficial licenciado pelo S.C. Internacional.</span>
              <span>✦</span>
            </div>
            <span>by Fama Licenciamentos - Todos os Direitos Reservados 2026</span>
          </div>
        </section>
      </main>
    </>
  );
}