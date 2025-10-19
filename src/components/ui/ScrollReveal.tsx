"use client";

import { motion, useInView, type Transition } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  subtle?: boolean; // Nueva prop para animaciones más sutiles
};

export function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 0.8,
  className = "",
  subtle = true // Por defecto más sutil
}: ScrollRevealProps) {
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

  // En mobile, no animaciones - solo contenedor simple
  if (isMobile) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  // Animaciones más sutiles y profesionales
  const transition: Transition = {
    duration,
    delay,
    ease: "easeOut"
  };

  const animationProps = subtle ? {
    initial: { opacity: 0, y: 15 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 },
    transition
  } : {
    initial: { opacity: 0, y: 25 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 },
    transition
  };

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      style={{ willChange: 'opacity, transform' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollFade({ 
  children, 
  delay = 0, 
  duration = 1.0,
  className = "" 
}: ScrollRevealProps) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-60px", amount: 0.1 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  const transition: Transition = {
    duration,
    delay,
    ease: "easeOut"
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollScale({ 
  children, 
  delay = 0, 
  duration = 0.8,
  className = "" 
}: ScrollRevealProps) {
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

  if (isMobile) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  const transition: Transition = {
    duration,
    delay,
    ease: "easeOut"
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }} // Scale más sutil
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}


