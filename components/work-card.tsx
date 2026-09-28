import NextImage from "next/image";
import clsx from "clsx";

export type WorkItem = {
  src: string;
  title: string;
  category: string;
  href?: string;
  // transparent artwork: show the whole piece on white instead of cropping
  contain?: boolean;
};

type WorkCardProps = WorkItem & {
  aspect?: string;
  sizes: string;
};

export const WorkCard = ({
  src,
  title,
  category,
  href,
  contain,
  aspect = "aspect-square",
  sizes,
}: WorkCardProps) => {
  const link = href ?? src;

  return (
    <a
      className="group block"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div
        className={clsx(
          "relative overflow-hidden rounded-md shadow-lg shadow-black/40",
          aspect,
          contain ? "bg-white" : "bg-rule",
        )}
      >
        <NextImage
          fill
          alt={title}
          className={clsx(
            "transition-transform duration-300 group-hover:scale-[1.03]",
            contain ? "object-contain p-3" : "object-cover object-top",
          )}
          sizes={sizes}
          src={src}
        />
      </div>
      <div className="mt-3 flex items-start justify-between gap-3 px-1">
        <div>
          <div className="text-base text-cream">{title}</div>
          <div className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-muted">
            {category}
          </div>
        </div>
        <span
          aria-hidden
          className="mt-1 text-lg text-ember transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </div>
    </a>
  );
};

export const SectionHeader = ({ title, id }: { title: string; id?: string }) => {
  return (
    <div className="mb-6 flex scroll-mt-6 items-center gap-6" id={id}>
      <h2 className="text-3xl font-semibold text-cream md:shrink-0 md:text-4xl">
        {title}
      </h2>
      <div className="h-px min-w-8 flex-1 bg-rule" />
    </div>
  );
};
