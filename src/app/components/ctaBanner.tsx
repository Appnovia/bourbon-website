import { ArrowRight, Mail } from "lucide-react";
import { Button } from "./ui/button";

const CTABanner = () => {
  return (
    <section className="py-20 bg-[#01295d] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Set Sail with Excellence?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Partner with the world&apos;s leading offshore marine services
            provider. Let&apos;s discuss how we can support your next project
            with reliability, safety, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90 shadow-[var(--shadow-strong)]"
            >
              Get in Touch
              <Mail className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            >
              Download Brochure
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
