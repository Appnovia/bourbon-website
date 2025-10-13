import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    Services: [
      "Marine & Logistics",
      "Subsea Operations",
      "Passenger Mobility",
      "Fleet Overview",
    ],
    Company: ["About Us", "Leadership", "Locations", "Careers"],
    Resources: ["News & Media", "Sustainability", "Safety", "Innovation"],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Compliance",
    ],
  };

  return (
    <footer className="bg-[#01295d] text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold">BOURBON</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Leading provider of marine services to the offshore oil and gas
              industry worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/bourbonoffshore/"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-[var(--transition-smooth)]"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-[var(--transition-smooth)]"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/bourbonrbonoffshore/"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-[var(--transition-smooth)]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-[var(--transition-smooth)]"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-[var(--transition-smooth)]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-white/70 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Head Office</h4>
                <p className="text-white/70 text-sm">
                  50, Rue de Forbin - CS 60703 -13235
                  <br />
                  Marseille Cedex 02 - France
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-white/70 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-white/70 text-sm">+33 (0)4 91 13 08 00</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-white/70 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-white/70 text-sm">
                  contact@bourbon-offshore.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm">
            © 2025 Bourbon Offshore. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              href="#"
              className="text-white/60 hover:text-white transition-[var(--transition-smooth)]"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-white transition-[var(--transition-smooth)]"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-white transition-[var(--transition-smooth)]"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
