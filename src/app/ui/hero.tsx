import Image from "next/image";

export default function Hero() {
  return (
    <Image
      className="ml-auto"
      src={`/hero.png`}
      alt="Picture of the cat"
      width={320}
      height={320}
      priority
    />
  );
}
