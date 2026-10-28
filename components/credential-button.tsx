import { Store } from "lucide-react";

interface CredentialButtonProps {
  borderColor: string;
  bgColor: string;
  textColor: string;
  breakOnSmall?: boolean;
}

export function CredentialButton({
  borderColor,
  bgColor,
  textColor,
  breakOnSmall = false,
}: CredentialButtonProps) {
  return (
    <a
      href="https://wa.me/554891337893"
      target="_blank"
      rel="noopener noreferrer"
      className={`shrink-0 cursor-pointer inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border text-[11px] min-[425px]:text-xs sm:text-sm font-semibold transition hover:brightness-125 ${
        breakOnSmall
          ? "max-[380px]:rounded-2xl max-[380px]:py-1.5 max-[380px]:text-center"
          : "whitespace-nowrap"
      } ${borderColor} ${bgColor} ${textColor}`}
    >
      <Store className="w-3 h-3 min-[425px]:w-3.5 min-[425px]:h-3.5 sm:w-4 sm:h-4 shrink-0" />
      <span className={breakOnSmall ? "min-[380px]:whitespace-nowrap" : ""}>
        Seja uma loja{" "}
        {breakOnSmall && <br className="min-[380px]:hidden" />}
        credenciada
      </span>
    </a>
  );
}