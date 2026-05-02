import { Link } from 'react-router';
import ScrollReveal from '@/components/ScrollReveal';
import SectionBadge from '@/components/SectionBadge';
import { Calendar, ArrowRight } from 'lucide-react';

interface Court {
  id: number;
  name: string;
  type: string;
  status: 'open' | 'limited' | 'full';
  statusText: string;
  surface: string;
  lighting: string;
  design: string;
  times: string[];
  price: number;
  diagramColor: string;
}

const courts: Court[] = [
  {
    id: 1,
    name: 'Court 1',
    type: 'Indoor',
    status: 'open',
    statusText: 'Open',
    surface: 'Pro surface',
    lighting: 'LED lighting',
    design: 'Open-air tropical design',
    times: ['9:00 AM', '10:30 AM', '2:00 PM', '+3 more'],
    price: 300,
    diagramColor: '#5A9A6E',
  },
  {
    id: 2,
    name: 'Court 2',
    type: 'Indoor pavilion',
    status: 'limited',
    statusText: '2 Slots Left',
    surface: 'Pro surface',
    lighting: 'LED lighting',
    design: 'Open-sided pavilion',
    times: ['11:00 AM', '4:00 PM'],
    price: 500,
    diagramColor: '#D4956A',
  },
  {
    id: 3,
    name: 'Court 3',
    type: 'Premium Indoor',
    status: 'full',
    statusText: 'Full',
    surface: 'Premium surface',
    lighting: 'Tournament grade',
    design: 'Full LED',
    times: ['Fully booked today'],
    price: 700,
    diagramColor: '#C4706A',
  },
];

function CourtDiagram({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="196" height="96" rx="4" fill={`${color}30`} stroke={color} strokeWidth="2" strokeOpacity="0.6" />
      {/* Baselines */}
      <line x1="2" y1="2" x2="198" y2="2" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" />
      <line x1="2" y1="98" x2="198" y2="98" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" />
      {/* Sidelines */}
      <line x1="2" y1="2" x2="2" y2="98" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" />
      <line x1="198" y1="2" x2="198" y2="98" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" />
      {/* NVZ lines - dashed */}
      <line x1="2" y1="35" x2="198" y2="35" stroke="white" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="6 4" />
      <line x1="2" y1="65" x2="198" y2="65" stroke="white" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="6 4" />
      {/* Center line */}
      <line x1="100" y1="35" x2="100" y2="65" stroke="white" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="6 4" />
      {/* Net */}
      <line x1="2" y1="50" x2="198" y2="50" stroke="white" strokeWidth="2.5" strokeOpacity="0.8" />
      {/* Net posts */}
      <rect x="0" y="46" width="4" height="8" fill="white" fillOpacity="0.7" />
      <rect x="196" y="46" width="4" height="8" fill="white" fillOpacity="0.7" />
      {/* NVZ labels */}
      <text x="100" y="28" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="6" fontFamily="Inter">NVZ</text>
      <text x="100" y="80" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="6" fontFamily="Inter">NVZ</text>
    </svg>
  );
}

function StatusBadge({ status, text }: { status: string; text: string }) {
  const styles = {
    open: 'bg-status-open text-white',
    limited: 'bg-status-limited text-white',
    full: 'bg-status-full text-white',
  };
  return (
    <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${styles[status as keyof typeof styles]}`}>
      {status === 'open' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mr-1.5 animate-pulse" />}
      {status === 'limited' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mr-1.5" />}
      {text}
    </span>
  );
}

export default function Availability() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <SectionBadge icon={Calendar} text="Today's Availability" />
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-semibold text-secondary">
            Available Courts
          </h2>
          <p className="mt-3 text-text-secondary max-w-lg mx-auto">
            Check which courts are open right now and reserve your spot.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courts.map((court, i) => (
            <ScrollReveal key={court.id} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-border overflow-hidden card-hover">
                {/* Top half - Court diagram */}
                <div className="relative h-48 p-4" style={{ background: `linear-gradient(135deg, ${court.diagramColor}20 0%, ${court.diagramColor}05 100%)` }}>
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/80 text-secondary">
                    {court.name.toUpperCase()}
                  </span>
                  <StatusBadge status={court.status} text={court.statusText} />
                  <div className="absolute inset-4 top-10">
                    <CourtDiagram color={court.diagramColor} />
                  </div>
                </div>

                {/* Bottom half - Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-xl font-semibold text-secondary">{court.name}</h3>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary/5 text-secondary">
                      {court.type}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-4">
                    {court.surface} · {court.lighting} · {court.design}
                  </p>

                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider text-text-secondary font-medium">Next Available</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {court.times.map((time) => (
                        <span
                          key={time}
                          className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                            time === 'Fully booked today'
                              ? 'bg-status-full/10 text-status-full'
                              : 'bg-secondary/5 text-secondary hover:bg-secondary/10 transition-colors'
                          }`}
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div>
                      <span className="font-heading text-xl font-bold text-secondary">₱{court.price}</span>
                      <span className="text-sm text-text-secondary">/hr</span>
                    </div>
                    {court.status === 'full' ? (
                      <button disabled className="px-5 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-400 cursor-not-allowed">
                        Full
                      </button>
                    ) : (
                      <Link to="/inquiry" className="btn-primary text-sm py-2 px-4 group">
                        Reserve
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
