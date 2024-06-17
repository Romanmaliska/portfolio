import Image from "next/image";

export default function Hero() {
  return (
    <Image
      className="absolute bottom-0 right-0"
      src={`/hero.png`}
      alt="Picture of the cat"
      width={320}
      height={320}
      priority
    />
  );
}
