import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import ServiceIcon from './icons/ServiceIcons';
import { services } from '../data/content';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <SectionWrapper id="services" className="bg-arch-cream">
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-arch-black mb-12 md:mb-16">
        Services
      </h2>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl lg:max-w-6xl mx-auto"
      >
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            custom={i}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="group flex flex-col items-center text-center"
          >
            <div className="relative mb-6 flex h-16 w-16 md:h-[70px] md:w-[70px] items-center justify-center text-arch-gold transition-colors duration-300 group-hover:text-arch-black">
              <ServiceIcon name={service.icon} />
              <span className="absolute -bottom-3 left-1/2 h-px w-0 -translate-x-1/2 bg-arch-gold transition-all duration-500 group-hover:w-full" />
            </div>
            <p className="font-body text-base md:text-lg text-arch-black/80 tracking-wide transition-colors duration-300 group-hover:text-arch-black">
              {service.title}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
