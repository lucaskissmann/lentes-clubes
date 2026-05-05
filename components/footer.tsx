import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A0A0A] px-8 lg:px-24 py-6 flex items-center justify-end">
		<Image
			src="/forla-branco.png"
			alt="Forla & Brum"
			width={120}
			height={40}
			className="object-contain w-[80px] md:w-[120px]"
		/>
    </footer>
  );
};

export default Footer;