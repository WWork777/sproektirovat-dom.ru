"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProprty } from "@/app/api/featuredproperty";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const FeaturedProperty: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Галерея проекта */}
          <div className="relative">
            <Carousel setApi={setApi} opts={{ loop: true }}>
              <CarouselContent>
                {featuredProprty.map((item, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={item.scr}
                      alt={item.alt}
                      width={500}
                      height={500}
                      className="rounded-2xl w-full h-540 object-cover"
                      unoptimized
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* точки пагинации */}
            <div className="absolute left-1/2 -translate-x-1/2 bg-dark/50 rounded-full py-2.5 bottom-10 flex justify-center mt-4 gap-2.5 px-2.5">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    current === index + 1 ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Слайд ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Текстовая часть */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                <Icon
                  icon="ph:house-simple-fill"
                  className="text-2xl text-primary"
                />
                Избранный проект
              </p>
              <h2 className="text-2xl lg:text-52 font-medium text-dark dark:text-white">
                Проект «Регтайм 133»
              </h2>
              <div className="flex items-center gap-2.5">
                <Icon
                  icon="ph:map-pin"
                  width={28}
                  height={26}
                  className="text-dark/50 dark:text-white/50"
                />
                <p className="text-dark/50 dark:text-white/50 text-base">
                  Строительство под ключ
                </p>
              </div>
            </div>

            <p className="text-base text-dark/50 dark:text-white/50">
              Одноэтажный дом площадью <strong>133&nbsp;м²</strong> с
              рациональной планировкой — идеален для семьи из 3–5 человек.
              Проект адаптируем под технологию (газобетон, кирпич, клеёный брус
              и др.), комплект РД и смету подготовим под ваши условия. Цена
              зависит от технологии и комплектации — рассчитываем индивидуально.
            </p>

            {/* Характеристики под Архитек */}
            <div className="grid grid-cols-2 gap-10">
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Image
                    src={"/images/hero/sofa.svg"}
                    alt="Спальни"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized
                  />
                  <Image
                    src={"/images/hero/dark-sofa.svg"}
                    alt="Спальни"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized
                  />
                </div>
                <h6 className="">3 спальни</h6>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Image
                    src={"/images/hero/tube.svg"}
                    alt="Площадь"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized
                  />
                  <Image
                    src={"/images/hero/dark-tube.svg"}
                    alt="Площадь"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized
                  />
                </div>
                <h6 className="">Площадь 133 м²</h6>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Image
                    src={"/images/hero/parking.svg"}
                    alt="Размеры"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized
                  />
                  <Image
                    src={"/images/hero/dark-parking.svg"}
                    alt="Размеры"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized
                  />
                </div>
                <h6 className="">Размеры 12.0 × 10.1 м</h6>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Image
                    src={"/images/hero/bar.svg"}
                    alt="Архитектор"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized
                  />
                  <Image
                    src={"/images/hero/dark-bar.svg"}
                    alt="Архитектор"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized
                  />
                </div>
                <h6 className="">Архитектор: Зиброва А.Д.</h6>
              </div>
            </div>

            <div className="flex gap-10 items-center">
              <Link
                href="/contactus"
                className="py-4 px-4 bg-primary hover:bg-dark duration-300 rounded-full text-white"
              >
                Оставить заявку
              </Link>
              <div>
                <h4 className="text-1xl text-dark dark:text-white font-medium">
                  Цена: по запросу
                </h4>
              </div>
            </div>

            {/* Ссылка на подробности проекта */}
            <div>
              <Link
                href="https://arhitek42.ru/catalog/project-Regtime133"
                target="_blank"
                className="text-primary hover:underline"
              >
                Подробная страница проекта на arhitek42.ru
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperty;
