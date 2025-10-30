import React from "react";
import { propertyHomes } from "@/app/api/propertyhomes";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

// Генерируем метаданные для SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = propertyHomes.find((item) => item.slug === slug);

  if (!item) {
    return {
      title: "Проект не найден",
      description: "Запрошенный проект дома не найден",
    };
  }

  const metaTitle = `${item.name} - Проект дома в Кемерово | Строительство под ключ`;
  const metaDescription = item.textFirst
    ? `${item.textFirst.substring(0, 160)}...`
    : `Проект дома ${item.name} в Кемерово. Площадь ${item.area} м², ${item.beds} спальни. Строительство домов под ключ.`;

  const metaImage = item.images?.[0]?.src || "/images/default-property.jpg";

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: `${item.name}, проект дома, строительство домов Кемерово, дом под ключ, ${item.area} м², ${item.beds} спальни`,

    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      type: "website",
      locale: "ru_RU",
      url: `https://arhitek.ru/properties/${item.slug}`,
    },

    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },

    alternates: {
      canonical: `https://arhitek.ru/properties/${item.slug}`,
    },
  };
}

// Генерируем статические параметры для SSG
export async function generateStaticParams() {
  return propertyHomes.map((item) => ({
    slug: item.slug,
  }));
}

// Структурированные данные для Schema.org
function StructuredData({ item }: { item: any }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SingleFamilyResidence",
    name: item?.name,
    description:
      item?.textFirst?.substring(0, 160) || `Проект дома ${item?.name}`,
    numberOfRooms: item?.beds,
    floorSize: `${item?.area} м²`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Кемерово",
      addressRegion: "Кемеровская область",
    },
    image: item?.images?.map((img: any) => img.src),
    offers: {
      "@type": "Offer",
      price: item?.rate?.replace(/[^\d]/g, ""),
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default async function Details({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = propertyHomes.find((item) => item.slug === slug);

  if (!item) {
    return (
      <section className="!pt-44 pb-20 relative">
        <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
          <h1 className="text-3xl font-semibold text-dark dark:text-white text-center">
            Проект не найден
          </h1>
        </div>
      </section>
    );
  }

  return (
    <>
      <StructuredData item={item} />

      <section className="!pt-44 pb-20 relative">
        <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
          {/* Заголовок и основная информация */}
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="lg:col-span-8 col-span-12">
              <h1 className="lg:text-52 text-40 font-semibold text-dark dark:text-white">
                {item.name}
              </h1>
              <div className="flex gap-2.5">
                <Icon
                  icon="ph:map-pin"
                  width={24}
                  height={24}
                  className="text-dark/50 dark:text-white/50"
                />
                <p className="text-dark/50 dark:text-white/50 text-xm">
                  {item.location}
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <div className="flex">
                <div className="flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8">
                  <Icon icon={"solar:bed-linear"} width={20} height={20} />
                  <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                    {item.beds} Спальни
                  </p>
                </div>
                <div className="flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8">
                  <Icon icon={"solar:bath-linear"} width={20} height={20} />
                  <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                    {item.baths} Этаж
                  </p>
                </div>
                <div className="flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8">
                  <Icon
                    icon={"lineicons:arrow-all-direction"}
                    width={20}
                    height={20}
                  />
                  <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                    {item.area}m<sup>2</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Галерея изображений */}
          <div className="grid grid-cols-12 mt-8 gap-8">
            <div className="lg:col-span-8 col-span-12 row-span-2">
              {item.images && item.images[0] && (
                <div className="">
                  <Image
                    src={item.images[0]?.src}
                    alt={`Проект дома ${item.name} - главное фото`}
                    width={800}
                    height={600}
                    className="rounded-2xl w-full h-540 object-cover"
                    priority
                  />
                </div>
              )}
            </div>
            <div className="lg:col-span-4 lg:block hidden">
              {item.images && item.images[1] && (
                <Image
                  src={item.images[1]?.src}
                  alt={`Проект дома ${item.name} - планировка`}
                  width={400}
                  height={300}
                  className="rounded-2xl w-full h-full object-cover"
                />
              )}
            </div>
            <div className="lg:col-span-2 col-span-6">
              {item.images && item.images[2] && (
                <Image
                  src={item.images[2]?.src}
                  alt={`Проект дома ${item.name} - интерьер`}
                  width={400}
                  height={300}
                  className="rounded-2xl w-full h-full object-cover"
                />
              )}
            </div>
            <div className="lg:col-span-2 col-span-6">
              {item.images && item.images[3] && (
                <Image
                  src={item.images[3]?.src}
                  alt={`Проект дома ${item.name} - экстерьер`}
                  width={400}
                  height={300}
                  className="rounded-2xl w-full h-full object-cover"
                />
              )}
            </div>
          </div>

          {/* Описание проекта */}
          <div className="grid grid-cols-12 gap-8 mt-10">
            <div className="lg:col-span-8 col-span-12">
              <div className="flex flex-col gap-5">
                <p className="text-dark dark:text-white text-xm ">
                  {item.textFirst}
                </p>
                <p className="text-dark dark:text-white text-xm ">
                  {item.textSecond}
                </p>
                <p className="text-dark dark:text-white text-xm ">
                  {item.textThreed}
                </p>
                <p className="text-dark dark:text-white text-xm ">
                  {item.textFourth}
                </p>
              </div>
            </div>

            {/* Блок с ценой и кнопкой заказа */}
            <div className="lg:col-span-4 col-span-12">
              <div className="bg-primary/10 p-8 rounded-2xl relative z-10 overflow-hidden">
                <h4 className="text-dark text-3xl font-medium dark:text-white">
                  {item.rate}
                </h4>
                <p className="text-sm text-dark/50 dark:text-white">Цена</p>
                <Link
                  href="https://t.me/oblasovaleksandr"
                  className="py-4 px-8 bg-primary text-white rounded-full w-full block text-center hover:bg-dark duration-300 text-base mt-8 hover:cursor-pointer"
                >
                  Заказать
                </Link>
                <div className="absolute right-0 top-4 -z-[1]">
                  <Image
                    src="/images/properties/vector.svg"
                    width={400}
                    height={500}
                    alt="Декоративный элемент"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
