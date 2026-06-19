import { firm } from '../data/content';
import { logo } from '../assets';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-arch-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <img src={logo} alt={firm.shortName} className="h-8 w-auto" />
          <p className="text-arch-muted text-xs">
            architecture · planning · interiors · landscape
          </p>
        </div>

        <p className="text-[10px] sm:text-xs font-mono tracking-wide text-arch-muted/70 text-center md:text-right leading-relaxed max-w-full">
          &copy; {year} {firm.shortName}. All rights reserved.
          <span className="text-arch-muted/30 mx-1.5">·</span>
          <span className="text-arch-muted/50">
            Designed &amp; Developed by{' '}
            <a
              href="https://techmalba.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-arch-muted/60 hover:text-arch-gold transition-colors duration-300"
            >
              TechMalba
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
