"use client";

import React from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ],
    social: [
      { name: "GitHub", href: "https://github.com", icon: FiGithub },
      { name: "LinkedIn", href: "https://linkedin.com", icon: FiLinkedin },
      { name: "Twitter", href: "https://twitter.com", icon: FiTwitter },
      { name: "Email", href: "mailto:hello@cookie.dev", icon: FiMail },
    ],
  };

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link href="/" className="inline-flex items-center space-x-2 group">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {"</>"}
                </div>
                <span className="text-xl font-bold text-foreground">COOKIE</span>
              </Link>
              <p className="text-sm text-foreground/60 max-w-xs">
                Building exceptional digital experiences with modern web technologies.
                Passionate about creating elegant solutions to complex problems.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {footerLinks.navigation.map((link) => (
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
                {footerLinks.social.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition-colors"
                      aria-label={social.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
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
                © {currentYear} COOKIE. All rights reserved.
              </p>
              <p className="text-sm text-foreground/60 flex items-center gap-1">
                Made with <FiHeart className="text-red-500" size={14} /> using Next.js & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}