import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src="/assets/control-room.jpeg"
              alt="Control room"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              About Us
            </p>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 text-balance leading-[1.15]">
              Driving innovation in the energy sector
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-pretty">
              <p className="text-lg">
                For over three decades, we&apos;ve been at the forefront of
                energy innovation, combining traditional expertise with
                cutting-edge technology to meet the world&apos;s growing energy
                demands.
              </p>
              <p>
                Our commitment to sustainability and operational excellence has
                positioned us as a trusted partner for governments and
                corporations worldwide. We invest heavily in research and
                development to ensure our operations remain efficient, safe, and
                environmentally responsible.
              </p>
              <p>
                With operations spanning six continents and a workforce of over
                50,000 dedicated professionals, we&apos;re not just extracting
                resources—we&apos;re building the foundation for a sustainable
                energy future.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <div className="text-4xl font-light text-primary mb-2">
                  50K+
                </div>
                <div className="text-sm text-muted-foreground">Employees</div>
              </div>
              <div>
                <div className="text-4xl font-light text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-4xl font-light text-primary mb-2">60+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
