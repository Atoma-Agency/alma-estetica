import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata = {
  title: "Alma Estética | Centro de Estética en Barcelona",
  description: "Descubre Alma Estética, tu centro de estética en Barcelona. Tratamientos faciales y corporales, depilación, manicura, bienestar y mucho más.",
  openGraph: {
    title: "Alma Estética | Centro de Estética en Barcelona",
    description: "Descubre Alma Estética, tu centro de estética en Barcelona. Tratamientos faciales y corporales, depilación, manicura, bienestar y mucho más.",
    url: "https://alma-estetica.netlify.app",
    siteName: "Alma Estética",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alma Estética",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alma Estética | Centro de Estética en Barcelona",
    description: "Descubre Alma Estética, tu centro de estética en Barcelona. Tratamientos faciales y corporales, depilación, manicura, bienestar y mucho más.",
    images: ["/og-image.jpg"],
  },

};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${cormorant.variable} bg-background`}
    >
      <body className="font-sans antialiased"><SmoothScroll />{children}</body>
    </html>
  );
}
