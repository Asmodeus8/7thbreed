import { Link } from "@tanstack/react-router";
import { Check, Zap } from "lucide-react";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="h-px w-8 bg-primary" />
      {children}
    </span>
  );
}

export function PrimaryLink({
  to,
  children,
  className = "",
}: {
  to: "/" | "/products" | "/contact";
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 ${className}`}
    >
      <Zap className="h-4 w-4" />
      {children}
    </Link>
  );
}

export function ProductCard({
  image,
  name,
  tag,
  badge,
  price,
  specs,
}: {
  image: string;
  name: string;
  tag: string;
  badge?: string | undefined;
  price: string;
  specs: string[];
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary/50">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[11px] font-medium text-primary-foreground">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {tag}
        </span>
        <h3 className="mt-2 text-lg font-semibold leading-snug">{name}</h3>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {specs.map((s) => (
            <li key={s} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
          <div>
            <p className="text-[11px] text-muted-foreground">Starting from</p>
            <p className="text-xl font-semibold text-gold">{price}</p>
          </div>
          <Link
            to="/contact"
            className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </article>
  );
}
