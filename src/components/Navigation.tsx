import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { label: 'Facility', href: '#facility' },
  { label: 'Our Courts', href: '#courts' },
  { label: 'Hours & Pricing', href: '#hours-pricing' },
  { label: 'Contact', href: '#visit-us' },
];

export default function Navigation() {
  const scrollY = useScrollPosition();
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isScrolled = scrollY > 80;
  const isHome = location.pathname === '/';
  const navBarClasses = isScrolled
    ? 'bg-primary/95 backdrop-blur-xl shadow-[0_1px_10px_rgba(30,59,52,0.05)] border-b border-border/50'
    : isHome
      ? 'bg-transparent'
      : 'bg-primary/90 backdrop-blur-md border-b border-border/40';
  const linkTone = !isScrolled && isHome ? 'text-primary' : 'text-secondary';

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const scrollToSection = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBarClasses}`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
          {isHome ? (
            <a
              href="#"
              className="flex items-center group shrink-0"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img
                src="/images/logo.png"
                alt="Island Pickleball Hub — est. 2026"
                className="h-9 sm:h-10 md:h-[44px] w-auto max-w-[min(100%,260px)] object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>
          ) : (
            <Link to="/" className="flex items-center group shrink-0" onClick={() => setIsMobileOpen(false)}>
              <img
                src="/images/logo.png"
                alt="Island Pickleball Hub — est. 2026"
                className="h-9 sm:h-10 md:h-[44px] w-auto max-w-[min(100%,260px)] object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
          )}

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              isHome ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`nav-link ${linkTone}`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={{ pathname: '/', hash: link.href }}
                  className={`nav-link ${linkTone}`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/inquiry"
            className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5 group"
          >
            Reserve a Court
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${linkTone}`}
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-secondary transition-transform duration-300 lg:hidden ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) =>
            isHome ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-2xl font-heading text-primary hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={{ pathname: '/', hash: link.href }}
                className="text-2xl font-heading text-primary hover:text-accent transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link to="/inquiry" className="btn-primary mt-4 group" onClick={() => setIsMobileOpen(false)}>
            Reserve a Court
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}
