import { motion } from "motion/react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
        <a href="#top" className="label-xs hover:text-accent transition-colors duration-300">
          Lana Vujić<span className="text-accent">.</span>
        </a>
        <ul className="flex items-center gap-6 md:gap-10">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="link-underline label-xs text-muted-foreground transition-colors duration-300 hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
