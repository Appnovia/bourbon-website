import ServiceCard from "./serviceCard";

const Services = () => {
  const services = [
    {
      image: "/assets/bour.jpeg",
      title: "Marine & Logistics",
      description:
        "Comprehensive offshore support vessel services including supply, anchor handling, and platform support for the global energy industry.",
      link: "#marine",
    },
    {
      image: "/assets/bour-2.jpeg",
      title: "Subsea Operations",
      description:
        "Advanced subsea construction, inspection, and maintenance services utilizing state-of-the-art ROVs and specialized equipment.",
      link: "#subsea",
    },
    {
      image: "/assets/bour-3.jpeg",
      title: "Passenger Mobility",
      description:
        "Safe and efficient crew transfer services connecting offshore installations with onshore facilities across the globe.",
      link: "#passenger",
    },
  ];

  return (
    <section className="py-20 b">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence in offshore marine services with safety,
            innovation, and reliability at our core.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
