import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 18, mass: 0.6 });

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x.set(e.clientX - r.left);
      y.set(e.clientY - r.top);
      setActive(true);
    };
    const onLeave = () => setActive(false);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced, x, y]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden px-6 pt-24 pb-24 md:px-10 md:pt-40 md:pb-40"
    >
      {/* playful cursor-following blob */}
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.4 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-0 left-0 z-0 hidden md:block"
      >
        <div className="-translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-accent/15 blur-2xl" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.p
          custom={0}
          variants={rise}
          initial="hidden"
          animate="show"
          className="label-xs text-muted-foreground"
        >
          UX / UI Designer — Berlin
        </motion.p>

        <h1 className="display-xl mt-10 max-w-[16ch] text-[clamp(2.75rem,9vw,8rem)]">
          <motion.span custom={1} variants={rise} initial="hidden" animate="show" className="block">
            Hi, I'm Lana
            <motion.span
              aria-hidden
              animate={reduced ? {} : { rotate: [0, 14, -6, 0] }}
              transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
              className="ml-3 inline-block text-accent"
            >
              *
            </motion.span>
          </motion.span>
          <motion.span custom={2} variants={rise} initial="hidden" animate="show" className="block">
            a designer of
          </motion.span>
          <motion.span custom={3} variants={rise} initial="hidden" animate="show" className="block">
            simple, useful,
          </motion.span>
          <motion.span custom={4} variants={rise} initial="hidden" animate="show" className="block">
            human things.
          </motion.span>
        </h1>

        <motion.div
          custom={5}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-14 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            I design digital experiences for products that people actually keep using — from
            first sketch to the last pixel of the shipped interface.
          </p>
          <a
            href="#work"
            className="link-underline label-xs self-start transition-colors duration-300 hover:text-accent md:self-auto"
          >
            Selected work ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
