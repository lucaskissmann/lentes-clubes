import Link from "next/link";

export default function PillNav({ active }: { active: string }) {
  const items = [
    { id: "hub",    label: "Hub",   href: "/" },
    { id: "inter",  label: "Inter", href: "/inter" },
    { id: "gremio", label: "Grêmio", href: "/gremio" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-2 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-[0_4px_32px_rgba(0,0,0,0.6)]">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={`
            px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide
            transition-all duration-200
            ${
              active === item.id
                ? "bg-zinc-300 text-black shadow-sm"
                : "text-white/50 hover:text-white hover:bg-white/10"
            }
          `}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}