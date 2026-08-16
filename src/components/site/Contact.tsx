import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  return (
    <section id="contact" className="px-6 pb-24 md:px-10 md:pb-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
        className="mx-auto max-w-[1400px] border-t border-border pt-16 md:pt-24"
      >
        <h2 className="display-xl text-[clamp(2.5rem,8vw,7rem)]">
          Have a project
          <br />
          in mind?
        </h2>
        <p className="mt-8 text-[clamp(1.25rem,2.4vw,2rem)] tracking-tight text-muted-foreground">
          Let's make something useful.
        </p>

        <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
          <a
            href="mailto:hello@lana.design"
            className="link-underline text-lg tracking-tight transition-colors duration-300 hover:text-accent md:text-2xl"
          >
            hello@lana.design
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="link-underline label-xs text-muted-foreground transition-colors duration-300 hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="link-underline label-xs text-muted-foreground transition-colors duration-300 hover:text-accent"
          >
            Instagram
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="px-6 pb-10 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="label-xs">Lana Vujić</p>
        <p className="label-xs text-muted-foreground">© {new Date().getFullYear()} — All rights reserved</p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="link-underline label-xs text-muted-foreground transition-colors duration-300 hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@lana.design"
            className="link-underline label-xs text-muted-foreground transition-colors duration-300 hover:text-accent"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
