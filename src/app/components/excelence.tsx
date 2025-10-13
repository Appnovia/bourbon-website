import { Shield, Anchor, Lightbulb, Award } from "lucide-react";

const Excellence = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Zero compromise on safety standards with comprehensive training programs and cutting-edge safety protocols for all operations.",
    },
    {
      icon: Anchor,
      title: "Proven Expertise",
      description:
        "Over 40 years of maritime excellence delivering reliable offshore support services across the world's most challenging environments.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description:
        "Investing in the latest technology and sustainable solutions to lead the industry into a cleaner, more efficient future.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "ISO certified operations with rigorous quality control ensuring exceptional service delivery on every project.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Bourbon
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leading the offshore marine industry with unwavering commitment to
            excellence, safety, and innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-card rounded-xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-500 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-ocean rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-[var(--transition-smooth)]">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Excellence;
