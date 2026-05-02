import ScrollReveal from '@/components/ScrollReveal';
import SectionBadge from '@/components/SectionBadge';
import { MapPin, ArrowRight, Phone } from 'lucide-react';

export default function VisitUs() {
  return (
    <section id="visit-us" className="py-24 md:py-32 bg-primary">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <SectionBadge text="Get in Touch" />
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-semibold text-secondary">
            Visit Us
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Info Card */}
          <ScrollReveal className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-border p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <MapPin size={24} className="text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                Our Location
              </h3>
              <div className="text-text-secondary leading-relaxed mb-4 space-y-1">
                <p className="font-semibold text-secondary">Island Pickle Hub</p>
                <p>
                  Super Island Homeowners Association Basketball Gym, Samal, 8119 Davao del Norte,
                  Philippines
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/CHXMFgxAHbWCM6Cb8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary font-medium text-sm hover:gap-3 transition-all duration-200"
              >
                Get Directions
                <ArrowRight size={14} />
              </a>

              <div className="mt-8 pt-6 border-t border-border space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary uppercase tracking-wider">Phone</div>
                    <a href="tel:09382998903" className="text-secondary font-medium hover:text-accent transition-colors">
                      0938 299 8903
                    </a>
                  </div>
                </div>
             
              </div>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal delay={0.15} className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden border border-border h-[400px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=Super+Island+Homeowners+Association+Basketball+Gym%2C+Samal%2C+8119+Davao+del+Norte%2C+Philippines&output=embed&zoom=17"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(20%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Island Pickleball Hub Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
