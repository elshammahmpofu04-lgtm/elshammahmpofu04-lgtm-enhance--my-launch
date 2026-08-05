import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Zap,
  Lock,
  Smartphone,
  Users,
  Star,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claim a $750 Home Depot Gift Card | Rewards Landing" },
      {
        name: "description",
        content:
          "Complete 5-8 qualifying tasks to become eligible for a $750 Home Depot gift card reward, subject to the promotion's terms.",
      },
      { property: "og:title", content: "Claim a $750 Home Depot Gift Card" },
      {
        property: "og:description",
        content:
          "Complete 5-8 qualifying tasks to become eligible for the reward, subject to the promotion's terms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  { icon: Zap, title: "Quick Process", text: "Simple step-by-step experience." },
  {
    icon: Lock,
    title: "Secure",
    text: "Your information is handled according to the provider's policies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    text: "Works on phones, tablets and desktops.",
  },
];

const testimonials = [
  { name: "Sample Testimonial 1", text: "“Great layout and easy to use.”" },
  {
    name: "Sample Testimonial 2",
    text: "“Placeholder review—replace with genuine customer feedback.”",
  },
];

const faqs = [
  { q: "How do I start?", a: "Click the button above and follow the instructions." },
  { q: "How many tasks?", a: "The promotion indicates 5–8 qualifying tasks." },
  {
    q: "When is a reward available?",
    a: "Availability depends on successfully meeting the promotion's terms.",
  },
];

function useCountdown(durationMs: number) {
  const [remaining, setRemaining] = useState(durationMs);

  useEffect(() => {
    const end = Date.now() + durationMs;
    const id = setInterval(() => setRemaining(Math.max(0, end - Date.now())), 1000);
    return () => clearInterval(id);
  }, [durationMs]);

  const h = Math.floor(remaining / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  const s = Math.floor((remaining % 60000) / 1000);
  return [h, m, s].map((x) => String(x).padStart(2, "0"));
}

function Index() {
  const [h, m, s] = useCountdown(7200000);
  const [viewers, setViewers] = useState(27);

  useEffect(() => {
    const id = setInterval(() => setViewers(20 + Math.floor(Math.random() * 25)), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="hero-glow min-h-screen pb-28">
      <div className="mx-auto w-full max-w-[460px] px-4 py-5">
        {/* Banner */}
        <div className="surface flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold tracking-wide">
          <span className="pulse-ring inline-block size-2.5 rounded-full bg-success" />
          Reward promotion
        </div>

        {/* Hero card */}
        <section className="surface mt-4 p-6">
          <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground">
            Exclusive Reward
          </span>
          <h1 className="mt-4 text-[2.6rem] font-bold leading-[1.05]">
            Claim a <span className="text-primary">$750</span>
            <br />
            Home Depot Gift Card
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Complete <strong className="text-foreground">5–8 qualifying tasks</strong> to
            become eligible for the reward, subject to the promotion's terms.
          </p>

          <div className="mt-6 rounded-2xl border border-border bg-secondary p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Required
            </p>
            <h3 className="mt-1 text-lg font-semibold">Complete 5–8 Tasks</h3>
            <h2 className="mt-2 text-3xl font-bold text-primary">$750 Reward</h2>
          </div>

          <a
            href="#"
            className="cta-gradient mt-6 flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-xl font-bold text-primary-foreground transition-transform active:scale-[0.98]"
          >
            Claim Rewards <ArrowRight className="size-6" />
          </a>

          <div className="mt-5 flex items-center justify-center gap-2 font-display text-3xl font-bold tabular-nums">
            {[h, m, s].map((part, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-muted-foreground">:</span>}
                <span className="rounded-xl bg-secondary px-3 py-1.5">{part}</span>
              </span>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="surface mt-4 grid gap-4 p-5">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent">
                <Icon className="size-5 text-accent-foreground" />
              </div>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Review */}
        <section className="surface mt-4 p-5">
          <p className="font-semibold">Sample Review</p>
          <p className="mt-1 text-sm text-muted-foreground">
            “The process was straightforward and easy to follow.”
          </p>
        </section>

        {/* Visitors */}
        <section className="surface mt-4 p-5">
          <p className="flex items-center gap-2 font-semibold">
            <Users className="size-4 text-primary" /> Currently Viewing (Demo)
          </p>
          <p className="mt-1 text-sm text-foreground">{viewers} people viewing this page</p>
          <p className="mt-1 text-xs text-muted-foreground">Demonstration only.</p>
        </section>

        {/* Testimonials */}
        <section className="surface mt-4 p-5">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Star className="size-4 fill-primary text-primary" /> What Users Say
          </h2>
          <div className="mt-3 grid gap-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-secondary p-4">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="surface mt-4 p-5">
          <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>
          <div className="mt-2 divide-y divide-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium">
                  {f.q}
                  <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="py-8 text-center text-xs text-muted-foreground">
          © 2026 Rewards Landing
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/85 px-4 py-3 backdrop-blur-md">
        <a
          href="#"
          className="cta-gradient mx-auto flex w-full max-w-[430px] items-center justify-center gap-2 rounded-2xl px-6 py-4 text-lg font-bold text-primary-foreground transition-transform active:scale-[0.98]"
        >
          Claim Rewards <ArrowRight className="size-5" />
        </a>
      </div>
    </main>
  );
}
