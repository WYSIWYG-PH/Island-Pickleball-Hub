import { useState, useEffect } from 'react';
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isScrolled = scrollY > 80;

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary/95 backdrop-blur-xl shadow-[0_1px_10px_rgba(30,59,52,0.05)] border-b border-border/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
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

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link ${isScrolled ? 'text-secondary' : 'text-primary'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#hours-pricing"
            onClick={(e) => handleNavClick(e, '#hours-pricing')}
            className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5"
          >
            Reserve a Court
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-secondary' : 'text-primary'
            }`}
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-heading text-primary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#hours-pricing"
            onClick={(e) => handleNavClick(e, '#hours-pricing')}
            className="btn-primary mt-4"
          >
            Reserve a Court
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </>
  );
}
