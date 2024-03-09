import Image from "next/image";
import nextConfig from "../../../next.config.mjs";

export default function Hero() {
  return (
    <Image
      className="ml-auto"
      src={`${nextConfig.basePath || ""}/hero.png`}
      alt="Picture of the cat"
      width={320}
      height={320}
      priority
    />
  );
}
