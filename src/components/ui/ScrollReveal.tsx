"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, useState, useEffect } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

export function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 0.7,
  className = "" 
}: ScrollRevealProps) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-60px", amount: 0.2 });

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

  // En desktop, animaciones completas
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
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
  duration = 0.8,
  className = "" 
}: ScrollRevealProps) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollScale({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = "" 
}: ScrollRevealProps) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


