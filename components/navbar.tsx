"use client"

import Image from "next/image";
import Link from "next/link";
import { MenuToggle } from "./menu-toggle";

const Navbar = () => {
  return (
    <div className="w-full">

      {/* BARRA DE NAVEGAÇÃO */}
      <div className="w-full bg-black p-2">

        {/* DESKTOP */}
        <div className="hidden sm:flex items-center justify-between px-6 lg:px-8">
          
          <div className="flex items-center">
            <Link
              href="/"
              className="
                relative px-5 py-3 text-sm font-medium tracking-wide text-white/70
                transition-all duration-200 ease-out
                hover:text-white hover:bg-white/5
                active:bg-white/10 active:scale-95
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white
                after:transition-all after:duration-200
                hover:after:w-full
              "
            >
              Hub
            </Link>

            <Link
              href="/gremio"
              className="
                relative px-5 py-3 text-sm font-medium tracking-wide text-white/70
                transition-all duration-200 ease-out
                hover:text-white hover:bg-white/5
                active:bg-white/10 active:scale-95
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0093dd]
                after:transition-all after:duration-200
                hover:after:w-full
              "
            >
              Imortal Tricolor
            </Link>

            <Link
              href="/inter"
              className="
                relative px-5 py-3 text-sm font-medium tracking-wide text-white/70
                transition-all duration-200 ease-out
                hover:text-white hover:bg-white/5
                active:bg-white/10 active:scale-95
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#e30513]
                after:transition-all after:duration-200
                hover:after:w-full
              "
            >
              Colorado
            </Link>
          </div>

          <Image
            src="/forla-branco.png"
            height={40}
            width={120}
            alt="Logo da Forla"
            className="object-contain"
          />
        </div>

        {/* MOBILE */}
        <div className="flex sm:hidden items-center justify-between px-4 py-2">
          <Image
            src="/forla-branco.png"
            height={24}
            width={60}
            alt="Logo da Forla"
            className="object-contain"
          />
          <MenuToggle />
        </div>

      </div>

    </div>
  );
};

export default Navbar;