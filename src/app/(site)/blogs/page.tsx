import BlogList from "@/components/Blog";
import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог о строительстве и недвижимости | Архитек",
  description:
    "Экспертные статьи о строительстве частных домов, тенденциях в недвижимости, современных технологиях и материалах. Советы профессионалов для вашего проекта.",
  keywords:
    "строительство, недвижимость, частные дома, архитектура, ремонт, дизайн, технологии строительства",
  authors: [{ name: "Архитек" }],
  publisher: "Архитек",
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
  openGraph: {
    title: "Блог о строительстве и недвижимости | Архитек",
    description:
      "Экспертные статьи о строительстве частных домов и тенденциях в недвижимости",
    type: "website",
    siteName: "Архитек",
    images: [
      {
        url: "/images/blog/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "Архитек - Блог о строительстве",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Блог о строительстве и недвижимости | Архитек",
    description:
      "Экспертные статьи о строительстве частных домов и тенденциях в недвижимости",
    images: ["/images/blog/blog-og.jpg"],
    creator: "@arhitek",
  },
  alternates: {
    canonical: "https://sproektirovat-dom.ru/blogs",
  },
  other: {
    language: "ru",
    "content-language": "ru",
  },
};

const Blog = () => {
  return (
    <>
      <HeroSub
        title="Информация о недвижимости."
        description="Оставайтесь впереди всех на рынке недвижимости благодаря экспертным советам и обновлениям"
        badge="Блог"
      />
      <BlogList />
    </>
  );
};

export default Blog;
