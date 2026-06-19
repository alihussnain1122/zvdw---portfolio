import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import WhyUsIcon from './icons/WhyUsIcons';
import { whyUs } from '../data/content';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function WhyUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <SectionWrapper id="why-us" className="bg-arch-cream">
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-arch-black mb-12 md:mb-16">
        Why Us?
      </h2>

      <div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
      >
        {whyUs.map((item, i) => (
          <motion.div
            key={item.label}
            custom={i}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="group flex flex-col items-center text-center"
          >
            <div className="relative mb-6 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center text-arch-gold transition-colors duration-300 group-hover:text-arch-black">
              <WhyUsIcon name={item.icon} />
              <span className="absolute -bottom-3 left-1/2 h-px w-0 -translate-x-1/2 bg-arch-gold transition-all duration-500 group-hover:w-full" />
            </div>
            <p className="font-mono text-[10px] md:text-xs tracking-[0.18em] uppercase leading-relaxed text-arch-black/70 max-w-[9rem] md:max-w-[10rem]">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
