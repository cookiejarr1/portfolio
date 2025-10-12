import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import Profile from "./Profile";

export default function Contact() {
  const socialLinks = [
    { name: "GitHub", icon: FiGithub, href: "https://github.com" },
    { name: "LinkedIn", icon: FiLinkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: FiTwitter, href: "https://twitter.com" },
    { name: "Email", icon: FiMail, href: "mailto:hello@cookie.dev" },
  ];

  return (
    <section id="contact" className="mx-0 md:mx-14 px-4 md:px-14 py-14">
      <div className="flex justify-center py-8 px-8 mx-auto border-none bg-background/60 dark:bg-slate-700/20 max-w-[720px]">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <span className="overflow-hidden inline-block relative col-span-2 md:col-span-4 h-52 rounded-xl">
            <Profile />
          </span>
          <div className="flex flex-col col-span-5 md:col-span-7 pl-4">
            <div className="flex justify-between">
              <div className="flex flex-col gap-0">
                <div className="pb-3 font-bold text-foreground/100 text-3xl">
                  Want to Work Together?
                </div>
                <p className="text-sm text-foreground/70 mb-4">
                  Let&apos;s connect and discuss how we can collaborate on your
                  next project.
                </p>
                <Link href="/contact">
                  <Button
                    color="primary"
                    className="text-foreground font-medium w-full"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
            <Divider className="my-4" />
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => {
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
          </div>
        </div>
      </div>
    </section>
  );
}
