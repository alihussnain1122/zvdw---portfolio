import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/content';
import { fadeInUp } from '../utils/animations';

const HOVER_DELAY = 320;
const EASE = [0.4, 0, 0.2, 1];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);
  const hoverTimerRef = useRef(null);
  const hoveredProject = projects.find((p) => p.id === hoveredId);
  const isFocusMode = hoveredId !== null;

  const clearHoverTimer = useCallback(() => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  }, []);

  const handleCardEnter = (id) => {
    if (isFocusMode) return;
    clearHoverTimer();
    hoverTimerRef.current = setTimeout(() => setHoveredId(id), HOVER_DELAY);
  };

  const handleCardLeave = () => {
    if (isFocusMode) return;
    clearHoverTimer();
  };

  const handleSectionLeave = () => {
    clearHoverTimer();
    setHoveredId(null);
  };

  return (
    <SectionWrapper id="projects" className="bg-arch-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="font-display text-4xl md:text-5xl text-white mb-3">Projects</h2>
        <p className="text-arch-muted text-sm md:text-base max-w-xl mb-12 md:mb-16">
          A diverse portfolio spanning decades of architectural excellence
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        className="relative min-h-[240px] sm:min-h-[280px] md:min-h-[400px]"
        onMouseLeave={handleSectionLeave}
      >
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-opacity duration-700 ${
            isFocusMode ? 'pointer-events-none' : ''
          }`}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onMouseEnter={() => handleCardEnter(project.id)}
              onMouseLeave={handleCardLeave}
              animate={{
                opacity: isFocusMode ? 0 : 1,
                scale: isFocusMode ? 0.96 : 1,
                filter: isFocusMode ? 'blur(4px)' : 'blur(0px)',
              }}
              transition={{ duration: 0.65, ease: EASE }}
              className="relative aspect-video overflow-hidden cursor-pointer border border-arch-charcoal/70 bg-arch-charcoal"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className="font-display text-lg md:text-xl text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="absolute inset-0 z-10 bg-arch-black/40"
            />
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {hoveredProject && (
            <motion.div
              key={hoveredProject.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="absolute inset-0 z-20 flex items-center justify-center p-4 md:p-8 pointer-events-none"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 28 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="relative w-full max-w-4xl overflow-hidden border border-arch-gold bg-arch-black shadow-[0_24px_80px_rgba(0,0,0,0.6)] pointer-events-auto"
              >
                <div className="aspect-video relative">
                  <img
                    src={hoveredProject.img}
                    alt={hoveredProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                  <p className="font-mono text-xs tracking-[0.3em] uppercase text-arch-gold mb-3">
                    Project Category
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl text-white mb-4">
                    {hoveredProject.title}
                  </h3>
                  <p className="text-arch-text/90 text-sm md:text-base leading-relaxed max-w-2xl mb-6">
                    {hoveredProject.desc}
                  </p>
                  <span className="font-mono text-xs tracking-widest uppercase text-arch-gold">
                    View Projects →
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
