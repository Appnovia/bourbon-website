import CTABanner from "./components/ctaBanner";
import Excellence from "./components/excelence";
import Fleet from "./components/fleet";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import News from "./components/news";
import Services from "./components/services";
import Stats from "./components/stats";
import Testimonials from "./components/testimonies";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Stats />
      <Excellence />
      <Fleet />
      <News />
      <Testimonials />
      {/* <CTABanner /> */}
      <Footer />
    </main>
  );
}
