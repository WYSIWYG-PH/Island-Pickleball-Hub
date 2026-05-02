import ScrollReveal from '@/components/ScrollReveal';
import SectionBadge from '@/components/SectionBadge';

interface ImageCardProps {
  image: string;
  badge: string;
  title: string;
  subtitle?: string;
  className?: string;
}

function ImageCard({ image, badge, title, subtitle, className = '' }: ImageCardProps) {
  return (
    <div className={`relative rounded-3xl overflow-hidden group cursor-pointer ${className}`}>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-darker/80 via-transparent to-transparent" />
      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent text-secondary-darker mb-2">
          {badge}
        </span>
        <h3 className="font-heading text-xl font-semibold text-primary">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-primary/70">{subtitle}</p>}
      </div>
    </div>
  );
}

export default function Facility() {
  return (
    <section id="facility" className="py-24 md:py-32 bg-surface-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <SectionBadge text="Our Facility" />
          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-semibold text-secondary">
            Island-Grade Sports Complex
          </h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            More than just courts — Island Pickleball Hub features world-class pickleball facilities with a tropical twist.
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[520px]">
          {/* Left - Large card */}
          <ScrollReveal className="h-[300px] md:h-full">
            <ImageCard
              image="/images/facility-main.jpg"
              badge="MAIN ARENA"
              title="Indoor Pickleball Courts"
              subtitle="Professional-grade courts with tropical ventilation"
              className="h-full"
            />
          </ScrollReveal>

          {/* Right - Stacked cards */}
          <div className="flex flex-col gap-4 h-[400px] md:h-full">
            <ScrollReveal delay={0.1} className="flex-1">
              <ImageCard
                image="/images/facility-courts.jpg"
                badge="COURTS"
                title="Multiple Playing Areas"
                className="h-full"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="flex-1">
              <ImageCard
                image="/images/facility-recreation.jpg"
                badge="RECREATION"
                title="Island Lounge & Rest Area"
                className="h-full"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
