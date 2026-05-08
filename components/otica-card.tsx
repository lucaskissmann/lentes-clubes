import Image from "next/image";

interface OticaCardProps {
  image: string;
  nome: string;
  endereco: string;
  whatsapp: string;
  possuiWhatsapp: boolean;
}

export function OticaCard({
  image,
  nome,
  endereco,
  whatsapp,
  possuiWhatsapp,
}: OticaCardProps) {
  const whatsappUrl = `https://wa.me/${whatsapp.replace(/\D/g, "")}`;

  const telefoneFormatado = whatsapp
    .replace(/\D/g, "")
    .replace(/^55/, "")
    .replace(/^(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");

  return (
    <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/8 group flex flex-col">
      {/* Imagem */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={image}
          alt={`Foto da ótica ${nome}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="font-bold text-white text-base leading-snug">
          {nome}
        </h3>

        {/* Endereço */}
        <p className="text-white/50 text-xs leading-relaxed flex items-start gap-2">
          <svg
            className="w-3.5 h-3.5 mt-0.5 shrink-0 text-white/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21c-4.418-4.418-7-7.582-7-10a7 7 0 1114 0c0 2.418-2.582 5.582-7 10z"
            />
            <circle
              cx="12"
              cy="11"
              r="2.5"
              fill="currentColor"
              stroke="none"
            />
          </svg>

          <span>{endereco}</span>
        </p>

        {/* Telefone */}
        <p className="text-white/60 text-xs leading-relaxed flex items-center gap-2">
          <svg
            className="w-3.5 h-3.5 shrink-0 text-white/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.57 2.28a2 2 0 01-.45 1.91l-1.2 1.2a16 16 0 006.75 6.75l1.2-1.2a2 2 0 011.91-.45l2.28.57A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a1 1 0 011-1h1z"
            />
          </svg>

          {telefoneFormatado}
        </p>

        {/* Botão WhatsApp */}
        {possuiWhatsapp && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 bg-[#25D366]/15 hover:bg-[#25D366]/30 border border-[#25D366]/30 hover:border-[#25D366]/60 text-[#25D366] text-xs font-semibold tracking-wide transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>

            Falar no WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}