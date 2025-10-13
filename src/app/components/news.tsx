import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const News = () => {
  const articles = [
    {
      image: "/assets/news-image.png",
      category: "People & Culture",
      date: "March 15, 2025",
      title: "Celebrating Excellence: Our Crew Members' Stories",
      excerpt:
        "Meet the dedicated professionals behind our success as we highlight their achievements and commitment to maritime excellence.",
      featured: true,
    },
    {
      image: "/assets/marine-logistics.jpg",
      category: "Operations",
      date: "March 10, 2025",
      title: "Expanding Our Presence in the Gulf of Mexico",
      excerpt:
        "New contract wins strengthen our position as the leading offshore service provider in key energy markets.",
    },
    {
      image: "/assets/subsea-operations.jpg",
      category: "Innovation",
      date: "March 5, 2025",
      title: "Pioneering Subsea Technology for Deeper Waters",
      excerpt:
        "Investment in next-generation ROV systems enables operations at unprecedented depths with enhanced safety.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12 animate-fade-in">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Latest News
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with our latest achievements and industry insights.
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex">
            View All News
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <div className="lg:row-span-2 group animate-fade-in">
            <div className="relative h-full bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-all duration-500">
              <div className="relative h-[400px] lg:h-full overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-[#cc0000] rounded-full text-sm font-medium">
                      {articles[0].category}
                    </span>
                    <span className="flex items-center text-sm text-white/90">
                      <Calendar className="w-4 h-4 mr-2" />
                      {articles[0].date}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-accent transition-[var(--transition-smooth)]">
                    {articles[0].title}
                  </h3>
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  <Button
                    variant="secondary"
                    className="group-hover:bg-accent group-hover:text-[#cc0000] transition-[var(--transition-smooth)] cursor-pointer"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Articles */}
          {articles.slice(1).map((article, index) => (
            <div
              key={article.title}
              className="group bg-card rounded-xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-500 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-4 text-sm">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {article.category}
                  </span>
                  <span className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-[var(--transition-smooth)]">
                  {article.title}
                </h3>
                <p className="text-muted-foreground">{article.excerpt}</p>
                <Button className="px-4 bg-[#01295d]  transition-[var(--transition-smooth)] cursor-pointer">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Button variant="default" className="w-full bg-[#01295d]">
            View All News
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
