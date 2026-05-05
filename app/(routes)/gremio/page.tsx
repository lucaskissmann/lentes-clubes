import Image from "next/image";
import { ProductSpecs } from "@/components/product-specs";
import Background from "@/components/background";
import Link from "next/link";
import Navbar from "@/components/navbar";
import PillNav from "@/components/pill-nav";

export default function Gremio() {
  return (
    <>
      <Background variant="gremio" />
      <PillNav active="gremio" />
      <main className="text-white">

        <section className="min-h-screen flex items-center px-6 my-12">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto w-full">

            <div>
              <span className="text-sm tracking-widest uppercase text-blue-400/60 mb-3 block">
                Linha Licenciada
              </span>

              {/* MOBILE: emblema acima, tudo numa linha */}
              <div className="flex flex-col items-start gap-y-3 mb-4">
                <div className="flex gap-x-2 items-center">
                  <Image
                    src="/Gremio_logo.svg"
                    height={60}
                    width={60}
                    alt="Escudo do Grêmio."
                    className="w-9 h-9 min-[425px]:w-12 min-[425px]:h-12 sm:w-[60px] sm:h-[60px]"
                  />
                  <h1
                    style={{ fontFamily: "'Trump Soft Pro', sans-serif" }}
                    className="flex items-end gap-x-2 text-[2.2rem] min-[425px]:text-[3rem] sm:text-[4rem] font-medium text-[#0093dd] leading-none whitespace-nowrap"
                  >
                    <span
                      style={{ fontFamily: "'Segoe UI', sans-serif" }}
                      className="text-[2.6rem] min-[425px]:text-[3.5rem] sm:text-7xl font-bold italic text-white leading-none"
                    >
                      AR
                    </span>
                    IMORTAL TRICOLOR
                  </h1>
                </div>
              </div>

              <p className="text-xs sm:text-base text-neutral-400 mb-10 leading-relaxed">
                Um produto feito para quem carrega o orgulho imortal em cada detalhe.
                Tecnologia de ponta com a identidade do seu clube.
              </p>

              <ProductSpecs
                accentColor="text-blue-400"
                roundedColor="#0093dd"
                badgeBorderColor="border-blue-400/40"
                badgeBgColor="bg-blue-500/30"
                badgeTextColor="text-blue-300"
                pillBorderColor="border-blue-400/50"
                pillBgColor="bg-blue-500/30"
                pillTextColor="text-blue-300"
                residualLabel="Residual Azul Inovador"
              />

              <Link href="/redirect">
                <button className="cursor-pointer mt-8 px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-500/30 hover:bg-[#0093dd] rounded-lg transition-colors duration-200 font-medium text-sm sm:text-base tracking-wide">
                  Saiba Mais
                </button>
              </Link>
            </div>

            <div className="relative mb-4">
              <Image
                src="/gremio-torcedor.png"
                alt="Produto Grêmio"
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