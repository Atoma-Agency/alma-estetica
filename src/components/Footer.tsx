import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";
import type { SVGProps } from "react";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.5 3c.3 2.2 1.6 3.7 3.7 3.9v2.5c-1.3.1-2.5-.3-3.7-1v5.6c0 3.3-2.4 5.5-5.4 5.5-2.9 0-5.1-2.2-5.1-5 0-2.9 2.4-5 5.4-4.8v2.6c-.4-.1-.8-.2-1.2-.2-1.3 0-2.3 1-2.3 2.4 0 1.3 1 2.3 2.3 2.3 1.4 0 2.4-1 2.4-2.7V3h3.6z" />
    </svg>
  );
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const navItems = [
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "El centro", href: "#el-centro" },
  { label: "Lo que nos diferencia", href: "#lo-que-nos-diferencia" },
  { label: "Contacto", href: "#contacto" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "TikTok", href: "https://tiktok.com", icon: TiktokIcon },
  { label: "YouTube", href: "https://youtube.com", icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto w-full max-w-360 px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-16 md:grid-cols-3 md:gap-8 lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl tracking-tight text-footer-heading"
            >
              Alma <span className="italic">Estética</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-footer-foreground">
              Cuidado facial y corporal en un espacio pensado para desconectar,
              cuidarte y sentirte bien.
            </p>

            <ul className="mt-6 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex size-9 items-center justify-center rounded-lg border border-footer-border text-footer-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Navegación
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[0.95rem] text-footer-foreground transition-colors hover:text-footer-heading"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Contacto
            </h2>
            <ul className="mt-6 flex flex-col gap-5 text-[0.95rem] text-footer-foreground">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>Passeig de Gràcia 42, Barcelona, Spain</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>
                  Lunes a viernes 9:00 – 21:00
                  <br />
                  Sábados 10:00 – 20:00
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <a
                  href="tel:+34699145887"
                  className="transition-colors hover:text-footer-heading"
                >
                  +34 699 14 58 87
                </a>
              </li>
            </ul>

            <Link
              href="#book"
              className="mt-7 inline-flex items-center bg-accent px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              Reservar cita
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-footer-border">
        <div className="text-center mx-auto flex w-full max-w-360 flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row md:px-12">
          <p className="text-xs text-footer-muted">
            © {new Date().getFullYear()} Alma Estética. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-footer-muted transition-colors hover:text-footer-heading">
            Powered by Atoma
          </p>
        </div>
      </div>
    </footer>
  );
}
