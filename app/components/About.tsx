import Link from "next/link";
import { jobTitles } from "../data/jobs";
import { portfolio } from "../data/portfolio";
import RotatingText from "./react-bits/RotatingText";
import Socials from "./navigation/Socials";
import { socialLinks } from "../data/socials";
import PixelBlast from "./react-bits/PixelBlast";
import Profile from "./Profile";
import * as motion from "motion/react-client";

export default function About() {
  return (
    <section id="about" className="relative z-0 w-full h-screen">
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#B19EEF"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        speed={0.7}
        edgeFade={0.2}
        transparent
        className="z-0"
      >
        <div className="relative w-full px-28 pb-32 flex justify-between items-center bg-transparent">
          <div className="flex flex-col justify-start items-start text-white">
            <motion.p
              initial={{ opacity: 0, x: -60 }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.2,
                scale: { type: "spring", stiffness: 10, delay: 0.3 },
              }}
              className="pointer-events-auto z-20 text-xs inline-flex gap-1 text-foreground/80"
            >
              <span>If you are reading this, well congrats</span>
              <span className="underline underline-offset-2 decoration-dotted">
                <Link href={"/contact"}>contact me</Link>
              </span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.2,
                scale: { type: "spring", stiffness: 10, delay: 0.3 },
              }}
              className="z-10 text-[6rem] leading-snug"
            >{`I'm ${portfolio.name}`}</motion.p>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.2,
                scale: { type: "spring", stiffness: 10, delay: 0.6 },
              }}
              className="text-4xl leading-tight"
            >
              <RotatingText
                texts={jobTitles}
                mainClassName="px-0 overflow-hidden py-0.5 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.008}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 text-sky-600"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3200}
              />
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.2,
                scale: { type: "spring", stiffness: 10, delay: 0.3 },
              }}
              className="text-base whitespace-pre mt-5 mb-8 text-foreground/70"
            >
              {portfolio.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                scale: { type: "spring", stiffness: 10, delay: 1.2 },
              }}
            >
              <Socials socialsLinks={socialLinks} />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 3.2,
              scale: { type: "spring", stiffness: 10, delay: 0.8 },
            }}
          >
            <Profile className="w-[28rem] h-[28rem] rounded-full overflow-hidden inline-block relative" />
          </motion.div>
        </div>
      </PixelBlast>
    </section>
  );
}
