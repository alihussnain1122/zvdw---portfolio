import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionLabel from './SectionLabel';
import { story, principal, storyImages } from '../data/content';
import { slideInLeft, slideInRight } from '../utils/animations';

export default function OurStory() {
  return (
    <div id="our-story">
      {/* About — M. Fawad */}
      <SectionWrapper className="bg-arch-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
            className="order-2 md:order-1"
          >
            <img
              src={storyImages.about}
              alt={principal.name}
              className="w-full max-w-md mx-auto md:max-w-none aspect-[3/4] object-cover object-top border border-arch-charcoal"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            className="order-1 md:order-2"
          >
            <SectionLabel text={story.aboutLabel} />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-3 leading-tight">
              {story.aboutTitle}
            </h2>
            <p className="text-arch-muted leading-relaxed text-sm md:text-base">
              {story.whoWeAre}
            </p>
            <div className="mt-8 pt-6 border-t border-arch-charcoal">
              <h3 className="font-display text-2xl text-arch-gold">{principal.name}</h3>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-arch-muted mt-2">
                {principal.role}
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* What We Do */}
      <SectionWrapper className="bg-arch-cream">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <SectionLabel text="Our Services" dark />
            <h2 className="font-display text-3xl md:text-4xl text-arch-black mb-3 leading-tight">
              {story.whatWeDoTitle}
            </h2>
            <p className="text-arch-muted leading-relaxed mb-3">{story.whatWeDo}</p>
            <p className="text-arch-muted leading-relaxed">{story.portfolioIntro}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
            <img
              src={storyImages.whatWeDo}
              alt="ZVDW architectural project render"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Expertise */}
      {/* <SectionWrapper className="bg-arch-charcoal">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <SectionLabel text="What We Bring" />
          <h2 className="font-display text-4xl text-white mb-16">Our Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="border border-arch-charcoal/80 p-8 md:p-10 hover:border-arch-gold/50 transition-colors duration-300"
              >
                <p className="font-mono text-xs tracking-[0.25em] uppercase text-arch-gold mb-3">
                  {item.label}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-white">{item.title}</h3>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Our Focus 
      <SectionWrapper className="bg-arch-cream">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <SectionLabel text="Our Priority" dark />
            <h2 className="font-display text-4xl text-arch-black mb-6">Our Focus</h2>
            <p className="text-arch-muted leading-relaxed">{story.ourFocus}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            className="flex items-center justify-center"
          >
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-arch-black/20 italic text-center leading-snug">
              &ldquo;{story.quote}&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </SectionWrapper>
       */}
    </div>
  );
}
