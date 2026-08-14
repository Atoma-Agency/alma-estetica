"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { HeroEntrance } from "./HeroEntrance";

const navItems = [
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "El centro", href: "#el-centro" },
  { label: "Lo que nos diferencia", href: "#lo-que-nos-diferencia" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <HeroEntrance
      as="header"
      duration={1200}
      fromY={-8}
      className="relative z-50 mx-auto flex w-full max-w-360 items-center justify-between px-6 py-6 md:px-12 md:py-8"
    >
      <Link
        href="/"
        className="font-serif text-xl tracking-tight text-foreground md:text-2xl"
      >
        Alma <span className="italic">Estética</span>
      </Link>

      <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link
        href="#book"
        className="hidden items-center border border-foreground/25 px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground lg:inline-flex"
      >
        Reservar cita
      </Link>

      {/* Mobile menu toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex items-center justify-center p-2 text-foreground transition-colors hover:text-accent lg:hidden"
      >
        {open ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-50 border-t border-border bg-background px-6 pb-8 pt-4 shadow-sm lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center border border-foreground/25 px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
          >
            Reservar cita
          </Link>
        </div>
      )}
    </HeroEntrance>
  );
}
