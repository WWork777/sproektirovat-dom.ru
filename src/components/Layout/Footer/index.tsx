import Link from "next/link";
import { Icon } from "@iconify/react";
import { FooterLinks } from "@/app/api/footerlinks";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-dark">
      <div className="container mx-auto max-w-8xl pt-14 px-4 sm:px-6 lg:px-0">
        {/* Верхняя полоса: только призыв позвонить */}
        <div className="flex lg:items-center justify-between items-center lg:gap-11 pb-14 border-b border-white/10 lg:flex-nowrap flex-wrap gap-6">
          <p className="text-white text-sm">
            Проектирование и строительство домов под ключ. Сельская ипотека 3% и
            рассрочка 0%.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="tel:+79234808330"
              className="text-dark bg-white py-3.5 px-7 font-semibold rounded-full hover:bg-primary hover:text-white duration-300"
              aria-label="Позвонить по номеру +7 923 480 83 30"
            >
              Позвонить: +7 (923) 480-83-30
            </Link>
            <Link
              href="https://wa.me/79234808330"
              target="_blank"
              className="border border-white text-white py-3.5 px-7 rounded-full hover:bg-white hover:text-dark duration-300"
              aria-label="Написать в WhatsApp"
            >
              WhatsApp
            </Link>
            <Link
              href="tg://resolve?phone=79234808330"
              className="border border-white text-white py-3.5 px-7 rounded-full hover:bg-white hover:text-dark duration-300"
              aria-label="Написать в Telegram"
            >
              Telegram
            </Link>
          </div>
        </div>

        {/* Средняя часть: колонки ссылок + CTA «Заявка» */}
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-12 sm:gap-10 gap-y-6">
            {/* Левая колонка */}
            <div className="md:col-span-7 col-span-12">
              <h2 className="text-white leading-[1.2] text-40 font-medium mb-6 lg:max-w-3/4">
                Готовы обсудить ваш дом?
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contactus"
                  className="bg-primary text-base font-semibold py-4 px-8 rounded-full text-white hover:bg-white hover:text-dark duration-300"
                >
                  Оставить заявку
                </Link>
                <Link
                  href="tel:+79234808330"
                  className="border border-white text-white text-base font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-dark duration-300"
                >
                  +7 (923) 480-83-30
                </Link>
              </div>
              <p className="text-white/40 text-sm mt-4">
                Пн–Пт 10:00–19:00 • Сб–Вс по записи
              </p>
            </div>

            {/* Колонка ссылок 1 */}
            <div className="md:col-span-3 sm:col-span-6 col-span-12">
              <h6 className="text-white/70 text-sm mb-4">Навигация</h6>
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(0, 4).map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.href}
                      className="text-white/40 text-xm hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Колонка ссылок 2 */}
            <div className="md:col-span-2 sm:col-span-6 col-span-12">
              <h6 className="text-white/70 text-sm mb-4">Услуги</h6>
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(4, 8).map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.href}
                      className="text-white/40 text-xm hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Контакты */}
            <div className="md:col-span-12 col-span-12 mt-6">
              <div className="flex flex-wrap gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:map-marker-outline" width={18} height={18} />
                  <span>Кемерово</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:email-outline" width={18} height={18} />
                  <Link
                    href="mailto:750535@bk.ru"
                    className="hover:text-primary"
                  >
                    750535@bk.ru
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:phone" width={18} height={18} />
                  <Link href="tel:+79234808330" className="hover:text-primary">
                    +7 (923) 480-83-30
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Низ: копирайт + политики */}
        <div className="flex justify-between md:flex-nowrap flex-wrap items-center py-6 gap-6">
          <p className="text-white/40 text-sm">
            ©{new Date().getFullYear()} АРХИТЕК — проектирование и строительство
            домов
          </p>
          <div className="flex gap-8 items-center">
            <Link
              href="/terms"
              className="text-white/40 hover:text-primary text-sm"
            >
              Пользовательское соглашение
            </Link>
            <Link
              href="/privacy"
              className="text-white/40 hover:text-primary text-sm"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
