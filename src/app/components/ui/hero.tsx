import Image from "next/image";

export default function Hero() {
  return (
    <Image
      src={`/hero.png`}
      alt="Picture of the cat"
      width={240}
      height={240}
      priority
    />
  );
}
