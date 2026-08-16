import { motion } from "motion/react";
import portrait from "@/assets/portrait.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const skills = ["UX Research", "Interaction Design", "Design Systems", "Prototyping", "UI & Visual Design", "Accessibility"];
const tools = ["Figma", "Framer", "Rive", "Notion", "Webflow"];

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-10 md:py-40">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[1400px]"
      >
        <div className="flex items-baseline justify-between border-b border-border pb-5">
          <h2 className="label-xs">About</h2>
          <span className="label-xs text-muted-foreground">Berlin, DE</span>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <img
              src={portrait}
              alt="Portrait of Lana, UX/UI designer"
              loading="lazy"
              width={912}
              height={1104}
              className="w-full max-w-xs object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>

          <div className="md:col-span-8">
            <p className="display-xl text-[clamp(1.6rem,3.2vw,2.75rem)]">
              I spend my days making complicated things feel obvious — and my evenings
              rearranging type until it breathes.
            </p>
            <p className="mt-8 max-w-xl leading-relaxed text-muted-foreground">
              Six years designing products across fintech, wellness and early-stage software.
              I like working close to engineering, testing early with real people, and
              defending the small details that make an interface feel considered.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-3">
              <div>
                <h3 className="label-xs text-muted-foreground">Skills</h3>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="label-xs text-muted-foreground">Tools</h3>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="label-xs text-muted-foreground">Elsewhere</h3>
                <ul className="mt-4 space-y-1.5 text-sm">
                  <li>
                    <a
                      href="mailto:hello@lana.design"
                      className="link-underline transition-colors duration-300 hover:text-accent"
                    >
                      hello@lana.design
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline transition-colors duration-300 hover:text-accent"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
