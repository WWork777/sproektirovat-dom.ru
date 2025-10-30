import { Icon } from "@iconify/react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
    <section id="faqs">
      <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0">
        {/* Сетка: картинку показываем только на мобильных; на десктопе — один столбец с текстом */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {/* Картинка: ТОЛЬКО мобильная/планшет (скрыта на lg+) */}
          {/* <div className="col-span-12 lg:hidden mx-auto">
            <Image
              src="/images/faqs/faq-image.png"
              alt="АРХИТЕК — проектирование и строительство"
              width={680}
              height={644}
              className="w-full max-w-md mx-auto"
              unoptimized
            />
          </div> */}

          {/* Контент: на десктопе занимает всю ширину */}
          <div className="col-span-12 lg:col-span-12 lg:px-12">
            <p className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2 items-center">
              <Icon
                icon="ph:house-simple-fill"
                className="text-xl sm:text-2xl text-primary flex-shrink-0"
              />
              Часто задаваемые вопросы
            </p>
            <h2 className="lg:text-52 text-2xl sm:text-3xl md:text-40 leading-tight sm:leading-[1.2] font-medium text-dark dark:text-white mt-2 mb-3">
              Всё об услугах АРХИТЕК
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-sm sm:text-base lg:pr-20">
              Собрали ответы на самые частые вопросы о проектировании,
              строительстве, ипотеке 3% и рассрочке 0%.
              <br className="hidden sm:block" /> Если чего-то не нашли —
              позвоните{" "}
              <a href="tel:+79234808330" className="underline">
                +7 (923) 480-83-30
              </a>
              .
            </p>

            <div className="my-10 sm:my-6">
              <Accordion
                type="single"
                defaultValue="item-1"
                collapsible
                className="w-full flex flex-col gap-4 sm:gap-6"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    1. Сколько стоит строительство дома «под ключ»?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    Стоимость зависит от технологии (газобетон, кирпич, брус),
                    площади и комплектации. Мы делаем подробную смету до
                    договора: конструктив, материалы, инженерия и сроки.
                    Ориентир даём после короткого брифа и плана участка.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    2. Даете рассрочку 0%? На каких условиях?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    Да, доступна рассрочка 0% без банка до 5 лет. График
                    платежей фиксируется в договоре, привязываем этапы оплаты к
                    фактически выполненным работам. Первый взнос —
                    индивидуально.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    3. Как получить сельскую ипотеку 3%?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    Помогаем подготовить пакет документов и подобрать
                    банк-партнёр. Базовые условия: ставка от 3% годовых, сумма
                    до 6 млн ₽, срок до 25 лет, первоначальный взнос от ~30%.
                    Уточняем по вашей ситуации на консультации.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    4. Что входит в проектную документацию?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    Эскизные решения, архитектура, конструктив, планы и разрезы,
                    спецификации, узлы, ведомости. По запросу добавляем разделы
                    по инженерии (отопление, ВК, ЭО/ЭС), а также 3D-визуализации
                    и дизайн-интерьер.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    5. Сколько времени занимает проектирование и стройка?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    Проектирование типового проекта с адаптацией: 2–4 недели.
                    Индивидуальный проект: 4–8 недель. Строительство коробки: в
                    среднем 1,5–3 месяца; «под ключ» — от 4 до 8 месяцев в
                    зависимости от объёма и сезона.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    6. Работаете только в Кемерово?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    Базово — Кемерово и Кемеровская область. Возможен выезд в
                    соседние регионы по договорённости. Онлайн-консультации и
                    удалённые проектные работы доступны для любых регионов РФ.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    7. Какие гарантии даёте?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    Фиксируем смету и сроки в договоре. На работы — гарантия по
                    разделам (фундамент, коробка, кровля, инженерия). Перед
                    закрытием этапа — фотоотчёт и акт. Используем
                    сертифицированные материалы с заводской гарантией.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    8. Можно ли изменить типовой проект под мой участок?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    Да. Мы адаптируем типовой проект: меняем габариты,
                    планировки, конструктив и материалы под геологию, розу
                    ветров и требования поселка. При необходимости подготовим
                    индивидуальный проект «с нуля».
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    9. Кто занимается согласованиями и разрешениями?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    Консультируем по получению ГПЗУ/разрешения на строительство,
                    при необходимости сопровождаем процесс. Подготовим комплект
                    документов, поможем с БТИ, ТУ и вводом в эксплуатацию.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    10. Как начать: что нужно от меня?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    Отправьте план участка/кадастровый номер и пожелания по
                    дому. Мы предложим планировочные решения и предварительную
                    смету. Дальше выезд замерщика, детальная смета и договор.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
