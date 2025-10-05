// src/components/ui/primitives.tsx
import React from "react";

type WithChildren<T = {}> = T & { children?: React.ReactNode };

// ====== Container ======
type ContainerProps = WithChildren<{ className?: string }>;
export const Container = ({ className = "", children }: ContainerProps) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// ====== Section ======
type SectionProps = WithChildren<{
  id?: string;
  title?: string;
  eyebrow?: string;
  intro?: string;
  className?: string;
  tone?: "plain" | "alt";
}>;
export const Section = ({
  id,
  title,
  eyebrow,
  intro,
  className = "",
  tone = "plain",
  children,
}: SectionProps) => (
  <section
    id={id}
    className={`py-20 sm:py-24 scroll-mt-24 ${tone === "alt" ? "bg-stone-50" : "bg-white"} ${className}`}
  >
    <Container>
      {(eyebrow || title || intro) && (
        <header className="mb-10 sm:mb-12 max-w-3xl">
          {eyebrow && (
            <p className="uppercase tracking-widest text-sm text-emerald-700 font-semibold">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-1 text-3xl sm:text-4xl font-bold text-stone-900">
              {title}
            </h2>
          )}
          {intro && <p className="mt-3 text-stone-600 text-lg">{intro}</p>}
        </header>
      )}
      {children}
    </Container>
  </section>
);

// ====== Pill ======
export const Pill = ({ children }: { children?: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-emerald-700/20 bg-emerald-700/5 px-3 py-1 text-sm text-emerald-900">
    {children}
  </span>
);

// ====== Button ======
type ButtonProps = {
  href?: string;
  children?: React.ReactNode;
  variant?: "primary" | "ghost";
  ariaLabel?: string;
};
export const Button = ({
  href = "#",
  children,
  variant = "primary",
  ariaLabel,
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold transition outline-none " +
    "focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white";
  const styles =
    variant === "primary"
      ? "bg-emerald-700 text-white hover:bg-emerald-800 active:bg-emerald-900"
      : "text-emerald-800 border border-emerald-200 hover:bg-emerald-50 active:bg-emerald-100";
  return (
    <a href={href} aria-label={ariaLabel} className={`${base} ${styles}`}>
      {children}
    </a>
  );
};

// ====== Card ======
type CardProps = WithChildren<
  { className?: string; hover?: boolean } & React.ComponentProps<"div">
>;
export const Card = ({ className = "", hover = true, children, ...rest }: CardProps) => (
  <div
    {...rest}
    className={
      "rounded-3xl border border-stone-200/60 bg-white shadow-sm " +
      (hover ? "hover:shadow-md hover:-translate-y-0.5 transition " : "") +
      className
    }
  >
    {children}
  </div>
);

// ====== Img ======
type ImgProps = {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
};
export const Img = ({ src, alt, className = "", ratio = "aspect-[4/3]" }: ImgProps) => (
  <div className={`w-full overflow-hidden rounded-2xl bg-stone-100 ${ratio}`}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`h-full w-full object-cover ${className}`}
    />
  </div>
);
