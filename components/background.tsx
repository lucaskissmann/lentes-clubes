type BackgroundVariant = "grenal" | "gremio" | "inter" | "palmeiras" | "corinthians";

interface BackgroundProps {
  variant?: BackgroundVariant;
}

export default function Background({ variant = "grenal" }: BackgroundProps) {
  return (
    <>
      {/* Base escura */}
      <div className="fixed inset-0 -z-10 bg-[#0a0a0a]" />

      {variant === "grenal" && (
        <>
          {/* Luz azul - esquerda */}
          <div className="fixed top-20 left-[-100px] w-[400px] h-[400px] bg-blue-500 blur-[150px] opacity-30 mix-blend-screen pointer-events-none -z-10" />
          {/* Luz vermelha - direita */}
          <div className="fixed bottom-20 right-[-100px] w-[400px] h-[400px] bg-red-600 blur-[150px] opacity-30 mix-blend-screen pointer-events-none -z-10" />
          {/* Linha central branca */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[60%] bg-white/5 blur-[8px] pointer-events-none -z-10" />
        </>
      )}

      {variant === "gremio" && (
        <>
          {/* Luz azul inferior esquerda (mesh) */}
          <div className="fixed bottom-[-80px] left-[-80px] w-[600px] h-[500px] bg-[#0093dd] blur-[180px] opacity-25 pointer-events-none -z-10" />
          {/* Luz azul superior direita */}
          <div className="fixed top-[-60px] right-[-60px] w-[400px] h-[400px] bg-[#0093dd] blur-[160px] opacity-20 pointer-events-none -z-10" />
          {/* Luz azul escura centro-baixo */}
          <div className="fixed bottom-[10%] right-[20%] w-[300px] h-[300px] bg-blue-900 blur-[120px] opacity-30 pointer-events-none -z-10" />
        </>
      )}

      {variant === "inter" && (
        <>
          {/* Luz vermelha inferior esquerda (igual ao mockup) */}
          <div className="fixed bottom-[-80px] left-[-80px] w-[600px] h-[500px] bg-[#e30513] blur-[180px] opacity-30 pointer-events-none -z-10" />
          {/* Luz vermelha/laranja inferior direita */}
          <div className="fixed bottom-[-40px] right-[-40px] w-[500px] h-[400px] bg-[#c0392b] blur-[160px] opacity-25 pointer-events-none -z-10" />
          {/* Luz vermelha escura superior direita */}
          <div className="fixed top-[-60px] right-[-60px] w-[400px] h-[350px] bg-[#8B0000] blur-[150px] opacity-20 pointer-events-none -z-10" />
          {/* Tom quente centro-baixo para o bege/pêssego da imagem */}
          <div className="fixed bottom-[5%] right-[10%] w-[350px] h-[250px] bg-[#c0634a] blur-[140px] opacity-20 pointer-events-none -z-10" />
        </>
      )}

      {variant === "palmeiras" && (
        <>
          <div className="fixed bottom-[-80px] left-[-80px] w-[600px] h-[500px] bg-[#006537] blur-[180px] opacity-25 pointer-events-none -z-10" />
          <div className="fixed top-[-60px] right-[-60px] w-[400px] h-[400px] bg-[#006537] blur-[160px] opacity-20 pointer-events-none -z-10" />
          <div className="fixed bottom-[10%] right-[20%] w-[300px] h-[300px] bg-green-900 blur-[120px] opacity-30 pointer-events-none -z-10" />
        </>
      )}

      {variant === "corinthians" && (
        <>
          <div className="fixed bottom-[-80px] left-[-80px] w-[600px] h-[500px] bg-zinc-500 blur-[180px] opacity-25 pointer-events-none -z-10" />
          <div className="fixed top-[-60px] right-[-60px] w-[400px] h-[400px] bg-zinc-500 blur-[160px] opacity-20 pointer-events-none -z-10" />
          <div className="fixed bottom-[10%] right-[20%] w-[300px] h-[300px] bg-zinc-400 blur-[120px] opacity-30 pointer-events-none -z-10" />
        </>
      )}
    </>
  );
}