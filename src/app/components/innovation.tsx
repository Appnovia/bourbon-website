import Image from "next/image";

export function Innovation() {
  return (
    <section
      id="innovation"
      className="py-24 lg:py-32 px-6 lg:px-12 bg-primary text-primary-foreground"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm font-medium mb-4 tracking-wider uppercase opacity-90">
            Innovation
          </p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-balance">
            Pioneering sustainable solutions
          </h2>
        </div>

        <div className="relative h-[400px] lg:h-[600px] mb-16 overflow-hidden">
          <Image
            width={1000}
            height={1000}
            src="/assets/enewable-energy.jpeg"
            alt="Innovation"
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl lg:text-2xl font-light leading-relaxed text-pretty opacity-95">
            We&apos;re investing billions in clean energy technologies, carbon
            capture systems, and hydrogen production facilities. Our goal is to
            achieve net-zero emissions by 2050 while continuing to meet global
            energy demands.
          </p>
        </div>
      </div>
    </section>
  );
}
