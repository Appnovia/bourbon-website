import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video with Overlay */}
      <div className="absolute inset-0">
        <video
          src="https://res.cloudinary.com/duqllxlfn/video/upload/v1726085709/website/s7hdmk0cd9uisnc7j1om.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              &quot;Crew stories&quot;: the podcast that gives a voice to our
              seafarers
            </h1>

            {/* Description */}
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Discover the untold stories of the men and women who navigate the
              world&lsquo;s oceans, delivering essential services to offshore
              energy operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* <Button size="lg" className="text-lg px-8 py-6 h-auto">
                Listen Now
                <Play className="w-5 h-5" />
              </Button> */}
              <Button
                size="lg"
                className="text-lg px-6 py-3 h-auto bg-[#01295d]"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
