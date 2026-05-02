import { Link } from 'react-router';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative min-h-[320px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/cta-bg.jpg)' }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-secondary-darker/70" />

      <div className="relative z-10 max-w-[720px] mx-auto px-6 py-20 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            Ready to Play?
          </h2>
          <p className="mt-4 text-lg text-primary/80 max-w-[600px] mx-auto">
            Submit an inquiry and our team will get back to you within 24 hours to confirm your court reservation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary group">
              <ArrowRight size={16} />
              Submit an Inquiry
            </Link>
            <a href="tel:09382998903" className="btn-ghost group">
              <Phone size={16} />
              Contact Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
