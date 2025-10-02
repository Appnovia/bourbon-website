import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Exploration & Production",
    description:
      "Advanced seismic technology and drilling solutions for optimal resource extraction with minimal environmental impact.",
  },
  {
    number: "02",
    title: "Refining & Processing",
    description:
      "State-of-the-art refining facilities that transform crude oil into high-quality products with maximum efficiency.",
  },
  {
    number: "03",
    title: "Sustainable Energy",
    description:
      "Pioneering renewable energy integration and carbon capture technologies for a cleaner future.",
  },
  {
    number: "04",
    title: "Infrastructure & Logistics",
    description:
      "Comprehensive pipeline networks and transportation solutions ensuring safe, reliable energy delivery worldwide.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary/30"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 lg:mb-24">
          <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Our Expertise
          </p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-balance">
            Comprehensive energy solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-card p-8 lg:p-10 hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="text-6xl lg:text-7xl font-light text-primary/20 mb-6">
                {service.number}
              </div>
              <h3 className="text-2xl lg:text-3xl font-medium mb-4 text-balance">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                {service.description}
              </p>
              <button className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
