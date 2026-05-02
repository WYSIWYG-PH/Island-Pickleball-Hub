import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Navigation from '@/components/Navigation';
import Footer from '@/sections/Footer';
import SectionBadge from '@/components/SectionBadge';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ClipboardList, CheckCircle2, Phone, Zap } from 'lucide-react';

const TIME_SLOTS = [
  { value: 'morning', label: 'Morning (6:00 - 9:00 AM)' },
  { value: 'mid-morning', label: 'Mid-Morning (9:00 AM - 12:00 PM)' },
  { value: 'afternoon', label: 'Afternoon (12:00 - 3:00 PM)' },
  { value: 'late-afternoon', label: 'Late Afternoon (3:00 - 6:00 PM)' },
  { value: 'evening', label: 'Evening (6:00 - 9:00 PM)' },
] as const;

const inquirySchema = z.object({
  fullName: z.string().min(1, 'Required'),
  phone: z.string().min(1, 'Required'),
  email: z.string().email('Valid email required'),
  preferredDate: z.string().min(1, 'Required'),
  preferredTime: z.string().min(1, 'Required'),
  players: z.enum(['2', '3', '4'], { message: 'Required' }),
  message: z.string().optional(),
});

type InquiryForm = z.infer<typeof inquirySchema>;

const steps = [
  {
    n: '1',
    title: 'Submit your inquiry',
    description: "Tell us when you'd like to play",
  },
  {
    n: '2',
    title: 'We confirm availability',
    description: 'Our team checks and responds within 24hrs',
  },
  {
    n: '3',
    title: 'Show up & play!',
    description: 'Arrive at your reserved time and enjoy',
  },
];

