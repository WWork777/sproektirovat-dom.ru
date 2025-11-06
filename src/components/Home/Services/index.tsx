import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Categories = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Проектирование домов",
            provider: {
              "@type": "Organization",
              name: "Архитек",
            },
          }),
        }}
      />
      <section className="relative overflow-hidden">
        <div className="absolute left-0 top-0">
          <Image
            src="/images/categories/Vector.svg"
            alt="vector"
            width={800}
            height={1050}
            className="dark:hidden"
            unoptimized={true}
          />
          <Image
            src="/images/categories/Vector-dark.svg"
            alt="vector"
            width={800}
            height={1050}
            className="hidden dark:block"
            unoptimized={true}
          />
        </div>
        <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 relative z-10">
          <div className="grid grid-cols-12 items-center gap-6 lg:gap-10">
            {/* Левая колонка - текст и малые карточки */}
            <div className="lg:col-span-6 col-span-12">
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
                <Icon
                  icon="ph:house-simple-fill"
                  className="text-2xl text-primary "
                />
                Услуги АРХИТЕК
              </p>
              <h2 className="lg:text-52 text-3xl sm:text-40 mt-4 mb-4 lg:mb-2 lg:max-w-full font-medium leading-tight lg:leading-[1.2] text-dark dark:text-white">
                Проектирование и строительство домов под ключ
              </h2>
              <p className="text-dark/50 dark:text-white/50 text-base sm:text-lg lg:max-w-full leading-relaxed lg:leading-[1.3] md:max-w-3/4">
                Полный цикл работ: проект, смета, строительство и отделка.
                Ипотека 3% и рассрочка 0% — подберём оптимальные условия.
              </p>
              <Link
                href="/properties"
                className="py-3 sm:py-4 px-6 sm:px-8 bg-primary text-sm sm:text-base leading-4 block w-fit text-white rounded-full font-semibold mt-6 lg:mt-8 hover:bg-dark duration-300"
              >
                Смотреть проекты
              </Link>

              {/* Малые карточки под текстом на десктопе */}
              <div className="lg:grid grid-cols-2 gap-6 mt-8 hidden">
                {/* Малая карточка — Проектирование */}
                <div className="col-span-1">
                  <div className="relative rounded-2xl overflow-hidden group h-[280px]">
                    {" "}
                    {/* Увеличена высота */}
                    <div className="h-full">
                      <Image
                        src="/images/categories/Regtime132_1.webp"
                        alt="Проектирование домов"
                        width={680}
                        height={280}
                        className="w-full h-full object-cover" /* Добавлено object-cover */
                        unoptimized={true}
                      />
                    </div>
                    <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-5 pb-10 group-hover:top-0 duration-500">
                      <div className="flex justify-end mt-6 mr-6">
                        <div className="bg-white text-dark rounded-full w-fit p-4">
                          <Icon icon="ph:arrow-right" width={24} height={24} />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h3 className="text-white text-2xl">
                          Проектирование домов
                        </h3>
                        <p className="text-white/80 text-base leading-6">
                          Эскиз, архитектура, конструктив, инженерные разделы —
                          полный комплект РД.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Малая карточка — Строительство под ключ */}
                <div className="col-span-1">
                  <div className="relative rounded-2xl overflow-hidden group h-[280px]">
                    {" "}
                    {/* Увеличена высота */}
                    <div className="h-full">
                      <Image
                        src="/images/categories/RockNRoll284_4.webp"
                        alt="Строительство под ключ"
                        width={680}
                        height={280}
                        className="w-full h-full object-cover" /* Добавлено object-cover */
                        unoptimized={true}
                      />
                    </div>
                    <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-5 pb-10 group-hover:top-0 duration-500">
                      <div className="flex justify-end mt-6 mr-6">
                        <div className="bg-white text-dark rounded-full w-fit p-4">
                          <Icon icon="ph:arrow-right" width={24} height={24} />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-white text-2xl">
                          Строительство под ключ
                        </h3>
                        <p className="text-white/80 text-base leading-6">
                          Фундамент, коробка, кровля, инженерия и отделка.
                          Гарантия качества.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка - только большие карточки на десктопе */}
            <div className="lg:col-span-6 col-span-12 space-y-4 mt-10 sm:space-y-6">
              {/* Большая карточка — Сельская ипотека 3% */}
              <div className="relative rounded-xl lg:rounded-2xl overflow-hidden group h-[280px] lg:h-[320px]">
                {" "}
                {/* Увеличена высота на десктопе */}
                <Link href="https://arhitek42.ru/selskaya-ipoteka">
                  <Image
                    src="/images/categories/ValsBoston137_1.webp"
                    alt="Сельская ипотека 3%"
                    width={680}
                    height={320}
                    className="w-full h-full object-cover" /* Добавлено object-cover */
                    unoptimized={true}
                  />
                </Link>
                <Link
                  href="https://arhitek42.ru/selskaya-ipoteka"
                  className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between p-4 sm:pl-5 sm:pb-10 lg:pl-5 lg:pb-10 group-hover:top-0 duration-500"
                >
                  <div className="flex justify-end">
                    <div className="bg-white text-dark rounded-full w-10 h-10 sm:w-fit sm:p-4 flex items-center justify-center">
                      <Icon
                        icon="ph:arrow-right"
                        width={20}
                        height={20}
                        className="sm:w-6 sm:h-6"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-2.5">
                    <h3 className="text-white text-lg sm:text-2xl">
                      Сельская ипотека 3%
                    </h3>
                    <p className="text-white/80 text-xs sm:text-base leading-tight sm:leading-6">
                      Ставка 3% годовых • до 6&nbsp;млн&nbsp;₽ • срок до 25 лет
                      • первоначальный взнос от 30%.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Большая карточка — Рассрочка 0% */}
              <div className="relative rounded-xl lg:rounded-2xl overflow-hidden group h-[280px] lg:h-[320px]">
                {" "}
                {/* Увеличена высота на десктопе */}
                <div className="h-full">
                  <Image
                    src="/images/categories/Regtime132_1.webp"
                    alt="Рассрочка 0% без банка"
                    width={680}
                    height={320}
                    className="w-full h-full object-cover" /* Добавлено object-cover */
                    unoptimized={true}
                  />
                </div>
                <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between p-4 sm:pl-5 sm:pb-10 lg:pl-5 lg:pb-10 group-hover:top-0 duration-500">
                  <div className="flex justify-end">
                    <div className="bg-white text-dark rounded-full w-10 h-10 sm:w-fit sm:p-4 flex items-center justify-center">
                      <Icon
                        icon="ph:arrow-right"
                        width={20}
                        height={20}
                        className="sm:w-6 sm:h-6"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-2.5">
                    <h3 className="text-white text-lg sm:text-2xl">
                      Рассрочка 0% без банка
                    </h3>
                    <p className="text-white/80 text-xs sm:text-base leading-tight sm:leading-6">
                      До 5 лет без переплат • прямая схема • фиксированные сроки
                      строительства.
                    </p>
                  </div>
                </div>
              </div>

              {/* Малые карточки на мобильных */}
              <div className="lg:hidden grid grid-cols-2 gap-4 sm:gap-6">
                {/* Малая карточка — Проектирование */}
                <div className="col-span-1">
                  <div className="relative rounded-xl overflow-hidden group h-[200px]">
                    {" "}
                    {/* Высота для мобильных */}
                    <div className="h-full">
                      <Image
                        src="/images/categories/Rondo205_1.webp"
                        alt="Проектирование домов"
                        width={320}
                        height={200}
                        className="w-full h-full object-cover"
                        unoptimized={true}
                      />
                    </div>
                    <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between p-5 group-hover:top-0 duration-500">
                      <div className="flex justify-end">
                        <div className="bg-white text-dark rounded-full w-8 h-8 flex items-center justify-center">
                          <Icon icon="ph:arrow-right" width={16} height={16} />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-white text-sm">
                          Проектирование домов
                        </h3>
                        <p className="text-white/80 text-xs leading-tight">
                          Эскиз, архитектура, конструктив, инженерные разделы —
                          полный комплект РД.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Малая карточка — Строительство под ключ */}
                <div className="col-span-1">
                  <div className="relative rounded-xl overflow-hidden group h-[200px]">
                    {" "}
                    {/* Высота для мобильных */}
                    <div className="h-full">
                      <Image
                        src="/images/categories/ValsBoston137_1.webp"
                        alt="Строительство под ключ"
                        width={320}
                        height={200}
                        className="w-full h-full object-cover"
                        unoptimized={true}
                      />
                    </div>
                    <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between p-4 group-hover:top-0 duration-500">
                      <div className="flex justify-end">
                        <div className="bg-white text-dark rounded-full w-8 h-8 flex items-center justify-center">
                          <Icon icon="ph:arrow-right" width={16} height={16} />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-white text-sm">
                          Строительство под ключ
                        </h3>
                        <p className="text-white/80 text-xs leading-tight">
                          Фундамент, коробка, кровля, инженерия и отделка.
                          Гарантия качества.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
