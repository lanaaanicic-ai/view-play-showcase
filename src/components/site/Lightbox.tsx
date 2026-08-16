import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

export function Lightbox({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [[index, dir], setIndex] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (project) setIndex([0, 0]);
  }, [project]);

  const paginate = useCallback(
    (delta: number) => {
      if (!project) return;
      setIndex(([i]) => {
        const next = (i + delta + project.images.length) % project.images.length;
        return [next, delta];
      });
    },
    [project],
  );

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose, paginate]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-background/97 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} images`}
        >
          <div className="flex items-start justify-between px-6 pt-6 md:px-10 md:pt-8">
            <div>
              <h2 className="display-xl text-2xl md:text-4xl">{project.name}</h2>
              <p className="label-xs mt-2 text-muted-foreground">
                {project.category} — {project.year}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="group -mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-6 md:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence initial={false} custom={dir} mode="popLayout">
              <motion.img
                key={index}
                src={project.images[index].src}
                alt={project.images[index].alt}
                custom={dir}
                initial={(d: number) => ({ opacity: 0, x: d === 0 ? 0 : d * 60, scale: d === 0 ? 0.96 : 1 })}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={(d: number) => ({ opacity: 0, x: -d * 60 })}
                transition={{ duration: 0.45, ease }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) paginate(1);
                  else if (info.offset.x > 60) paginate(-1);
                }}
                className="max-h-full max-w-full cursor-grab object-contain select-none active:cursor-grabbing"
                draggable={false}
              />
            </AnimatePresence>
          </div>

          <div
            className="flex flex-col gap-5 border-t border-border px-6 py-6 md:flex-row md:items-end md:justify-between md:px-10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="flex items-center gap-5">
              <span className="label-xs tabular-nums">
                {String(index + 1).padStart(2, "0")}{" "}
                <span className="text-muted-foreground">/ {String(project.images.length).padStart(2, "0")}</span>
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => paginate(-1)}
                  aria-label="Previous image"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <button
                  onClick={() => paginate(1)}
                  aria-label="Next image"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
