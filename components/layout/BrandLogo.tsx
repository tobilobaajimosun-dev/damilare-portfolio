import Image from "next/image";

export function BrandLogo() {
  return (
    <Image
      src="/logo.png"
      alt="Damilare Oshokoya"
      width={90}
      height={38}
      className="object-contain"
      priority
    />
  );
}
