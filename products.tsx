import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Phone, Zap } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow, ProductCard, Section } from "@/components/ui-kit";
import { comparison, products, site } from "@/data/site";

const heroImage =
  "https://images.unsplash.com/photo-1574360773950-133867861ae9?auto=format&fit=crop&w=2000&q=70";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Solar Products & Packages — SolarPro Lagos" },
      {
        name: "description",
        content:
          "Solar panels, hybrid inverters, lithium batteries and complete installation packages from ₦650,000 — professionally installed by our Lagos-based team.",
      },
      { property: "og:title", content: "Solar Products & Packages — SolarPro Lagos" },
      {
        property: "og:description",
        content:
          "Compare Starter, Standard, Premium and Commercial solar packages with transparent Lagos pricing.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: ProductsPage,
});

const categories = [
  "All",
  "Solar Panels",
  "Inverters",
  "Batteries",
  "Complete Packages",
] as const;

function ProductsPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const visible = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative overflow-hidden pt-44 pb-20">
          <img
            src={heroImage}
            alt="Rows of solar panels under a deep blue sky"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
          <div className="container-x relative max-w-3xl">
            <Eyebrow>Our Products</Eyebrow>
            <h1 className="mt-6 text-5xl font-medium tracking-tight sm:text-6xl">
              Solar Products &amp; Packages
            </h1>
            <p className="mt-6 text-muted-foreground">
              Quality panels, inverters, batteries, and complete installation packages — all
              with professional installation by our Lagos-based team.
            </p>
          </div>
        </section>

        <Section className="pt-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => {
              const count =
                c === "All" ? products.length : products.filter((p) => p.category === c).length;
              const isActive = c === active;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                >
                  {c}
                  {c !== "All" && <span className="ml-1.5 opacity-70">({count})</span>}
                </button>
              );
            })}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <ProductCard
                key={p.name}
                image={p.image}
                name={p.name}
                tag={p.category}
                badge={p.badge}
                price={p.price}
                specs={p.specs}
              />
            ))}
          </div>
        </Section>

        {/* Comparison */}
        <Section className="bg-surface/30">
          <div className="max-w-2xl">
            <Eyebrow>Compare Packages</Eyebrow>
            <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
              Find the Right Package
            </h2>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[820px] border-collapse text-sm">
              <thead>
                <tr className="bg-surface">
                  <th className="p-5 text-left font-medium text-muted-foreground">Feature</th>
                  {comparison.packages.map((p) => (
                    <th key={p.name} className="p-5 text-left font-semibold">
                      {p.name}
                      {p.popular && (
                        <span className="ml-2 rounded-full bg-primary px-2.5 py-1 text-[10px] font-medium text-primary-foreground">
                          Most Popular
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr key={row.feature} className="border-t border-border">
                    <td className="p-5 text-muted-foreground">{row.feature}</td>
                    {row.values.map((v, i) => (
                      <td
                        key={i}
                        className={`p-5 ${row.feature === "Price" ? "font-semibold text-gold" : ""}`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-border">
                  <td className="p-5" />
                  {comparison.packages.map((p) => (
                    <td key={p.name} className="p-5">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                      >
                        Get Quote
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section>
          <div className="rounded-3xl border border-border bg-surface p-10 text-center md:p-16">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Not sure what you need?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Our engineers will assess your home or business and recommend the perfect solar
              solution. Free consultation, no obligation.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Zap className="h-4 w-4" />
                Book Free Energy Audit
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium transition-colors hover:border-primary"
              >
                <Phone className="h-4 w-4" />
                Call {site.phone}
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {["5-year warranty", "Certified engineers", "Flexible payment plans"].map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
