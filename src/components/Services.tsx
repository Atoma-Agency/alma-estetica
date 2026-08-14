import { Sparkles } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

type ServiceVariant = 'dark' | 'light'

const services: {
  number: string
  title: string
  description: string
  variant: ServiceVariant
}[] = [
    {
      number: '01',
      title: 'Tratamientos faciales',
      description:
        'Cuida, revitaliza y transforma tu piel con tratamientos adaptados a sus necesidades.',
      variant: 'dark',
    },
    {
      number: '02',
      title: 'Tratamientos corporales',
      description:
        'Soluciones para cuidar, reafirmar y mejorar el aspecto de tu cuerpo.',
      variant: 'light',
    },
    {
      number: '03',
      title: 'Masajes & bienestar',
      description:
        'Un espacio para liberar tensión, relajarte y regalarte tiempo para ti.',
      variant: 'dark',
    },
    {
      number: '04',
      title: 'Depilación',
      description:
        'Piel suave y cuidada con diferentes opciones de depilación facial y corporal.',
      variant: 'light',
    },
    {
      number: '05',
      title: 'Cejas & pestañas',
      description:
        'Realza tu mirada con diseños y tratamientos que potencian su expresión natural.',
      variant: 'light',
    },
    {
      number: '06',
      title: 'Manicura & pedicura',
      description:
        'Cuidado y belleza para manos y pies, desde el detalle más sencillo hasta el acabado perfecto.',
      variant: 'dark',
    },
    {
      number: '07',
      title: 'Tratamientos premium',
      description:
        'Experiencias de cuidado más completas para quienes buscan un nivel extra de atención.',
      variant: 'light',
    },
    {
      number: '08',
      title: 'Rituales de belleza',
      description:
        'Combinaciones de tratamientos pensadas para disfrutar de una experiencia integral.',
      variant: 'dark',
    },
  ]

function ServiceCard({
  number,
  title,
  description,
  variant,
}: (typeof services)[number]) {
  const isDark = variant === 'dark'

  return (
    <article
      className={`group relative flex min-h-[340px] flex-col justify-between p-8 transition-all duration-300 ease-out hover:-translate-y-0.5 md:min-h-[460px] md:p-10 lg:min-h-[480px] lg:p-6 xl:p-10 ${isDark
          ? 'bg-footer text-footer-foreground hover:bg-footer/90'
          : 'bg-secondary text-secondary-foreground hover:bg-secondary/70'
        }`}
    >
      {/* Top: editorial number */}
      <span
        className={`text-sm font-medium tracking-[0.14em] ${isDark ? 'text-footer-muted' : 'text-muted-foreground'
          }`}
      >
        {number}
      </span>

      {/* Middle / lower: title + divider + description */}
      <div>
        <h3
          className={`break-words font-serif text-4xl font-light leading-[1.05] tracking-tight text-balance md:text-[2.75rem] lg:text-2xl xl:text-3xl 2xl:text-4xl ${isDark ? 'text-footer-heading' : 'text-foreground'
            }`}
        >
          {title}
        </h3>

        <div
          className={`mt-6 h-px w-full ${isDark ? 'bg-footer-border' : 'bg-foreground/15'
            }`}
        />

        <div className="mt-6 flex items-end justify-between gap-4">
          <p
            className={`max-w-[22ch] text-[0.95rem] leading-relaxed ${isDark ? 'text-footer-foreground' : 'text-muted-foreground'
              }`}
          >
            {description}
          </p>
          <Sparkles
            className="size-5 shrink-0 text-accent opacity-70 transition-all duration-300 ease-out group-hover:scale-110 group-hover:opacity-100"
            strokeWidth={1.25}
            aria-hidden="true"
          />
        </div>
      </div>
    </article>
  )
}

export function Services() {
  return (
    <section
      id="services"
      className="w-full bg-white py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
        {/* Introduction */}
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.32em] text-accent">
              Servicios
            </span>
            <h2 className="mt-4 font-serif text-4xl font-light leading-[1.02] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Todo lo que necesitas para cuidarte
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
              Tratamientos de belleza y bienestar diseñados para cuidar tu piel,
              realzar tu belleza y hacer de cada visita un momento para ti.
            </p>
          </div>
        </ScrollReveal>

        {/* Services grid: 4 columns on desktop (2 rows), 2 on tablet, 1 on mobile */}
        <ScrollReveal
          stagger
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
