import { Award, HandHeart, Gem, FlaskConical, Armchair, Leaf } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

type Surface = 'dark' | 'light'

type Feature = {
  eyebrow: string
  title: string
  description: string
  icon: LucideIcon
  surface: Surface
}

const features: Feature[] = [
  {
    eyebrow: 'Trayectoria',
    title: 'Tratamientos personalizados',
    description:
      'Adaptamos cada tratamiento a las necesidades de tu piel.',
    icon: Award,
    surface: 'dark',
  },
  {
    eyebrow: 'A tu medida',
    title: 'Experiencia y conocimiento',
    description:
      'Técnica y experiencia para cuidar cada detalle.',
    icon: HandHeart,
    surface: 'light',
  },
  {
    eyebrow: 'Selección',
    title: 'Atención cercana',
    description:
      'Te escuchamos y te asesoramos en cada paso.',
    icon: Gem,
    surface: 'dark',
  },
  {
    eyebrow: 'Innovación',
    title: 'Productos seleccionados',
    description:
      'Cosmética profesional elegida para cada tratamiento.',
    icon: FlaskConical,
    surface: 'light',
  },
  {
    eyebrow: 'Ambiente',
    title: 'Resultados naturales',
    description:
      'Resultados visibles que respetan tu belleza natural.',
    icon: Armchair,
    surface: 'dark',
  },
  {
    eyebrow: 'Bienestar',
    title: 'Un espacio para ti',
    description:
      'Un momento para cuidarte, desconectar y sentirte bien.',
    icon: Leaf,
    surface: 'light',
  },
]

const surfaceStyles: Record<
  Surface,
  {
    card: string
    eyebrow: string
    icon: string
    title: string
    divider: string
    description: string
  }
> = {
  dark: {
    card: 'bg-footer',
    eyebrow: 'text-footer-muted',
    icon: 'text-accent',
    title: 'text-footer-heading',
    divider: 'bg-footer-border',
    description: 'text-footer-foreground',
  },
  light: {
    card: 'bg-secondary',
    eyebrow: 'text-muted-foreground',
    icon: 'text-accent',
    title: 'text-foreground',
    divider: 'bg-border',
    description: 'text-muted-foreground',
  },
}

export function Features() {
  return (
    <section id="lo-que-nos-diferencia" className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
        {/* Section intro */}
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.32em] text-accent">
              Lo que nos diferencia
            </span>
            <h2 className="mt-4 font-serif text-4xl font-light leading-[1.02] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Una experiencia <span className="italic">pensada para ti</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Feature grid */}
        <ScrollReveal
          stagger
          className="mx-auto mt-14 grid max-w-[1120px] grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 md:gap-8 lg:grid-cols-3 lg:gap-10"
        >
          {features.map((feature) => {
            const styles = surfaceStyles[feature.surface]
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className={`group flex min-h-[300px] flex-col rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 md:min-h-[340px] md:p-10 lg:min-h-[360px] ${styles.card}`}
              >
                {/* Top: eyebrow + icon */}
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`text-sm font-medium tracking-wide ${styles.eyebrow}`}
                  >
                    {feature.eyebrow}
                  </span>
                  <Icon
                    className={`size-9 shrink-0 opacity-80 transition-opacity duration-300 group-hover:opacity-100 md:size-10 ${styles.icon}`}
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                </div>

                {/* Spacer pushes title/description toward the bottom */}
                <div className="flex-1" />

                {/* Title */}
                <h3
                  className={`font-serif text-2xl font-normal uppercase leading-[1.05] tracking-tight text-balance md:text-xl ${styles.title}`}
                >
                  {feature.title}
                </h3>

                {/* Divider */}
                <div className={`mt-5 h-px w-full ${styles.divider}`} />

                {/* Description */}
                <p
                  className={`mt-5 text-[0.95rem] leading-relaxed ${styles.description}`}
                >
                  {feature.description}
                </p>
              </article>
            )
          })}
        </ScrollReveal>
      </div>
    </section>
  )
}
