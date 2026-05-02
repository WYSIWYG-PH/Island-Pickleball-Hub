import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { MapPin, ArrowRight, Play } from 'lucide-react';
import SectionBadge from '@/components/SectionBadge';

const stats = [
  { value: '3+', label: 'Pickleball Courts' },
  { value: '7', label: 'Days a Week' },
  { value: '12hrs', label: 'Daily Operation' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo('.hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.2)
        .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
        .fromTo('.hero-body', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.5)
        .fromTo('.hero-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.7)
        .fromTo('.hero-stats', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.9);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-secondary-darker/75" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-[720px] mx-auto px-6 text-center pt-[120px] pb-16">
        <div className="hero-badge">
          <SectionBadge icon={MapPin} text="Now Open in Samal" dark />
        </div>

        <h1 className="hero-title mt-6 font-heading text-5xl md:text-7xl font-bold text-primary leading-[1.05] tracking-tight">
          Your Home Court
          <br />
          <span className="text-accent">in Paradise</span>
        </h1>

        <p className="hero-body mt-6 text-lg text-primary/80 max-w-[600px] mx-auto leading-relaxed">
          Indoor-covered courts under our pavilion, tropical atmosphere, and a welcoming community.
          Island Pickleball Hub is your island destination for fun, fitness, and friendly competition.
        </p>

        <div className="hero-buttons mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/inquiry" className="btn-primary group">
            Reserve a Court
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a href="#facility" className="btn-ghost group">
            <Play size={16} className="transition-transform duration-300 group-hover:scale-110" />
            Explore Facility
          </a>
        </div>

        <div className="hero-stats mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i === 0 ? 'animate-float' : i === 1 ? 'animate-float-delay-1' : 'animate-float-delay-2'}`}
            >
              <div className="font-heading text-3xl md:text-4xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.05em] text-primary/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
