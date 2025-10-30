import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "Архитек",
            description: "Проектирование и строительство домов в Кемерово",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Кемерово",
              addressRegion: "Кемеровская область",
            },
            telephone: "+7-923-480-83-30",
            areaServed: "Кемерово и Кемеровская область",
            serviceType: "Строительство домов под ключ",
          }),
        }}
      />
      <section className="!py-0">
        {/* min-h-screen только на десктопе; на мобиле — обычный поток */}
        <div className="relative overflow-hidden md:min-h-screen">
          {/* ФОН: фото дома */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/hero/regtime154.webp" // твоя картинка
              alt="Фасад одноэтажного дома"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* затемнение для контраста текста */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/10 dark:from-black/60 dark:via-black/40 dark:to-black/20" />
          </div>

          {/* Контейнер контента: по центру по вертикали на десктопе */}
          <div className="container max-w-8xl mx-auto px-5 2xl:px-0 md:min-h-screen md:flex md:items-center">
            <div className="relative text-white text-center md:text-start z-10 w-full pt-32 md:pt-0 pb-16 md:pb-0">
              <p className="text-white/90 text-xl font-medium">Кемерово</p>
              <h1 className="text-white text-4xl sm:text-6xl md:text-9xl font-semibold -tracking-wider md:max-w-45p mt-4 mb-6">
                Строительство домов
              </h1>
              <p className="text-white/90 text-base sm:text-lg md:max-w-[600px] mx-auto md:mx-0 mb-8">
                Проектирование и строительство. Опыт более 25&nbsp;лет. <br />{" "}
                Гарантия качества.
              </p>
              <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
                <Link
                  href="https://arhitek42.ru/selskaya-ipoteka"
                  className="px-4 py-4 md:py-4 md:px-8 border border-white bg-white text-dark duration-300 hover:bg-transparent hover:text-white text-base font-semibold rounded-full hover:cursor-pointer"
                >
                  Сельская ипотека 3%
                </Link>
                <Link
                  href="tel:+73842657775"
                  className="px-8 py-4 border border-white bg-transparent text-white hover:bg-white hover:text-dark duration-300 text-base font-semibold rounded-full hover:cursor-pointer"
                  aria-label="Позвонить по номеру +7 3842 65 77 75"
                >
                  Позвонить
                </Link>
              </div>
            </div>
          </div>

          {/* Блок преимуществ: не влияет на высоту, прибит к низу на десктопе */}
          <div className="hidden md:block md:absolute md:bottom-6 md:right-0 bg-white/95 backdrop-blur dark:bg-black/90 py-12 px-8 mobile:px-16 md:pl-16 md:pr-[295px] rounded-2xl md:rounded-l-2xl md:rounded-tr-none mt-8 md:mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:flex gap-16 md:gap-24 sm:text-center dark:text-white text-black">
              {/* Дом */}
              <div className="flex flex-col sm:items-center gap-3">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M3 11l9-7 9 7" />
                  <path d="M5 10v10h14V10" />
                  <path d="M9 21V12h6v9" />
                </svg>
                <p className="text-sm sm:text-base font-normal text-inherit">
                  Дома под ключ
                </p>
              </div>
              {/* Чертёж */}
              <div className="flex flex-col sm:items-center gap-3">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="M7 8h10M7 12h6" />
                  <path d="M3 20h18" />
                </svg>
                <p className="text-sm sm:text-base font-normal text-inherit">
                  Проектирование
                </p>
              </div>
              {/* Кирпичи */}
              <div className="flex flex-col sm:items-center gap-3">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="3" y="7" width="8" height="4" />
                  <rect x="13" y="7" width="8" height="4" />
                  <rect x="8" y="13" width="8" height="4" />
                </svg>
                <p className="text-sm sm:text-base font-normal text-inherit">
                  Надежные материалы
                </p>
              </div>
              {/* Щит */}
              <div className="flex flex-col sm:items-center gap-3">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <p className="text-sm sm:text-base font-normal text-inherit">
                  Собственная рассрочка без %
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
