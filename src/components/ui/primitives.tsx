// src/components/ui/primitives.tsx
import React from "react";

type WithChildren<T = {}> = T & { children?: React.ReactNode };

// ====== Container ======
type ContainerProps = WithChildren<{ className?: string; size?: "default" | "narrow" | "wide" }>;
export const Container = ({ className = "", size = "default", children }: ContainerProps) => {
  const sizeClass = size === "narrow" ? "max-w-5xl" : size === "wide" ? "max-w-[90rem]" : "max-w-7xl";
  return (
    <div className={`mx-auto ${sizeClass} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

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
    className={`py-16 sm:py-24 lg:py-32 scroll-mt-20 transition-colors duration-300 ${tone === "alt" ? "bg-slate-50/80" : "bg-white"} ${className}`}
  >
    <Container>
      {(eyebrow || title || intro) && (
        <header className="mb-12 sm:mb-16 lg:mb-20 max-w-4xl">
          {eyebrow && (
            <p className="inline-flex items-center uppercase tracking-widest text-[0.6875rem] sm:text-xs text-emerald-600 font-bold mb-4 px-3 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-200/50">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6 bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text">
              {title}
            </h2>
          )}
          {intro && (
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
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
    "group inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 outline-none " +
    "focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white " +
    "transform hover:scale-[1.02] active:scale-[0.98] will-change-transform";
  
  const sizeStyles = {
    sm: "rounded-xl px-5 py-2.5 text-sm",
    md: "rounded-xl px-6 py-3.5 text-base",
    lg: "rounded-xl px-8 py-4 text-lg"
  };
  
  const variantStyles = {
    primary: "bg-gradient-to-br from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30",
    ghost: "text-emerald-700 border-2 border-emerald-200/80 hover:bg-emerald-50 hover:border-emerald-300 active:bg-emerald-100",
    outline: "text-emerald-700 border-2 border-emerald-600/80 hover:bg-emerald-600 hover:text-white hover:border-emerald-700 shadow-sm hover:shadow-md"
  };
  
  return (
    <a href={href} aria-label={ariaLabel} className={`${base} ${sizeStyles[size]} ${variantStyles[variant]}`}>
      {children}
    </a>
  );
};

// ====== Card ======
type CardProps = WithChildren<
  { className?: string; hover?: boolean; variant?: "default" | "elevated" | "subtle" | "glass" } & React.ComponentProps<"div">
>;
export const Card = ({ className = "", hover = true, variant = "default", children, ...rest }: CardProps) => {
  const variantStyles = {
    default: "rounded-2xl sm:rounded-3xl border border-slate-200/60 bg-white shadow-sm",
    elevated: "rounded-2xl sm:rounded-3xl border border-slate-200/50 bg-white shadow-md ring-1 ring-slate-200/30",
    subtle: "rounded-2xl sm:rounded-3xl border border-slate-200/40 bg-slate-50/50 shadow-sm",
    glass: "rounded-2xl sm:rounded-3xl border border-white/40 bg-white/60 backdrop-blur-lg shadow-lg"
  };
  
  const hoverClass = hover 
    ? "hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 ease-out cursor-pointer" 
    : "transition-all duration-300";
  
  return (
    <div
      {...rest}
      className={`${variantStyles[variant]} ${hoverClass} ${className}`}
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
  <div className={`group w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-100 ${ratio} shadow-md hover:shadow-xl transition-all duration-500`}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] ${className}`}
    />
  </div>
);
