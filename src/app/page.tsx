import { About } from "./components/about";
import { Contact } from "./components/contacts";
import { Footer } from "./components/footer";
import { GlobalApproach } from "./components/global-approach";
import { Hero } from "./components/hero";
import { Innovation } from "./components/innovation";
import { Services } from "./components/services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Innovation />
      <GlobalApproach />
      <Contact />
      <Footer />
    </main>
  );
}
