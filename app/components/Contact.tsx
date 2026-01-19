import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";
import Profile from "./Profile";
import { socialLinks } from "../data/socials";
import Socials from "./navigation/Socials";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-0 md:mx-14 px-4 md:px-14 py-14">
      <div className="flex justify-center py-8 px-8 mx-auto border-none bg-background/60 dark:bg-slate-700/20 max-w-[720px] rounded-2xl">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <span className="overflow-hidden inline-block relative col-span-2 md:col-span-4 h-52 rounded-xl">
            <Profile />
          </span>
          <div className="flex flex-col col-span-5 md:col-span-7 pl-4">
            <div className="flex justify-between">
              <div className="flex flex-col gap-0">
                <div className="pb-3 font-medium text-foreground/100 text-3xl">
                  Want to Work Together?
                </div>
                <p className="text-xs text-foreground/70 mb-4">
                  Let&apos;s connect and discuss how we can collaborate on your next project.
                </p>
                <Link href="/contact">
                  <Button color="primary" className="text-foreground font-normal w-full">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
            <Divider className="my-4" />
            <Socials socialsLinks={socialLinks} />
          </div>
        </div>
      </div>
    </section>
  );
}
