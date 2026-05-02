import ScrollReveal from '@/components/ScrollReveal';
import SectionBadge from '@/components/SectionBadge';
import { Award, TreePalm, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Pro Courts',
    description: 'Tournament-quality indoor-covered pickleball courts with professional surfaces and tropical climate comfort.',
  },
  {
    icon: TreePalm,
    title: 'Island Atmosphere',
    description: 'Play surrounded by tropical landscaping, ocean breezes, and island vibes you won\'t find anywhere else.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join a vibrant community of players. All skill levels welcome, from beginners to seasoned pros.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <SectionBadge text="Why Island Pickleball Hub" />
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-semibold text-secondary">
            Everything You Need to Play
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-border p-8 card-hover group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg]">
                  <feature.icon size={24} className="text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-secondary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
