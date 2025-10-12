import { routeLinks } from "@/app/data/routes";
import { socialLinks } from "@/app/data/socials";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ThemeSwitcher from "../ThemeSwitcher";
import Socials from "./Socials";
import PageRoutes from "./PageRoutes";
import { portfolio } from "@/app/data/portfolio";

export default function NavigationBar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                {"</>"}
              </div>
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:block">
              {portfolio.username}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <PageRoutes routes={routeLinks} />
          </div>

          {/* Right Side - Social Links & Theme Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <Socials socialsLinks={socialLinks} />
            <div className="h-6 w-px bg-border/40" />
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Button & Theme Switcher */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <div className="flex flex-col space-y-2">
              <PageRoutes routes={routeLinks} />
              <div className="h-px bg-border/40 my-2" />
              <div className="flex items-center space-x-4 px-4 py-2">
                <Socials socialsLinks={socialLinks} />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
