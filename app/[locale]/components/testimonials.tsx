"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Testimonial {
  name: string;
  quote: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  label?: string;
  intervalMs?: number;
}

export default function Testimonials({
  testimonials,
  label,
  intervalMs = 6000,
}: TestimonialsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [testimonials.length, intervalMs]);

  if (!testimonials || testimonials.length === 0) return null;

  const current = testimonials[index];

  return (
    <div className="mt-8">
      {label && (
        <h3 className="text-lg font-semibold mb-3 text-blue-100">{label}</h3>
      )}

      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 min-h-[9rem]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <span className="text-4xl leading-none text-blue-300/40">&ldquo;</span>
            <blockquote className="text-blue-100 leading-relaxed -mt-3">
              {current.quote}
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-blue-300">
              — {current.name}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {testimonials.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-blue-400" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
