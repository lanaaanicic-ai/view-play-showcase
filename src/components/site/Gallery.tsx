import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { Lightbox } from "./Lightbox";

const ease = [0.22, 1, 0.36, 1] as const;

function ProjectTile({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease }}
      className="group block w-full text-left"
      aria-label={`Open ${project.name} images`}
    >
      <div
        ref={ref}
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setOffset({
            x: ((e.clientX - r.left) / r.width - 0.5) * 14,
            y: ((e.clientY - r.top) / r.height - 0.5) * 14,
          });
        }}
        onPointerLeave={() => setOffset({ x: 0, y: 0 })}
        className="relative overflow-hidden bg-muted"
        style={{ aspectRatio: "4 / 3" }}
      >
        <motion.img
          src={project.images[0].src}
          alt={project.images[0].alt}
          loading="lazy"
          width={1408}
          height={1056}
          animate={{ x: offset.x, y: offset.y }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="h-full w-full scale-[1.06] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.12]"
        />
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="flex items-center text-xl font-medium tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-1 md:text-2xl">
          {project.name}
          <ArrowUpRight
            className="ml-1 h-4 w-4 -translate-x-1 text-accent opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
            strokeWidth={1.5}
          />
        </h3>
        <span className="label-xs text-muted-foreground">{project.year}</span>
      </div>
      <p className="label-xs mt-2 text-muted-foreground transition-colors duration-500 group-hover:text-accent">
        {project.category}
      </p>
    </motion.button>
  );
}

export function Gallery() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-baseline justify-between border-b border-border pb-5">
          <h2 className="label-xs">Selected Work</h2>
          <span className="label-xs text-muted-foreground">
            {String(projects.length).padStart(2, "0")} Projects
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 md:mt-20 md:gap-x-12 md:gap-y-28">
          {projects.map((p) => (
            <ProjectTile key={p.id} project={p} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      <Lightbox project={active} onClose={() => setActive(null)} />
    </section>
  );
}
