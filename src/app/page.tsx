import About from "./components/about";
import Hero from "./components/ui/hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <About />
      <Hero />
    </main>
  );
}
