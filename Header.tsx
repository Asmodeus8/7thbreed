import { Link } from "@tanstack/react-router";
import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-gold to-primary" />
          <span className="text-lg font-semibold tracking-tight">
            SolarPro <span className="text-primary">Lagos</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <Zap className="h-4 w-4" />
            Get Free Quote
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
