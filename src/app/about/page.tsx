import Image from "next/image";

export default function About() {
  return (
    <main className="p-12 sm:p-16 mx-auto">
      <h1 className="pb-8 sm:pb-12 text-2xl sm:text-3xl font-semibold leading-10 tracking-wide text-black dark:text-white">
        About Me
      </h1>
      <section className="flex gap-8">
        <div>
          <p className="pb-4 sm:pb-6 leading-normal text-lg text-black dark:text-white font-medium">
            Hello, world! I&apos;m a front-end developer who speaks JavaScript
            as fluently as my native language. I craft interactive web
            experiences with the power of React, turning complex problems into
            beautiful, simple code.
          </p>
          <p className="pb-4 sm:pb-6 leading-normal text-lg text-black dark:text-white font-medium">
            When I&apos;m not in front of a screen, you&apos;ll find me in the
            great outdoors, savoring a cup of coffee and admiring the beauty of
            nature.
          </p>
          <p className="pb-4 sm:pb-6 leading-normal text-lg  text-black dark:text-white font-medium">
            So whether you&apos;re here for some React wizardry or just to share
            a virtual cup of coffee, I&apos;m glad you stopped by. Welcome to my
            corner of the internet!
          </p>
        </div>
        <Image
          className="hidden sm:block"
          src="/programmer.jpg"
          alt="hero"
          width={320}
          height={320}
        />
      </section>
    </main>
  );
}
