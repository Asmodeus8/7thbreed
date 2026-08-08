import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Eye,
  Gauge,
  Home,
  ShieldCheck,
  Star,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow, ProductCard, Section } from "@/components/ui-kit";
import {
  featuredProducts,
  heroImage,
  projects,
  services,
  site,
  stats,
  testimonials,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SolarPro Lagos — Solar Installation & Inverters in Lagos" },
      {
        name: "description",
        content:
          "Professional solar installation across Lagos. Hybrid inverters, lithium batteries and complete home packages with a 5-year warranty. Get a free quote today.",
      },
      { property: "og:title", content: "SolarPro Lagos — Stop Paying NEPA Bills" },
      {
        property: "og:description",
        content:
          "Quality panels, hybrid inverters and 10+ years of trusted solar installations across Lagos.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: HomePage,
});

const icons = { home: Home, building: Building2, wrench: Wrench, gauge: Gauge };

function useCountUp(target: number) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return { ref, value };
}

function StatCard({ stat }: { stat: (typeof stats)[number] }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div ref={ref} className="rounded-2xl border border-border bg-surface p-7">
      <p className="text-4xl font-semibold text-primary">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-3 font-medium">{stat.label}</p>
      <p className="mt-1 text-sm text-muted-foreground">{stat.sub}</p>
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20">
          <img
            src={heroImage}
            alt="Solar panels installed on a rooftop in Lagos under bright sunlight"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />

          <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Eyebrow>Lagos #1 Solar Installer</Eyebrow>
              <h1 className="mt-6 text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Stop Paying <span className="text-primary">NEPA Bills.</span>
                <br />
                Own Your Power.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Professional solar installation across Lagos — from Osapa to Victoria Island.
                Quality panels, hybrid inverters, and 10+ years of trusted installations.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Zap className="h-4 w-4" />
                  Get Free Quote
                </Link>
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium transition-colors hover:border-primary"
                >
                  <Eye className="h-4 w-4" />
                  View Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" /> 5-Year Warranty
                </span>
                <span className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-gold" /> 98% Satisfaction
                </span>
                <span className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-primary" /> 24/7 Support
                </span>
              </div>
            </div>

            <div className="glass-card w-full max-w-sm justify-self-end p-6 lg:mb-40">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </span>
                <div>
                  <p className="font-medium">Latest Installation</p>
                  <p className="text-sm text-muted-foreground">Osapa London, Lagos</p>
                </div>
              </div>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">System Size</dt>
                  <dd className="font-medium text-gold">9.6 KWP</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Inverter</dt>
                  <dd className="font-medium">10KVA Hybrid</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Storage</dt>
                  <dd className="font-medium">12.8 KWH</dd>
                </div>
              </dl>
              <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
                System Active — 24/7
              </div>
            </div>
          </div>

          <ChevronDown className="absolute bottom-8 left-1/2 h-6 w-6 -translate-x-1/2 animate-bounce text-muted-foreground" />
        </section>

        {/* Stats */}
        <section className="border-y border-border bg-surface/30 py-16">
          <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <StatCard key={s.label} stat={s} />
            ))}
          </div>
        </section>

        {/* Services */}
        <Section>
          <div className="max-w-2xl">
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
              Everything Solar, Under One Roof
            </h2>
            <p className="mt-5 text-muted-foreground">
              From initial audit to installation and ongoing maintenance — SolarPro Lagos
              handles it all.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = icons[service.icon as keyof typeof icons];
              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-primary/50"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15">
                    <Icon className="h-6 w-6 text-primary" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </Section>

        {/* Featured products */}
        <Section className="bg-surface/30">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <Eyebrow>Featured Products</Eyebrow>
              <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
                Top Solar Solutions
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
            >
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <Eyebrow>Our Work</Eyebrow>
              <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
                Recent Installations
              </h2>
              <p className="mt-5 text-muted-foreground">
                Trusted by hundreds of Lagos homeowners and businesses.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
            >
              All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <article
                key={project.location}
                className="group relative overflow-hidden rounded-2xl border border-border"
              >
                <img
                  src={project.image}
                  alt={`${project.type} solar installation at ${project.location}, Lagos`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="rounded-full bg-primary/20 px-3 py-1 text-[11px] text-primary">
                    {project.type}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{project.location}</h3>
                  <p className="text-sm text-muted-foreground">{project.size}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        <Section className="bg-surface/30">
          <div className="max-w-2xl">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
              What Lagos Says About Us
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-surface p-8"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-gold" />
                  ))}
                </div>
                <blockquote className="mt-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-border pt-6">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                    <p className="mt-1 text-xs text-primary">{t.system}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <img
            src="https://images.unsplash.com/photo-1723281443782-1b37dca97fdc?auto=format&fit=crop&w=2000&q=70"
            alt="Solar panels at sunset in warm orange light"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background" />
          <div className="container-x relative max-w-3xl text-center">
            <Eyebrow>Free Consultation</Eyebrow>
            <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
              Ready to Go Solar?
              <br />
              Get Your Free Quote Today.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Our engineers will assess your energy needs and recommend the perfect system. No
              obligation, completely free.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Zap className="h-4 w-4" />
                Get Free Quote
              </Link>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium transition-colors hover:border-primary"
              >
                WhatsApp Us
              </a>
            </div>
            <p className="mt-8 text-xs text-muted-foreground">
              Response within 2 hours · Osapa London, Lagos · {site.phone}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
