// src/components/ui/primitives.tsx
"use client";

import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

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
}: SectionProps) => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-80px", amount: 0.1 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 sm:py-24 lg:py-32 scroll-mt-20 transition-colors duration-300 ${tone === "alt" ? "bg-slate-50" : "bg-white"} ${className}`}
    >
      <Container>
        {(eyebrow || title || intro) && (
          <header className="mb-12 sm:mb-16 lg:mb-20 max-w-4xl">
            {eyebrow && (
              isMobile ? (
                <p className="uppercase tracking-[0.25em] text-[0.6875rem] text-slate-500 font-semibold mb-4">
                  {eyebrow}
                </p>
              ) : (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ willChange: 'opacity, transform' }}
                  className="uppercase tracking-[0.25em] text-[0.6875rem] text-slate-500 font-semibold mb-4"
                >
                  {eyebrow}
                </motion.p>
              )
            )}
            {title && (
              isMobile ? (
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 leading-[1.2] tracking-tight mb-6">
                  {title}
                </h2>
              ) : (
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ willChange: 'opacity, transform' }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 leading-[1.2] tracking-tight mb-6"
                >
                  {title}
                </motion.h2>
              )
            )}
            {intro && (
              isMobile ? (
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                  {intro}
                </p>
              ) : (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ willChange: 'opacity, transform' }}
                  className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl"
                >
                  {intro}
                </motion.p>
              )
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
};

// ====== Pill ======
export const Pill = ({ children }: { children?: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-emerald-700/15 bg-emerald-50/50 px-3 py-1 text-sm font-medium text-emerald-800 shadow-sm">
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
    "group inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 outline-none " +
    "focus-visible:ring-2 focus-visible:ring-emerald-600/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white " +
    "transform hover:scale-[1.01] active:scale-[0.99] will-change-transform";
  
  const sizeStyles = {
    sm: "rounded-xl px-4 py-2 text-sm",
    md: "rounded-xl px-6 py-3 text-base",
    lg: "rounded-xl px-8 py-4 text-lg"
  };
  
  const variantStyles = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md border border-slate-900",
    ghost: "text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm",
    outline: "text-slate-900 border border-slate-900 hover:bg-slate-900 hover:text-white shadow-sm hover:shadow-md"
  };
  
  return (
    <a href={href} aria-label={ariaLabel} className={`${base} ${sizeStyles[size]} ${variantStyles[variant]}`}>
      {children}
    </a>
  );
};

// ====== Card ======
type CardProps = WithChildren<
  { className?: string; hover?: boolean; variant?: "default" | "elevated" | "subtle" | "minimal" } & React.ComponentProps<"div">
>;
export const Card = ({ className = "", hover = true, variant = "default", children, ...rest }: CardProps) => {
  const variantStyles = {
    default: "rounded-2xl border border-slate-200/60 bg-white shadow-xs",
    elevated: "rounded-2xl border border-slate-200/80 bg-white shadow-sm",
    subtle: "rounded-2xl border border-slate-200/40 bg-slate-50/30",
    minimal: "border-l-2 border-slate-300/60 pl-6 bg-transparent"
  };
  
  const hoverClass = hover 
    ? "hover:border-slate-300/80 hover:shadow-md hover:-translate-y-1 transition-all duration-250 ease-out" 
    : "transition-all duration-200";
  
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
      width="800"
      height="600"
    />
  </div>
);
