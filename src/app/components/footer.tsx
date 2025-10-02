export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-background flex items-center justify-center">
                <div className="w-6 h-1 bg-foreground" />
              </div>
              <span className="font-sans text-lg font-semibold tracking-tight">
                ENERGY SOLUTIONS
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Leading the future of sustainable energy with innovation and
              excellence.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Exploration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Production
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Refining
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Renewable Energy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Investors
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Connect</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/70">
          <p>© 2025 Energy Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
