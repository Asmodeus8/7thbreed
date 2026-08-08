import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Zap } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-gold to-primary" />
            <span className="text-lg font-semibold tracking-tight">
              SolarPro <span className="text-primary">Lagos</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Professional solar installation across Lagos. Quality panels, hybrid inverters,
            and 10+ years of trusted installations — from Osapa to Victoria Island.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Zap className="h-4 w-4" />
            Get Free Quote
          </Link>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-foreground">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2 hover:text-foreground">
                <Phone className="h-4 w-4 text-primary" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                {site.email}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                12 Ganiu Eletu Way, Osapa London, Lekki, Lagos, Nigeria
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SolarPro Lagos. All rights reserved.</p>
          <p>Mon – Sat: 8am – 6pm · Emergency support 24/7</p>
        </div>
      </div>
    </footer>
  );
}
