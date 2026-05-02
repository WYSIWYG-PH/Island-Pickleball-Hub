import ScrollReveal from '@/components/ScrollReveal';
import SectionBadge from '@/components/SectionBadge';
import { Clock, Calendar, Sun, Moon, Briefcase, Users, Award, Trophy } from 'lucide-react';

const hours = [
  { icon: Briefcase, day: 'Monday – Friday', time: '6:00 AM – 9:00 PM', variant: 'open' as const },
  { icon: Sun, day: 'Saturday', time: '7:00 AM – 8:00 PM', variant: 'open' as const },
  { icon: Moon, day: 'Sunday', time: 'Closed', variant: 'closed' as const },
];

const rates = [
  { icon: Users, name: 'Standard Court', desc: 'Recreational play', price: 300 },
  { icon: Award, name: 'Premium Court', desc: 'Advanced players', price: 500 },
  { icon: Trophy, name: 'Tournament Court', desc: 'Competition grade', price: 700 },
];

interface InfoRowProps {
  icon: typeof Calendar;
  label: string;
  value: string;
  variant?: 'open' | 'closed';
}

function InfoRow({ icon: Icon, label, value, variant = 'open' }: InfoRowProps) {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-xl transition-all duration-200 hover:translate-x-1 hover:shadow-md cursor-default">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
        variant === 'closed' ? 'bg-status-full/10' : 'bg-status-open/10'
      }`}>
        <Icon size={18} className={variant === 'closed' ? 'text-status-full' : 'text-status-open'} />
      </div>
      <div className="flex-1 flex items-center justify-between">
        <span className="font-medium text-secondary text-sm">{label}</span>
        <span className={`font-semibold text-sm ${variant === 'closed' ? 'text-status-full' : 'text-status-open'}`}>
          {value}
        </span>
      </div>
    </div>
  );
}

export default function HoursPricing() {
  return (
    <section id="hours-pricing" className="py-20 bg-primary">
      <div className="max-w-[900px] mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <SectionBadge icon={Clock} text="Plan Your Visit" />
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-semibold text-secondary">
            Hours & Pricing
          </h2>
          <p className="mt-3 text-text-secondary max-w-lg mx-auto">
            Find the perfect time and court for your game.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hours Panel */}
          <ScrollReveal>
            <div className="bg-surface-cream rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Calendar size={20} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-secondary">Hours of Operation</h3>
                  <p className="text-xs text-text-secondary">Walk-ins welcome</p>
                </div>
              </div>
              <div className="space-y-2">
                {hours.map((h) => (
                  <InfoRow key={h.day} icon={h.icon} label={h.day} value={h.time} variant={h.variant} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Rates Panel */}
          <ScrollReveal delay={0.15}>
            <div className="bg-surface-cream rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">₱</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-secondary">Court Rates</h3>
                  <p className="text-xs text-text-secondary">Per hour, per court</p>
                </div>
              </div>
              <div className="space-y-2">
                {rates.map((r) => (
                  <div key={r.name} className="flex items-center gap-4 bg-white p-4 rounded-xl transition-all duration-200 hover:translate-x-1 hover:shadow-md cursor-default">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <r.icon size={18} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-secondary text-sm">{r.name}</div>
                      <div className="text-xs text-text-secondary">{r.desc}</div>
                    </div>
                    <div className="text-right">
                      <span className="font-heading text-lg font-bold text-accent">₱{r.price}</span>
                      <span className="text-xs text-text-secondary">/hr</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
