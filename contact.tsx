import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow, Section } from "@/components/ui-kit";
import { faqs, site } from "@/data/site";

const heroImage =
  "https://img.rocket.new/generatedImages/rocket_gen_img_14bd37c9f-1785207255495.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get a Free Solar Quote — SolarPro Lagos" },
      {
        name: "description",
        content:
          "Tell us about your energy needs and our Lagos engineers will design the perfect solar system. Free quote, response within 2 hours.",
      },
      { property: "og:title", content: "Get a Free Solar Quote — SolarPro Lagos" },
      {
        property: "og:description",
        content:
          "Free, no-obligation solar consultation for homes and businesses across Lagos.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: ContactPage,
});

const steps = [
  { n: 1, label: "Step 1", title: "Personal Info" },
  { n: 2, label: "Step 2", title: "Energy Needs" },
  { n: 3, label: "Step 3", title: "Preferences" },
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

// Formspree endpoint for the quote request form — notifications + submission
// details land in the inbox connected to this form on formspree.io.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/myegkokn";

type QuoteFormData = {
  fullName: string;
  phone: string;
  email: string;
  streetAddress: string;
  area: string;
  propertyType: string;
  monthlySpend: string;
  appliances: string;
  package: string;
  budget: string;
  notes: string;
};

const initialFormData: QuoteFormData = {
  fullName: "",
  phone: "",
  email: "",
  streetAddress: "",
  area: "",
  propertyType: "Residential",
  monthlySpend: "₦50,000 – ₦100,000",
  appliances: "",
  package: "Standard 5KVA",
  budget: "₦650,000 – ₦1,000,000",
  notes: "",
};

function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const updateField =
    (field: keyof QuoteFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          "Full Name": formData.fullName,
          "Phone Number": formData.phone,
          "Email Address": formData.email,
          "Street Address": formData.streetAddress,
          "Area / Estate": formData.area,
          "Property Type": formData.propertyType,
          "Monthly Energy Spend": formData.monthlySpend,
          "Appliances to Power": formData.appliances,
          "Preferred Package": formData.package,
          "Budget Range": formData.budget,
          "Additional Notes": formData.notes,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong sending your request. Please try again, or reach us on WhatsApp below.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative overflow-hidden pt-44 pb-20">
          <img
            src={heroImage}
            alt="Solar installation team working on a rooftop in safety gear"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
          <div className="container-x relative max-w-3xl">
            <Eyebrow>Free Quote</Eyebrow>
            <h1 className="mt-6 text-5xl font-medium tracking-tight sm:text-6xl">
              Get Your Free Solar Quote
            </h1>
            <p className="mt-6 text-muted-foreground">
              Tell us about your energy needs and we will design the perfect solar system for
              your Lagos home or business.
            </p>
          </div>
        </section>

        <Section className="pt-4">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
            {/* Form */}
            <div className="rounded-2xl border border-border bg-surface p-7 md:p-10">
              <ol className="flex flex-wrap gap-6">
                {steps.map((s) => (
                  <li key={s.n} className="flex items-center gap-3">
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-full text-sm font-medium ${
                        step >= s.n
                          ? "bg-primary text-primary-foreground"
                          : "border border-border text-muted-foreground"
                      }`}
                    >
                      {s.n}
                    </span>
                    <span>
                      <span className="block text-[11px] uppercase tracking-widest text-muted-foreground">
                        {s.label}
                      </span>
                      <span className="text-sm font-medium">{s.title}</span>
                    </span>
                  </li>
                ))}
              </ol>

              {submitted ? (
                <div className="mt-10 rounded-xl border border-primary/40 bg-primary/10 p-8 text-center">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary">
                    <Check className="h-6 w-6 text-primary-foreground" />
                  </span>
                  <h2 className="mt-5 text-xl font-semibold">Request received</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thanks! Our engineers will get back to you within 2 hours during working
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-10">
                  {step === 1 && (
                    <>
                      <h2 className="text-xl font-semibold">Personal Information</h2>
                      <div className="mt-6 grid gap-5 sm:grid-cols-2">
                        <label className="block text-sm">
                          Full Name <span className="text-primary">*</span>
                          <input
                            required
                            name="fullName"
                            value={formData.fullName}
                            onChange={updateField("fullName")}
                            className={fieldClass}
                            placeholder="Your full name"
                          />
                        </label>
                        <label className="block text-sm">
                          Phone Number <span className="text-primary">*</span>
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={updateField("phone")}
                            className={fieldClass}
                            placeholder="+234 800 000 0000"
                          />
                        </label>
                        <label className="block text-sm sm:col-span-2">
                          Email Address <span className="text-primary">*</span>
                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={updateField("email")}
                            className={fieldClass}
                            placeholder="you@email.com"
                          />
                        </label>
                        <label className="block text-sm sm:col-span-2">
                          Street Address
                          <input
                            name="streetAddress"
                            value={formData.streetAddress}
                            onChange={updateField("streetAddress")}
                            className={fieldClass}
                            placeholder="Street address"
                          />
                        </label>
                        <label className="block text-sm sm:col-span-2">
                          Area / Estate <span className="text-primary">*</span>
                          <input
                            required
                            name="area"
                            value={formData.area}
                            onChange={updateField("area")}
                            className={fieldClass}
                            placeholder="e.g. Osapa London, Lekki"
                          />
                        </label>
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <h2 className="text-xl font-semibold">Energy Needs</h2>
                      <div className="mt-6 grid gap-5 sm:grid-cols-2">
                        <label className="block text-sm">
                          Property Type
                          <select
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={updateField("propertyType")}
                            className={fieldClass}
                          >
                            <option>Residential</option>
                            <option>Commercial</option>
                          </select>
                        </label>
                        <label className="block text-sm">
                          Monthly Energy Spend
                          <select
                            name="monthlySpend"
                            value={formData.monthlySpend}
                            onChange={updateField("monthlySpend")}
                            className={fieldClass}
                          >
                            <option>Under ₦50,000</option>
                            <option>₦50,000 – ₦100,000</option>
                            <option>₦100,000 – ₦300,000</option>
                            <option>Above ₦300,000</option>
                          </select>
                        </label>
                        <label className="block text-sm sm:col-span-2">
                          Appliances to Power
                          <textarea
                            rows={4}
                            name="appliances"
                            value={formData.appliances}
                            onChange={updateField("appliances")}
                            className={fieldClass}
                            placeholder="e.g. Lights, fans, fridge, 2 ACs, TV"
                          />
                        </label>
                      </div>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <h2 className="text-xl font-semibold">Preferences</h2>
                      <div className="mt-6 grid gap-5 sm:grid-cols-2">
                        <label className="block text-sm">
                          Preferred Package
                          <select
                            name="package"
                            value={formData.package}
                            onChange={updateField("package")}
                            className={fieldClass}
                          >
                            <option>Starter 3.5KVA</option>
                            <option>Standard 5KVA</option>
                            <option>Premium 10KVA</option>
                            <option>Commercial 20KVA</option>
                            <option>Not sure — advise me</option>
                          </select>
                        </label>
                        <label className="block text-sm">
                          Budget Range
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={updateField("budget")}
                            className={fieldClass}
                          >
                            <option>Under ₦650,000</option>
                            <option>₦650,000 – ₦1,000,000</option>
                            <option>₦1,000,000 – ₦2,000,000</option>
                            <option>Above ₦2,000,000</option>
                          </select>
                        </label>
                        <label className="block text-sm sm:col-span-2">
                          Additional Notes
                          <textarea
                            rows={4}
                            name="notes"
                            value={formData.notes}
                            onChange={updateField("notes")}
                            className={fieldClass}
                            placeholder="Anything else we should know?"
                          />
                        </label>
                      </div>
                    </>
                  )}

                  {error && (
                    <p className="mt-6 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-700">
                      {error}
                    </p>
                  )}

                  <div className="mt-9 flex flex-wrap gap-4">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:border-primary"
                      >
                        Back
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {step === 1 && "Next: Energy Needs"}
                      {step === 2 && "Next: Preferences"}
                      {step === 3 && (
                        <>
                          <Send className="h-4 w-4" />
                          {submitting ? "Sending…" : "Submit Request"}
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-surface p-7">
                <h2 className="text-lg font-semibold">Speak to Us Directly</h2>
                <div className="mt-5 space-y-3">
                  <a
                    href={site.phoneHref}
                    className="flex items-start gap-3 rounded-xl border border-border p-4 transition-colors hover:border-primary"
                  >
                    <Phone className="mt-0.5 h-5 w-5 text-primary" />
                    <span>
                      <span className="block text-sm font-medium">Call / WhatsApp</span>
                      <span className="text-sm text-muted-foreground">{site.phone}</span>
                    </span>
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-start gap-3 rounded-xl border border-border p-4 transition-colors hover:border-primary"
                  >
                    <Mail className="mt-0.5 h-5 w-5 text-primary" />
                    <span>
                      <span className="block text-sm font-medium">Email</span>
                      <span className="text-sm text-muted-foreground">{site.email}</span>
                    </span>
                  </a>
                </div>

                <div className="mt-6 space-y-5 border-t border-border pt-6 text-sm">
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">Office Address</p>
                      {site.address.map((line) => (
                        <p key={line} className="text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">Working Hours</p>
                      <p className="text-muted-foreground">Mon – Sat: 8am – 6pm</p>
                      <p className="text-muted-foreground">Emergency support: 24/7</p>
                    </div>
                  </div>
                </div>

                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-7">
                <h2 className="text-lg font-semibold">Why Choose SolarPro Lagos?</h2>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {[
                    "5-year system warranty",
                    "Certified installation engineers",
                    "Flexible payment plans available",
                    "500+ successful installations",
                    "24/7 after-sales support",
                    "Based in Osapa London, Lagos",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-border">
                <img
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_12188679d-1786055154841.png"
                  alt="Aerial map view of Osapa London, Lekki peninsula, Lagos"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-semibold">Osapa London, Lekki</p>
                  <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    We serve all of Lagos — Lekki, VI, Ajah, Ikeja, and beyond
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section className="bg-surface/30 pt-0">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-4xl font-medium tracking-tight sm:text-5xl">
              Common Questions
            </h2>
            <div className="mt-12 space-y-3">
              {faqs.map((faq, i) => {
                const open = openFaq === i;
                return (
                  <div key={faq.q} className="rounded-xl border border-border bg-surface">
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-medium"
                      aria-expanded={open}
                    >
                      {faq.q}
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
                      />
                    </button>
                    {open && (
                      <p className="border-t border-border p-5 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
