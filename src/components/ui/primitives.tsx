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
    className={`py-24 sm:py-32 scroll-mt-20 ${tone === "alt" ? "bg-slate-50" : "bg-white"} ${className}`}
  >
    <Container>
      {(eyebrow || title || intro) && (
        <header className="mb-16 sm:mb-20 max-w-4xl">
          {eyebrow && (
            <p className="uppercase tracking-wider text-xs text-emerald-600 font-semibold mb-4 opacity-90">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              {title}
            </h2>
          )}
          {intro && (
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl">
              {intro}
            </p>
          )}
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
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
};
export const Button = ({
  href = "#",
  children,
  variant = "primary",
  size = "md",
  ariaLabel,
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 outline-none " +
    "focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white " +
    "transform hover:scale-105 active:scale-95";
  
  const sizeStyles = {
    sm: "rounded-xl px-4 py-2 text-sm",
    md: "rounded-2xl px-6 py-3 text-base",
    lg: "rounded-2xl px-8 py-4 text-lg"
  };
  
  const variantStyles = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 shadow-lg hover:shadow-xl",
    ghost: "text-emerald-700 border border-emerald-200 hover:bg-emerald-50 active:bg-emerald-100",
    outline: "text-emerald-700 border-2 border-emerald-600 hover:bg-emerald-600 hover:text-white"
  };
  
  return (
    <a href={href} aria-label={ariaLabel} className={`${base} ${sizeStyles[size]} ${variantStyles[variant]}`}>
      {children}
    </a>
  );
};

// ====== Card ======
type CardProps = WithChildren<
  { className?: string; hover?: boolean; variant?: "default" | "elevated" | "subtle" } & React.ComponentProps<"div">
>;
export const Card = ({ className = "", hover = true, variant = "default", children, ...rest }: CardProps) => {
  const variantStyles = {
    default: "rounded-3xl border border-slate-200/60 bg-white shadow-sm",
    elevated: "rounded-3xl border border-slate-200/40 bg-white shadow-lg",
    subtle: "rounded-3xl border border-slate-200/30 bg-slate-50/50 shadow-sm"
  };
  
  return (
    <div
      {...rest}
      className={
        variantStyles[variant] +
        (hover ? " hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer " : " ") +
        className
      }
    >
      {children}
    </div>
  );
};

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
