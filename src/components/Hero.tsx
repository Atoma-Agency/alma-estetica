import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-360 px-6 pb-20 md:px-12 md:pb-28 lg:flex lg:min-h-[calc(100svh-7rem)] lg:items-center lg:pb-0">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
        {/* Content */}
        <div className="order-2 max-w-xl lg:order-1">
          <span className="text-xs font-medium uppercase tracking-[0.32em] text-muted-foreground">
            Estética · Bienestar · Cuidado
          </span>

          <h1 className="mt-6 font-serif text-4xl font-light leading-none tracking-tight text-balance text-foreground sm:text-5xl lg:mt-7 lg:text-6xl xl:text-7xl">
            Tu piel,
            <br />
            <span className="italic font-normal">tu momento.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
            Tratamientos faciales y corporales diseñados para cuidar de ti,
            realzar tu belleza y convertir cada visita en un momento para
            desconectar.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#book"
              className="inline-flex items-center justify-center gap-2 bg-foreground px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Reservar cita
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="#treatments"
              className="inline-flex items-center justify-center border border-foreground/25 px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground"
            >
              Descubrir tratamientos
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2">
          <div
            aria-hidden="true"
            className="absolute inset-3 rounded-tl-[6rem] rounded-tr-3xl rounded-br-[6rem] rounded-bl-3xl border border-accent/35 sm:rounded-tl-[8rem] sm:rounded-br-[8rem] lg:rounded-tl-[11rem] lg:rounded-br-[11rem]"
          />
          <div className="relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-tl-[6rem] rounded-tr-3xl rounded-br-[6rem] rounded-bl-3xl border border-border sm:aspect-5/6 sm:rounded-tl-[8rem] sm:rounded-br-[8rem] lg:aspect-auto lg:h-[calc(100svh-12rem)] lg:max-h-140 lg:max-w-none lg:rounded-tl-[11rem] lg:rounded-br-[11rem]">
            <Image
              src="/images/salon-interior.png"
              alt="Interior of a contemporary aesthetic studio with a treatment bed, tall arched mirror and soft natural light"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
