import ScrollReveal from '@/components/ScrollReveal';
import SectionBadge from '@/components/SectionBadge';

interface CourtArea {
  image: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
}

const courtAreas: CourtArea[] = [
  {
    image: '/images/court1.jpg',
    badge: 'PICKLEBALL',
    title: 'Indoor Pickleball Courts',
    description: 'Professional-grade courts with tournament-quality surfaces, full LED lighting, and tropical climate control.',
    tags: ['Indoor', 'Pro Surface', 'LED Lighting'],
  },
  {
    image: '/images/court2.jpg',
    badge: 'COVERED',
    title: 'Pavilion Courts',
    description:
      'Fully roofed, open-sided facility with tournament-quality markings, bright overhead lighting, and natural airflow—play rain or shine, day or night.',
    tags: ['Indoor pavilion', 'LED lighting', 'Multi-court'],
  },
  {
    image: '/images/court3.jpg',
    badge: 'FULL VIEW',
    title: 'Spacious Facility',
    description: 'A massive space with multiple courts, high ceilings, and room for players and spectators alike.',
    tags: ['Spacious', 'Spectator Seating', 'Ventilated'],
  },
];

export default function Courts() {
  return (
    <section id="courts" className="py-24 md:py-32 bg-surface-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <SectionBadge text="Courts" />
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-semibold text-secondary">
            Our Playing Areas
          </h2>
          <p className="mt-3 text-text-secondary max-w-lg mx-auto">
            Professional facilities designed for every type of player.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courtAreas.map((court, i) => (
            <ScrollReveal key={court.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-border overflow-hidden card-hover group">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={court.image}
                    alt={court.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-primary">
                    {court.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                    {court.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {court.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {court.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-surface-cream text-text-secondary hover:bg-secondary/10 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
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
