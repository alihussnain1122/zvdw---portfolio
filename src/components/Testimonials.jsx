import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import SectionWrapper from './SectionWrapper';
import { testimonials } from '../data/content';
import { fadeInUp } from '../utils/animations';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const current = testimonials[activeIndex];

  return (
    <SectionWrapper id="testimonials" className="bg-arch-charcoal">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <span className="font-display text-6xl md:text-8xl text-arch-gold leading-none block mb-3">&ldquo;</span>
        <h2 className="font-display text-4xl md:text-5xl text-white mb-12 md:mb-16">
          What Our Clients Say
        </h2>

        <div className="relative max-w-3xl mx-auto min-h-[240px] md:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="text-center"
            >
              <p className="text-arch-text text-base md:text-lg leading-relaxed italic mb-8 px-2 sm:px-0">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="w-16 h-px bg-arch-gold mx-auto mb-6" />
              <p className="font-display text-xl text-white">{current.name}</p>
              <p className="text-arch-muted text-sm font-mono mt-1">{current.title}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              type="button"
              onClick={prev}
              className="text-arch-muted hover:text-arch-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="text-2xl" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`min-w-[12px] min-h-[12px] w-3 h-3 rounded-full transition-colors ${
                    i === activeIndex ? 'bg-arch-gold' : 'bg-arch-muted'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="text-arch-muted hover:text-arch-gold transition-colors"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
