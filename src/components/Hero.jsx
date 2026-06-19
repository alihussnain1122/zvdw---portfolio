import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiChevronDown } from 'react-icons/hi';
import { firm, heroSlides } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const contentRef = useRef(null);
  const lineRef = useRef(null);
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray('.hero-slide');
      const slideCount = slides.length;

      slides.forEach((slide, i) => {
        gsap.set(slide, {
          yPercent: i === 0 ? 0 : -100,
          zIndex: i + 1,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${(slideCount - 1) * 100}%`,
          pin: pin,
          scrub: 0.6,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.min(
              Math.round(self.progress * (slideCount - 1)),
              slideCount - 1
            );
            setActiveLine(idx);
          },
        },
      });

      slides.slice(1).forEach((slide) => {
        tl.to(slide, { yPercent: 0, ease: 'none', duration: 1 });
      });

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    gsap.fromTo(el, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
  }, [activeLine]);

  return (
    <section id="hero" ref={sectionRef} className="relative">
      <div ref={pinRef} className="relative h-screen min-h-[100dvh] w-full overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="hero-slide absolute inset-0 will-change-transform"
          >
            <img
              src={slide.img}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>
        ))}

        <div
          ref={contentRef}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center px-4 sm:px-6 pt-16 md:pt-20 text-center pointer-events-none opacity-0"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-wide mb-6 drop-shadow-lg">
            {firm.name}
          </h1>

          <p
            ref={lineRef}
            className="font-mono text-sm sm:text-base md:text-lg tracking-[0.2em] sm:tracking-[0.35em] uppercase text-white mb-8 md:mb-12 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] px-2"
          >
            {heroSlides[activeLine].line}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pointer-events-auto w-full max-w-xs sm:max-w-none sm:w-auto px-4 sm:px-0">
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={800}
              className="font-mono text-xs tracking-widest uppercase bg-arch-gold text-arch-black px-8 py-3.5 hover:bg-white transition-colors cursor-pointer"
            >
              View Projects
            </Link>
            <Link
              to="our-story"
              smooth={true}
              offset={-80}
              duration={800}
              className="font-mono text-xs tracking-widest uppercase border border-arch-gold text-arch-gold px-8 py-3.5 hover:bg-arch-gold hover:text-arch-black transition-colors cursor-pointer"
            >
              Our Story
            </Link>
          </div>
        </div>

        <Link
          to="why-us"
          smooth={true}
          offset={-80}
          duration={800}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 text-arch-gold animate-bounce cursor-pointer"
          aria-label="Scroll to next section"
        >
          <HiChevronDown className="text-3xl" />
        </Link>
      </div>
    </section>
  );
}
