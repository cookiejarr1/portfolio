import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { portfolio } from "../data/portfolio";
import { routeLinks } from "../data/routes";
import { footerLinks } from "../data/socials";
import Socials from "./navigation/Socials";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 group"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {"</>"}
                </div>
                <span className="text-xl font-bold text-foreground">
                  {portfolio.username}
                </span>
              </Link>
              <p className="text-sm text-foreground/60 max-w-xs">
                {portfolio.footer}
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 px-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {routeLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Connect
              </h3>
              <div className="flex space-x-4">
                <Socials socialsLinks={footerLinks} />
              </div>
              <p className="text-sm text-foreground/60">
                Let&apos;s build something amazing together!
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border/40">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-foreground/60">
                © {currentYear} {portfolio.username}. All rights reserved.
              </p>
              <p className="text-sm text-foreground/60 flex items-center gap-1">
                Made with <FiHeart className="text-red-500" size={14} /> using
                Next.js & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
