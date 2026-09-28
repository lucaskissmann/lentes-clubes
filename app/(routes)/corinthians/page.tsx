import Image from "next/image";
import { ProductSpecs } from "@/components/product-specs";
import Background from "@/components/background";
import PillNav from "@/components/pill-nav";
import oticas from "@/app/data/oticas-corinthians.json";
import { OticaFilter } from "@/components/otica-filter";

export default function Corinthians() {
	return (
		<>
			<Background variant="corinthians" />
			<PillNav active="corinthians" />
			<main className="text-white">

				{/* ── HERO ── */}
				<section className="min-h-screen flex items-center px-6 my-12">
					<div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto w-full">

						<div>
							<span className="text-sm tracking-widest uppercase text-zinc-400 mb-3 block">
								Linha Licenciada
							</span>

							<div className="flex flex-col items-start gap-y-3 mb-4">
								<div className="flex gap-x-2 items-center">
									<Image
										src="/corinthians/corinthians-logo-render.png"
										height={60}
										width={60}
										alt="Escudo do Corinthians."
										className="w-9 h-9 min-[425px]:w-12 min-[425px]:h-12 sm:w-[60px] sm:h-[60px]"
									/>
									<h1
										style={{ fontFamily: "'Trump Soft Pro', sans-serif" }}
										className="flex items-end gap-x-2 text-[2.2rem] min-[425px]:text-[3rem] sm:text-[4rem] text-zinc-200 font-medium leading-none whitespace-nowrap"
									>
										<span
											style={{ fontFamily: "'Segoe UI', sans-serif" }}
											className="text-[2.6rem] min-[425px]:text-[3.5rem] sm:text-7xl text-white font-bold italic leading-none"
										>
											AR
										</span>
										TIMÃO
									</h1>
								</div>
							</div>

							<p className="text-xs sm:text-base text-neutral-400 mb-10 leading-relaxed">
								Um produto feito para quem carrega o orgulho corinthiano em cada detalhe.
								Tecnologia de ponta com a identidade do seu clube.
							</p>

							<ProductSpecs
								accentColor="text-zinc-400"
								roundedColor="#e4e4e7"
								badgeBorderColor="border-zinc-400/40"
								badgeBgColor="bg-zinc-500/30"
								badgeTextColor="text-zinc-300"
								pillBorderColor="border-zinc-400/50"
								pillBgColor="bg-zinc-500/30"
								pillTextColor="text-zinc-300"
								residualLabel="Residual Cristalino Inovador"
							/>
						</div>

						<div className="relative mb-4">
							<Image
								src="/timao-torcedor.png"
								alt="Produto Corinthians"
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
							<span className="text-sm tracking-widest uppercase text-zinc-400 mb-3 block">
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
							accentColor="text-zinc-400"
							borderColor="border-zinc-400/20"
						/>

					</div>
				</section>

				<section>
					<div className="flex flex-col items-center text-center text-[#A8884A] mb-24 text-[10px]">
						<div className="flex items-center gap-2">
							<span>✦</span>
							<span>Produto Oficial licenciado pelo Sport Club Corinthians Paulista</span>
							<span>✦</span>
						</div>
						<span>by Fama Licenciamentos - Todos os Direitos Reservados 2026</span>
					</div>
				</section>

			</main>
		</>
	);
}