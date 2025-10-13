import { Anchor, Ship, Wind } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Fleet = () => {
  const vessels = [
    {
      image: "/assets/fleet-ahts.jpg",
      icon: Anchor,
      type: "AHTS",
      name: "Anchor Handling Tug Supply",
      specs: "15,000+ BHP | 200+ Vessels",
      description:
        "Powerful vessels designed for anchor handling, towing operations, and platform positioning in the most demanding offshore environments.",
    },
    {
      image: "/assets/ship.jpg",
      icon: Ship,
      type: "PSV",
      name: "Platform Supply Vessels",
      specs: "4,000+ DWT | 150+ Vessels",
      description:
        "Reliable supply chain solutions delivering cargo, equipment, and materials to offshore platforms with precision and efficiency.",
    },
    {
      image: "/assets/fleet-wind.jpg",
      icon: Wind,
      type: "Wind Farm",
      name: "Renewable Energy Support",
      specs: "SOV & CTV | 50+ Vessels",
      description:
        "Specialized vessels supporting the renewable energy sector with crew transfer and service operation capabilities for offshore wind farms.",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Fleet
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse fleet of modern vessels equipped to handle any offshore
            challenge with reliability and precision.
          </p>
        </div>

        {/* Fleet Cards */}
        <div className="space-y-16">
          {vessels.map((vessel, index) => (
            <div
              key={vessel.type}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-strong)]">
                  <Image
                    width={1000}
                    height={1000}
                    src={vessel.image}
                    alt={vessel.name}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />

                  {/* Type Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                    <vessel.icon className="w-5 h-5 text-primary" />
                    <span className="font-bold text-primary">
                      {vessel.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {vessel.name}
                  </h3>
                  <p className="text-primary font-semibold text-lg">
                    {vessel.specs}
                  </p>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {vessel.description}
                </p>
                <Button variant="default" size="lg" className="bg-[#01295d]">
                  Explore Fleet Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
