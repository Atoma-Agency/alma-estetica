import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

export function AboutUs() {
  return (
    <section id="el-centro" className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 md:px-12 lg:grid-cols-[520px_1fr] lg:gap-20">
        <ScrollReveal className="order-2 lg:order-none">
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg border border-border sm:rounded-2xl">
            <Image
              src="/images/el-centro.png"
              alt="Interior de Alma Estética, un espacio sereno y luminoso"
              fill
              sizes="520px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white/15" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100} className="order-1 lg:order-none">
          <div className="max-w-xl lg:py-8">
            <span className="text-xs font-medium uppercase tracking-[0.32em] text-accent">
              Un espacio para ti
            </span>

            <h2 className="mt-4 font-serif text-4xl font-light leading-[1.02] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              El centro
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
              <p>
                En Alma Estética hemos creado un lugar donde el cuidado va más
                allá de un tratamiento. Un espacio tranquilo, luminoso y acogedor,
                pensado para que puedas desconectar del ritmo diario y dedicarte
                un momento solo para ti.
              </p>

              <p>
                Cada detalle está elegido para crear una experiencia serena y
                personal. Desde la atención cercana hasta nuestros espacios de
                tratamiento, queremos que cada visita sea un pequeño ritual de
                bienestar, donde belleza y cuidado se encuentren de forma natural.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
