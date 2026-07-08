import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <Image
          width={1000}
          height={1000}
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-[var(--transition-smooth)]">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <Button
          variant="ghost"
          className="group-hover:text-primary transition-[var(--transition-smooth)] px-0"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
