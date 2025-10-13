import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Bourbon's reliability and professionalism have been instrumental in our offshore operations. Their commitment to safety and on-time delivery is unmatched in the industry.",
      author: "Sarah Mitchell",
      role: "Operations Director",
      company: "Global Energy Corp",
      rating: 5,
    },
    {
      quote:
        "The technical expertise and innovative solutions provided by Bourbon have significantly improved our operational efficiency. They're truly partners in our success.",
      author: "James Chen",
      role: "Project Manager",
      company: "Offshore Solutions Ltd",
      rating: 5,
    },
    {
      quote:
        "Working with Bourbon has been exceptional. Their crew's professionalism and the quality of their vessels consistently exceed our expectations on every project.",
      author: "Maria Rodriguez",
      role: "Supply Chain Director",
      company: "Atlantic Energy Partners",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it—hear what our clients have to
            say about their experience with Bourbon.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-8 bg-card rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-500 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-[#01295d]/10 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-[#01295d]" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-[#cc0000]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-sm text-[#01295d] font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
