import Link from "next/link";
import Image from "next/image";

const GetInTouch: React.FC = () => {
  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="relative rounded-t-2xl overflow-hidden">
          <Image
            className="w-full absolute top-0 left-0 object-cover -z-10"
            aria-label="Фоновое видео строительства и архитектуры"
            src="/images/properties/property1/1.jpg"
            width={1920}
            height={1080}
            alt="Фоновое видео строительства и архитектуры"
          />

          <div className="bg-black/30 lg:py-64 md:py-28 py-10">
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-white lg:text-52 md:text-40 text-3xl max-w-3/4 text-center font-medium">
                Проектирование и строительство домов под ключ
              </h2>
              <Link
                href="tel:+79234808330"
                className="bg-white py-4 px-8 rounded-full text-dark hover:bg-dark hover:text-white duration-300"
                aria-label="Позвонить по номеру +7 923 480 83 30"
              >
                Позвонить: +7 (923) 480-83-30
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full py-5 bg-primary rounded-b-2xl overflow-hidden">
          <div className="flex items-center gap-40 animate-slide">
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              СЕЛЬСКАЯ ИПОТЕКА 3% • ПОДБЕРЁМ УСЛОВИЯ
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              РАССРОЧКА 0% БЕЗ БАНКА • ДО 5 ЛЕТ
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ • РАСЧЁТ СМЕТЫ
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              СТРОИТЕЛЬСТВО ПОД КЛЮЧ • ГАРАНТИЯ КАЧЕСТВА
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
