import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Проекты домов | Архитек - Проектирование и строительство в Кемерово",
  description:
    "Каталог готовых проектов домов от Архитек. Проектирование и строительство домов под ключ в Кемерово. Сельская ипотека 3%, рассрочка 0%. Более 25 лет опыта.",
  keywords:
    "проекты домов, готовые проекты, строительство домов Кемерово, проектирование домов, сельская ипотека, рассрочка, дома под ключ, архитектура",
  authors: [{ name: "Архитек" }],
  publisher: "Архитек",
  creator: "Архитек",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Проекты домов | Архитек - Проектирование и строительство в Кемерово",
    description:
      "Каталог готовых проектов домов от Архитек. Проектирование и строительство домов под ключ в Кемерово.",
    type: "website",
    siteName: "Архитек",
    locale: "ru_RU",
    images: [
      {
        url: "/images/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Проекты домов от Архитек",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Проекты домов | Архитек",
    description:
      "Каталог готовых проектов домов от Архитек. Проектирование и строительство в Кемерово.",
    images: ["/images/og-projects.jpg"],
  },
  alternates: {
    canonical: "https://sproektirovat-dom.ru/properties",
  },
  other: {
    "yandex-verification": process.env.YANDEX_VERIFICATION || "",
    "google-site-verification": process.env.GOOGLE_VERIFICATION || "",
  },
};

const page = () => {
  return (
    <>
      <HeroSub
        title="Откройте для себя дома с вдохновляющим дизайном."
        description="Тщательно подобранные дома, в которых сочетаются элегантность, стиль и комфорт."
        badge="Проекты"
      />
      <PropertiesListing />
    </>
  );
};

export default page;
