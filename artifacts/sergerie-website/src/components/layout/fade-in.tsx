import { useState, useEffect, useRef, type ReactNode } from 'react';

export function FadeIn({ children, delay = 0, className = '' }: { children: ReactNode, delay?: number, className?: string }) {
  // Content remains visible in pre-rendered HTML and when JavaScript is unavailable.
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (ref.current.getBoundingClientRect().top < window.innerHeight) return;
    setIsVisible(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-fade-in=""
      className={`min-w-0 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
