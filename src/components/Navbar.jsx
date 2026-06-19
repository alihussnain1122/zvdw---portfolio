import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { firm, navLinks } from '../data/content';
import { logo } from '../assets';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navClass = scrolled
    ? 'bg-arch-dark/95 backdrop-blur-sm shadow-lg'
    : 'bg-transparent';

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <Link
          to="hero"
          smooth={true}
          offset={-80}
          duration={800}
          className="cursor-pointer"
        >
          <img
            src={logo}
            alt={firm.shortName}
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                offset={-80}
                duration={800}
                spy={true}
                activeClass="!text-arch-gold border-b border-arch-gold"
                className="font-mono text-sm tracking-widest uppercase text-arch-text hover:text-arch-gold transition-colors cursor-pointer pb-1"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="hidden md:inline-block font-mono text-xs tracking-widest uppercase border border-arch-gold text-arch-gold px-5 py-2.5 hover:bg-arch-gold hover:text-arch-black transition-colors"
        >
          Download Portfolio
        </a>

        <button
          type="button"
          className="md:hidden text-arch-text text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-arch-dark/98 backdrop-blur-sm border-t border-arch-charcoal overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    onClick={handleNavClick}
                    className="font-mono text-sm tracking-widest uppercase text-arch-text hover:text-arch-gold transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="font-mono text-xs tracking-widest uppercase border border-arch-gold text-arch-gold px-5 py-2.5 hover:bg-arch-gold hover:text-arch-black transition-colors inline-block"
                >
                  Download Portfolio
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
