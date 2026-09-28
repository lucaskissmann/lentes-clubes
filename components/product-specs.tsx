import { SpecBadge } from "./spec-badge";
import { BenefitItem } from "./benefit-item";
import {
  Sun,
  Droplets,
  Shield,
  Monitor,
  Zap,
  Layers,
	Sparkles,
} from "lucide-react";
import { GiTripleScratches } from "react-icons/gi";
import { MdFingerprint } from "react-icons/md";
import { TbUvIndex } from "react-icons/tb";

interface ProductSpecsProps {
  accentColor: string;       
  roundedColor: string;       
  badgeBorderColor: string;  
  badgeBgColor: string;      
  badgeTextColor: string;    
  pillBorderColor: string;   
  pillBgColor: string;       
  pillTextColor: string;     
  residualLabel: string;     
}

const iconClass = "w-4 h-4";

const specs = [
  { icon: <Sparkles className={iconClass} />, label: "Reflexos" },
  { icon: <GiTripleScratches className={iconClass} />, label: "Arranhões" },
  { icon: <MdFingerprint className={iconClass} />, label: "Manchas" },
  { icon: <Droplets className={iconClass} />, label: "Água" },
  { icon: <TbUvIndex className={iconClass} />, label: "Raios UV" },
  { icon: <Monitor className={iconClass} />, label: "Proteção de Telas" },
];

const benefits = [
  "Altamente resistente a arranhões",
  "ID Fog - Marca d'água na lente",
  "Redução de embaçamento",
  "15 camadas de antirreflexo",
  "Muito mais transparência",
  "Lente hidrofóbica",
  "Muito mais fácil de limpar",
  "Proteção UVA e UVB",
  "Maior resistência térmica",
  "TELASAFE - Proteção contra luz de telas"
];

export function ProductSpecs({
  accentColor,
	roundedColor,
  badgeBorderColor,
  badgeBgColor,
  badgeTextColor,
  pillBorderColor,
  pillBgColor,
  pillTextColor,
  residualLabel,
}: ProductSpecsProps) {
  return (
    <div className="space-y-6">

      {/* Pill de destaque */}
      <span
        className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase ${pillBgColor} ${pillBorderColor} ${pillTextColor}`}
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: roundedColor }}
        />
        {residualLabel}
      </span>

      {/* Badges de especificação */}
      <div className="flex flex-wrap gap-x-2 gap-y-4">
        {specs.map((s) => (
          <SpecBadge
            key={s.label}
            icon={s.icon}
            label={s.label}
            borderColor={badgeBorderColor}
            bgColor={badgeBgColor}
            textColor={badgeTextColor}
          />
        ))}
      </div>

      {/* Separador */}
      <div className="border-t border-white/10 pt-4">
        <p className="text-sm sm:text-md text-white/40 uppercase tracking-widest mb-3">Benefícios</p>
        <ul className="space-y-2.5">
          {benefits.map((b) => (
            <BenefitItem key={b} label={b} checkColor={accentColor} />
          ))}
        </ul>
      </div>

    </div>
  );
}