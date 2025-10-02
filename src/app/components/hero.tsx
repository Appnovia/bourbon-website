import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 lg:px-12 py-6">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-foreground flex items-center justify-center">
              <div className="w-6 h-1 bg-background" />
            </div>
            <span className="font-sans text-lg font-semibold tracking-tight">
              ENERGY SOLUTIONS
            </span>
          </div>

          <button className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>

          <div className="hidden lg:flex items-center gap-12">
            <a
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#innovation"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Innovation
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Button variant="default" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance mb-8 leading-[1.1]">
            Powering tomorrow&apos;s
            <br />
            <span className="font-medium">energy landscape</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty leading-relaxed">
            Leading the future of sustainable energy solutions with cutting-edge
            technology, unmatched expertise, and a commitment to environmental
            excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 h-14 group">
              Explore Our Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 h-14 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[50vh] lg:h-[60vh] w-full overflow-hidden">
        <Image
          width={1000}
          height={1000}
          src="/assets/energy-facility.jpeg"
          alt="Energy facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
    </section>
  );
}
