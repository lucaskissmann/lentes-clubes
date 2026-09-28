import { RxHamburgerMenu } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

export function MenuToggle() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="text-white focus:outline-none">
          <RxHamburgerMenu size={30} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-[#222F3F] border border-white/10 text-white min-w-[180px]"
      >
        <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
          <Link href="/">Início</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
          <Link href="/gremio">Imortal Tricolor</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
          <Link href="/inter">Colorado</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
          <Link href="/palmeiras">Verdão</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
          <Link href="/corinthians">Timão</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
          <Link href="https://forla.com.br/" target="_blank" rel="noopener noreferrer">
            Site da Forla
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}