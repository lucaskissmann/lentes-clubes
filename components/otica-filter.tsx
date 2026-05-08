"use client"

import { useEffect, useState } from "react"
import { OticaCard } from "./otica-card"

interface Otica {
  id: number
  nome: string
  endereco: string
  whatsapp: string
	possuiWhatsapp: boolean
  image: string
  uf: string
  cidade: string
}

interface Estado {
  id: number
  sigla: string
  nome: string
}

interface Cidade {
  id: number
  nome: string
}

interface OticaFilterProps {
  oticas: Otica[]
  accentColor: string
  borderColor: string
}

export function OticaFilter({ oticas, accentColor, borderColor }: OticaFilterProps) {
  const [estados, setEstados] = useState<Estado[]>([])
  const [cidades, setCidades] = useState<Cidade[]>([])
  const [ufSelecionada, setUfSelecionada] = useState("")
  const [cidadeSelecionada, setCidadeSelecionada] = useState("")
  const [loadingCidades, setLoadingCidades] = useState(false)

  // Busca estados do IBGE
  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
      .then((res) => res.json())
      .then((data) => setEstados(data))
  }, [])

  // Busca cidades do estado selecionado
  useEffect(() => {
    if (!ufSelecionada) {
      setCidades([])
      setCidadeSelecionada("")
      return
    }

    setLoadingCidades(true)
    setCidadeSelecionada("")

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelecionada}/municipios?orderBy=nome`)
      .then((res) => res.json())
      .then((data) => {
        setCidades(data)
        setLoadingCidades(false)
      })
  }, [ufSelecionada])

	const oticasFiltradas = oticas.filter((otica) => {
		if (!cidadeSelecionada) return false
		if (otica.uf !== ufSelecionada) return false
		if (otica.cidade !== cidadeSelecionada) return false
		return true
	})

  const selectClass = `
    w-full bg-white/5 border ${borderColor} text-white/70 text-sm rounded-xl px-4 py-3
    outline-none focus:border-white/30 transition-colors cursor-pointer
    appearance-none
  `

  return (
    <div>
      {/* Filtros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">

        {/* Estado */}
        <div className="relative">
          <select
            value={ufSelecionada}
            onChange={(e) => setUfSelecionada(e.target.value)}
            className={selectClass}
          >
            <option value="" className="bg-neutral-900">Selecione um estado</option>
            {estados.map((estado) => (
              <option key={estado.id} value={estado.sigla} className="bg-neutral-900">
                {estado.nome}
              </option>
            ))}
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">▾</span>
        </div>

        {/* Cidade */}
        <div className="relative">
          <select
            value={cidadeSelecionada}
            onChange={(e) => setCidadeSelecionada(e.target.value)}
            disabled={!ufSelecionada || loadingCidades}
            className={`${selectClass} disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            <option value="" className="bg-neutral-900">
              {loadingCidades ? "Carregando cidades..." : "Todas as cidades"}
            </option>
            {cidades.map((cidade) => (
              <option key={cidade.id} value={cidade.nome} className="bg-neutral-900">
                {cidade.nome}
              </option>
            ))}
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">▾</span>
        </div>

      </div>

      {/* Resultados */}
      {oticasFiltradas.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {oticasFiltradas.map((otica) => (
            <OticaCard
              key={otica.id}
              image={otica.image}
              nome={otica.nome}
              endereco={otica.endereco}
              whatsapp={otica.whatsapp}
							possuiWhatsapp={otica.possuiWhatsapp}
            />
          ))}
        </div>
      ) : (
				<div className="text-center py-16">
						<p className="text-white/30 text-sm">
							{!ufSelecionada
								? "Selecione um estado para começar."
								: !cidadeSelecionada
								? "Selecione uma cidade para ver as óticas disponíveis."
								: "Nenhuma ótica encontrada para essa cidade."}
						</p>
					</div>
      )}
    </div>
  )
}