export default function Inquiry() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const form = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: '',
      players: '2',
      message: '',
    },
  });

  const onSubmit = (data: InquiryForm) => {
    console.info('[Inquiry]', data);
    setSubmitted(true);
  };

  const resetFlow = () => {
    form.reset();
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-primary font-body text-text-primary scrollbar-custom">
      <Navigation />

      <main className="pt-[72px]">
        {/* Hero */}
        <section className="relative bg-secondary-darker py-14 md:py-20 px-6 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.12] bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
          />
          <div className="relative z-10 max-w-[840px] mx-auto text-center">
            <SectionBadge icon={Zap} text="Quick & Easy" dark />
            <h1 className="mt-5 font-heading text-4xl md:text-6xl font-bold text-primary leading-tight">
              Reserve Your Court
            </h1>
            <p className="mt-4 text-lg text-primary/85 max-w-xl mx-auto leading-relaxed">
              Fill out the form and we'll confirm your booking within 24 hours.
            </p>

            {/* How it works */}
            <div className="mt-12 md:mt-14 grid gap-6 sm:grid-cols-3 text-left">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-6"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-secondary-darker font-heading text-lg font-bold">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-primary/75 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>

            {/* Need help */}
            <div className="mt-12 rounded-2xl border border-accent/35 bg-accent/15 px-6 py-5 text-primary max-w-xl mx-auto">
              <h3 className="font-heading text-lg font-semibold mb-4">Need Help?</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
                <a
                  href="tel:09382998903"
                  className="inline-flex items-center gap-2 hover:text-accent transition-colors font-medium"
                >
                  <Phone size={18} />
                  0938 299 8903
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61566182110844"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-95 hover:text-accent transition-colors underline-offset-4 hover:underline"
                >
                  Message us on Facebook
                </a>
              </div>
              <p className="mt-4 text-xs text-primary/70">
                Indoor courts — check our site for today's hours before you visit.
              </p>
            </div>
          </div>
        </section>

        {/* Form card */}
        <section className="py-14 md:py-20 px-6">
          <div className="max-w-xl mx-auto">
            {!submitted ? (
              <div className="bg-surface-light rounded-2xl border border-border shadow-[0_8px_40px_rgba(30,59,52,0.06)] p-8 md:p-10">
                <div className="flex items-start gap-3 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <ClipboardList className="text-secondary" size={22} />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary">
                      Reservation Inquiry
                    </h2>
                    <p className="text-sm text-text-secondary mt-1">All fields marked with * are required</p>
                  </div>
                </div>

                <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)} noValidate>
                  <Field error={form.formState.errors.fullName?.message}>
                    <Label htmlFor="fullName" className="text-secondary">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      className="bg-primary border-border h-11 text-secondary"
                      aria-invalid={!!form.formState.errors.fullName}
                      {...form.register('fullName')}
                    />
                  </Field>

                  <Field error={form.formState.errors.phone?.message}>
                    <Label htmlFor="phone" className="text-secondary">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="bg-primary border-border h-11 text-secondary"
                      aria-invalid={!!form.formState.errors.phone}
                      {...form.register('phone')}
                    />
                  </Field>

                  <Field error={form.formState.errors.email?.message}>
                    <Label htmlFor="email" className="text-secondary">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-primary border-border h-11 text-secondary"
                      aria-invalid={!!form.formState.errors.email}
                      {...form.register('email')}
                    />
                  </Field>

                  <Field error={form.formState.errors.preferredDate?.message}>
                    <Label htmlFor="preferredDate" className="text-secondary">
                      Preferred Date *
                    </Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      className="bg-primary border-border h-11 text-secondary [color-scheme:light]"
                      aria-invalid={!!form.formState.errors.preferredDate}
                      {...form.register('preferredDate')}
                    />
                  </Field>

                  <Field error={form.formState.errors.preferredTime?.message}>
                    <Label className="text-secondary">Preferred Time *</Label>
                    <Select
                      value={form.watch('preferredTime')}
                      onValueChange={(v) => form.setValue('preferredTime', v, { shouldValidate: true })}
                    >
                      <SelectTrigger
                        className="w-full bg-primary border-border h-11 text-secondary data-[placeholder]:text-muted-foreground"
                        aria-invalid={!!form.formState.errors.preferredTime}
                      >
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="max-h-72">
                        {TIME_SLOTS.map((t) => (
                          <SelectItem key={t.value} value={t.value}>
                            {t.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field error={form.formState.errors.players?.message}>
                    <Label className="text-secondary">Number of Players *</Label>
                    <RadioGroup
                      className="flex flex-wrap gap-6"
                      value={form.watch('players')}
                      onValueChange={(v) => form.setValue('players', v as InquiryForm['players'], { shouldValidate: true })}
                    >
                      {(['2', '3', '4'] as const).map((p) => (
                        <Label
                          key={p}
                          className="flex items-center gap-2 cursor-pointer font-normal text-secondary"
                        >
                          <RadioGroupItem value={p} className="border-secondary text-secondary" />
                          {p}
                        </Label>
                      ))}
                    </RadioGroup>
                  </Field>

                  <div>
                    <Label htmlFor="message" className="text-secondary">
                      Message <span className="text-text-secondary font-normal">(optional)</span>
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      className="mt-2 bg-primary border-border text-secondary resize-y min-h-[100px]"
                      placeholder="Court preference, coaching, or anything else we'd need to know"
                      {...form.register('message')}
                    />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="btn-primary w-full sm:w-auto justify-center min-w-[200px]">
                      Submit Inquiry
                    </button>
                    <p className="mt-4 text-xs text-text-secondary text-center sm:text-left">
                      We'll respond within 24 hours to confirm your reservation
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-surface-light rounded-2xl border border-border shadow-[0_8px_40px_rgba(30,59,52,0.06)] p-8 md:p-12 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-status-open/15 flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-status-open w-10 h-10" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary">
                  Inquiry Submitted!
                </h2>
                <p className="mt-3 text-text-secondary leading-relaxed max-w-md mx-auto">
                  Thank you for your interest in Island Pickleball Hub! Our team will review your request
                  and get back to you within 24 hours to confirm your reservation.
                </p>

                <p className="mt-8 text-sm font-semibold text-secondary text-left max-w-md mx-auto">What's next?</p>
                <ul className="mt-3 space-y-2 text-sm text-text-secondary text-left max-w-md mx-auto list-disc list-inside">
                  <li>Check your email for follow-up details</li>
                  <li>We may call to finalize your slot</li>
                  <li>Arrive about 10 minutes before your booked time</li>
                </ul>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/" className="btn-secondary inline-flex justify-center">
                    Back to Home
                  </Link>
                  <button type="button" onClick={resetFlow} className="btn-primary inline-flex justify-center">
                    New Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Field({ children, error }: { children: ReactNode; error?: string }) {
  return (
    <div className="space-y-2">
      {children}
      {error ? <p className="text-xs text-status-full">{error}</p> : null}
    </div>
  );
}
