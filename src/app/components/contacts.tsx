import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary/30"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Get In Touch
            </p>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 text-balance leading-[1.15]">
              Let&apos;s discuss your
              <br />
              <span className="font-medium">energy needs</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-pretty">
              Whether you&apos;re looking for partnership opportunities,
              technical solutions, or want to learn more about our services, our
              team is ready to help.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Global Headquarters</h3>
                <p className="text-muted-foreground">
                  1000 Energy Plaza, Houston, TX 77002
                  <br />
                  United States
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Contact</h3>
                <p className="text-muted-foreground">
                  +1 (555) 123-4567
                  <br />
                  info@energysolutions.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 lg:p-10 border border-border">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2"
                  >
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2"
                  >
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input id="email" type="email" placeholder="john@company.com" />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2"
                >
                  Company
                </label>
                <Input id="company" placeholder="Your company" />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                />
              </div>

              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
