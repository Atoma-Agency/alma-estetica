import Link from "next/link";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import type { SVGProps } from "react";
import { ScrollReveal } from "./ScrollReveal";

function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.17 0 4.2.85 5.74 2.38a8.06 8.06 0 0 1 2.38 5.73c0 4.48-3.65 8.12-8.13 8.12a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.05 8.05 0 0 1-1.26-4.32c0-4.48 3.65-8.12 8.13-8.12Zm-2.9 4.34c-.14 0-.36.05-.55.26-.19.2-.72.7-.72 1.72s.74 2 .84 2.13c.1.14 1.44 2.2 3.5 3.08.49.21.87.34 1.17.44.49.16.94.13 1.29.08.39-.06 1.2-.49 1.37-.96.17-.47.17-.88.12-.96-.05-.08-.19-.13-.4-.24-.21-.1-1.24-.61-1.43-.68-.19-.07-.33-.1-.47.11-.14.2-.54.68-.66.82-.12.14-.24.16-.45.05-.21-.1-.88-.32-1.68-1.03-.62-.55-1.04-1.24-1.16-1.44-.12-.21-.01-.32.09-.42.09-.09.21-.24.31-.36.1-.12.14-.2.21-.34.07-.14.03-.26-.02-.36-.05-.1-.46-1.13-.64-1.55-.17-.41-.34-.35-.47-.36l-.4-.01Z" />
    </svg>
  );
}

const details = [
  {
    icon: MapPin,
    content: <>Passeig de Gràcia 42, Barcelona, España</>,
  },
  {
    icon: Clock,
    content: (
      <>
        Lunes a viernes 9:00 - 21:00
        <br />
        Sábados 10:00 - 20:00
      </>
    ),
  },
  {
    icon: WhatsappIcon,
    content: <>+34 699 14 58 87</>,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto w-full max-w-360 px-6 md:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.32em] text-accent">
              Contacto
            </span>
            <h2 className="mt-4 font-serif text-4xl font-light leading-[1.02] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Tu momento empieza aquí
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
              ¿Lista para dedicarte un poco de tiempo? Visítanos y descubre un
              espacio pensado para cuidar de ti, con tratamientos adaptados a lo
              que necesitas.
            </p>
          </div>
        </ScrollReveal>

        {/* Content grid */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Map placeholder */}
          <ScrollReveal>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-border bg-muted">
              {/* Reemplaza este bloque por tu iframe de Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.870844571754!2d2.1638382759381294!3d41.391390371299394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2ed651a4bd5%3A0x153a5a95eda1b4c1!2sP.%C2%BA%20de%20Gracia%2C%2042%2C%20Eixample%2C%2008007%20Barcelona!5e1!3m2!1ses!2ses!4v1786445393152!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={100}>
            <div className="max-w-xl">
              <ul className="flex flex-col gap-6">
                {details.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-center gap-4">
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-accent">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-[0.95rem] leading-relaxed text-foreground">
                        {item.content}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#book"
                  className="inline-flex items-center justify-center gap-2 bg-foreground px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Reservar cita
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
