import Image from "next/image";
import { ProductSpecs } from "@/components/product-specs";
import NavbarTeste from "@/components/navbar";
import Background from "@/components/background";
import Link from "next/link";
import PillNav from "@/components/pill-nav";

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
                    src="/inter-logo.png"
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

              <Link href="/redirect">
                <button className="cursor-pointer mt-8 px-5 sm:px-6 py-2.5 sm:py-3 bg-red-500/30 hover:bg-[#e30513] rounded-lg transition-colors duration-200 font-medium text-sm sm:text-base tracking-wide">
                  Saiba Mais
                </button>
              </Link>
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
      </main>
    </>
  );
}