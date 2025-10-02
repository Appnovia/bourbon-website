import Image from "next/image";

const approaches = [
  {
    image: "/assets/business-handshake.jpeg",
    title: "Strategic Partnerships",
    description:
      "Collaborating with industry leaders and governments to drive sustainable growth.",
  },
  {
    image: "/assets/technology.jpeg",
    title: "Digital Transformation",
    description:
      "Leveraging AI and IoT to optimize operations and reduce environmental impact.",
  },
  {
    image: "/assets/environmental-2.jpeg",
    title: "Environmental Stewardship",
    description:
      "Implementing rigorous standards to protect ecosystems and communities.",
  },
];

export function GlobalApproach() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 text-balance">
            A global approach for
            <br />
            <span className="font-medium">a sustainable future</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="group">
              <div className="relative h-[400px] mb-6 overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  src={approach.image || "/placeholder.svg"}
                  alt={approach.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              </div>
              <h3 className="text-2xl font-medium mb-3 text-balance">
                {approach.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
