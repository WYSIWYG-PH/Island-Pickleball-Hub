import type { LucideIcon } from 'lucide-react';

interface SectionBadgeProps {
  icon?: LucideIcon;
  text: string;
  dark?: boolean;
}

export default function SectionBadge({ icon: Icon, text, dark = false }: SectionBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
      dark 
        ? 'bg-white/15 text-white backdrop-blur-sm' 
        : 'bg-secondary/10 text-secondary'
    }`}>
      {Icon && <Icon size={14} />}
      {text}
    </span>
  );
}
