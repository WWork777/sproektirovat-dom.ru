import FeaturedProperty from "@/components/Home/FeaturedProperty";
import Hero from "@/components/Home/Hero";
import Properties from "@/components/Home/Properties";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Home/Testimonial";
import BlogSmall from "@/components/shared/Blog";
import GetInTouch from "@/components/Home/GetInTouch";
import FAQ from "@/components/Home/FAQs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Проектирование и строительство домов в Кемерово под ключ | Архитек",
  description:
    "Профессиональное проектирование и строительство домов в Кемерово и области. Индивидуальные проекты, качественные материалы, гарантия на работы. Строим дома под ключ по доступным ценам.",
  keywords:
    "строительство домов Кемерово, проектирование домов, дома под ключ, строительство коттеджей, загородные дома Кемеровская область",

  openGraph: {
    title: "Проектирование и строительство домов в Кемерово | Архитек",
    description:
      "Строим качественные дома под ключ в Кемерово и области. Индивидуальные проекты, гарантия качества.",
    type: "website",
    locale: "ru_RU",
    siteName: "Архитек",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Строительство домов в Кемерово",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "ваш-google-verification-code",
    yandex: "ваш-yandex-verification-code",
  },

  alternates: {
    canonical: "https://sproektirovat-dom.ru",
  },

  manifest: "/manifest.json",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  themeColor: "#ffffff",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Properties />
      <FeaturedProperty />
      <Testimonial />
      <BlogSmall />
      <GetInTouch />
      <FAQ />
    </main>
  );
}
