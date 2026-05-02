import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router';
import { MapPin, Phone, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Our Facility', to: '/#facility' },
  { label: 'Courts', to: '/#courts' },
  { label: 'Hours & Pricing', to: '/#hours-pricing' },
  { label: 'Reserve a Court', to: '/inquiry' },
  { label: 'Contact', to: '/#visit-us' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary-darker text-primary pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo & Description */}
          <ScrollReveal>
            <div className="mb-4">
              <Link to="/">
                <img
                  src="/images/logo.png"
                  alt="Island Pickleball Hub — est. 2026"
                  className="h-14 sm:h-16 w-auto max-w-full object-contain object-left rounded-md"
                />
              </Link>
            </div>
            <p className="text-primary/70 text-sm leading-relaxed max-w-xs">
              Your home court in paradise. Premium pickleball facilities on Samal Island, open 6 days a week.
            </p>
            <div className="flex items-center mt-5">
              <a
                href="https://www.facebook.com/profile.php?id=61566182110844"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Island Pickleball Hub on Facebook"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.1}>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary/70 hover:text-primary flex items-center gap-1.5 transition-colors group"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.2}>
            <h4 className="font-semibold text-sm mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-primary/70">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/CHXMFgxAHbWCM6Cb8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <span className="block font-medium text-primary/85">Island Pickle Hub</span>
                  <span className="block mt-1">
                    Super Island Homeowners Association Basketball Gym, Samal, 8119 Davao del Norte,
                    Philippines
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:09382998903" className="flex items-center gap-2.5 text-sm text-primary/70 hover:text-primary transition-colors">
                  <Phone size={16} className="text-accent" />
                  0938 299 8903
                </a>
              </li>
            
            </ul>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary/50">
            © 2026 Island Pickleball Hub. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
}
