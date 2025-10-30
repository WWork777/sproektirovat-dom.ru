"use client";
import * as React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

type Review = {
  review: string;
  name: string;
  position: string;
  source: "2ГИС" | "Яндекс.Карты";
  href: string;
};

const reviews: Review[] = [
  {
    review: "Профессионально и в срок. Проект, смета, график — всё прозрачно и понятно.",
    name: "Татьяна В.",
    position: "Клиент АРХИТЕК",
    source: "2ГИС",
    href: "https://2gis.ru/kemerovo/firm/70000001030797574/tab/reviews",
  },
  {
    review: "Помогли с перепланировкой трёх квартир. Всегда на связи, документы подготовили быстро.",
    name: "Максим Тихонов",
    position: "Клиент АРХИТЕК",
    source: "2ГИС",
    href: "https://2gis.ru/kemerovo/firm/70000001030797574/tab/reviews",
  },
  {
    review: "Сделали адаптацию проекта под участок. Предложили альтернативные решения по материалам.",
    name: "Андрей К.",
    position: "Клиент АРХИТЕК",
    source: "Яндекс.Карты",
    href: "https://yandex.ru/maps/org/arkhitek/1042838029/reviews/",
  },
  {
    review: "Смета реалистичная, без скрытых пунктов. Этапы сдавали вовремя.",
    name: "Игорь М.",
    position: "Клиент АРХИТЕК",
    source: "Яндекс.Карты",
    href: "https://yandex.ru/maps/org/arkhitek/1042838029/reviews/",
  },
  {
    review: "От эскиза до отделки всё у одной команды. Удобно, не пришлось бегать по подрядчикам.",
    name: "Екатерина Л.",
    position: "Клиент АРХИТЕК",
    source: "2ГИС",
    href: "https://2gis.ru/kemerovo/firm/70000001030797574/tab/reviews",
  },
  {
    review: "Хорошая коммуникация. Любые вопросы решались оперативно, без затяжек.",
    name: "Сергей Д.",
    position: "Клиент АРХИТЕК",
    source: "Яндекс.Карты",
    href: "https://yandex.ru/maps/org/arkhitek/1042838029/reviews/",
  },
  {
    review: "Планировки продуманные, инженерия аккуратная. Приехали на замер на следующий день.",
    name: "Анна П.",
    position: "Клиент АРХИТЕК",
    source: "2ГИС",
    href: "https://2gis.ru/kemerovo/firm/70000001030797574/tab/reviews",
  },
  {
    review: "Фундамент сделали качественно, лента ровная. Фотоотчёты присылали после каждого этапа.",
    name: "Алексей Р.",
    position: "Клиент АРХИТЕК",
    source: "Яндекс.Карты",
    href: "https://yandex.ru/maps/org/arkhitek/1042838029/reviews/",
  },
  {
    review: "Помогли с подбором материалов и оптимизацией бюджета без потери качества.",
    name: "Марина С.",
    position: "Клиент АРХИТЕК",
    source: "2ГИС",
    href: "https://2gis.ru/kemerovo/firm/70000001030797574/tab/reviews",
  },
  {
    review: "Гибкие условия оплаты. Оформили рассрочку без лишней бюрократии.",
    name: "Дмитрий Н.",
    position: "Клиент АРХИТЕК",
    source: "Яндекс.Карты",
    href: "https://yandex.ru/maps/org/arkhitek/1042838029/reviews/",
  },
];

function SourceBadge({ source }: { source: Review["source"] }) {
  const icon = source === "2ГИС" ? "simple-icons:2gis" : "simple-icons:yandexmaps";
  return (
    <span className="inline-flex items-center gap-1.5 text-white/60">
      <Icon icon={icon} width={18} height={18} className="align-middle" />
      <span className="text-xs md:text-sm">{source}</span>
    </span>
  );
}

const Testimonial = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  const handleDotClick = (index: number) => api?.scrollTo(index);

  return (
    <section className="bg-dark relative overflow-hidden" id="testimonial">
      {/* фон-вектор справа */}
      <div className="absolute right-0">
        <Image
          src="/images/testimonial/Vector.png"
          alt="vector"
          width={700}
          height={1039}
          unoptimized
        />
      </div>

      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div>
          <p className="text-white text-base font-semibold flex gap-2">
            <Icon icon="ph:house-simple-fill" className="text-2xl text-primary" />
            Отзывы клиентов
          </p>
        </div>

        <h2 className="lg:text-52 text-40 font-medium text-white">
          Что говорят о «АРХИТЕК»
        </h2>
        <p className="text-white/60 mt-2">
          Ещё отзывы смотрите на 2ГИС и Яндекс.Картах.
        </p>

        {/* Карусель */}
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {reviews.map((item, index) => (
              <CarouselItem key={index} className="mt-9">
                <div className="flex items-start gap-6">
                  <Icon
                    icon="ph:house-simple"
                    width={32}
                    height={32}
                    className="text-primary mt-1.5 shrink-0"
                  />
                  <div>
                    <h4 className="text-white lg:text-3xl text-2xl">{item.review}</h4>
                    <div className="flex items-center mt-6 gap-3 flex-wrap">
                      <h6 className="text-white text-xm font-medium">{item.name}</h6>
                      <span className="text-white/40">• {item.position}</span>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-white/60 hover:text-white"
                        aria-label={`Перейти к источнику: ${item.source}`}
                        title={item.source}
                      >
                        <SourceBadge source={item.source} />
                      </a>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Пагинация в потоке — центр под всей каруселью */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-2.5 p-2.5 bg-white/20 rounded-full">
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
      </div>
    </section>
  );
};

export default Testimonial;
