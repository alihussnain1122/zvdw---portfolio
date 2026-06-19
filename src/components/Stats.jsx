import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from './SectionWrapper';
import { stats } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const counters = sectionRef.current?.querySelectorAll('.stat-number');
    if (!counters?.length) return;

    const animations = [];

    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const suffix = counter.getAttribute('data-suffix') || '';

      const anim = gsap.fromTo(
        counter,
        { textContent: 0 },
        {
          textContent: target,
          duration: 2.5,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 80%',
            once: true,
          },
          onUpdate: function () {
            const val = Math.ceil(this.targets()[0].textContent);
            counter.textContent = val.toLocaleString() + suffix;
          },
        }
      );
      animations.push(anim);
    });

    return () => {
      animations.forEach((anim) => anim.kill());
    };
  }, []);

  return (
    <SectionWrapper
      id="stats"
      className="bg-arch-black relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div ref={sectionRef} className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center py-4 md:py-6 ${
              i < stats.length - 1 ? 'md:border-r md:border-arch-charcoal' : ''
            }`}
          >
            <p
              className="stat-number font-display text-5xl sm:text-6xl md:text-8xl text-arch-gold"
              data-target={stat.value}
              data-suffix={stat.suffix}
            >
              0{stat.suffix}
            </p>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-arch-muted mt-4 whitespace-pre-line">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
