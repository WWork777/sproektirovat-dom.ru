import { Icon } from "@iconify/react";
import PropertyCard from "./Card/Card";
import { propertyHomes } from "@/app/api/propertyhomes";

const Properties: React.FC = () => {
  return (
    <section>
      <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0">
        <div className="mb-12 sm:mb-16 flex flex-col gap-3">
          <div className="flex gap-2.5 items-center justify-center">
            <span>
              <Icon
                icon={"ph:house-simple-fill"}
                width={20}
                height={20}
                className="text-primary"
              />
            </span>
            <p className="text-base font-semibold text-dark/75 dark:text-white/75">
              Проекты
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-tight sm:leading-11 mb-4 sm:mb-2">
            Откройте для себя дома с вдохновляющим дизайном.
          </h2>
          <p className="text-base sm:text-lg font-normal text-black/50 dark:text-white/50 text-center leading-relaxed">
            Тщательно подобранные дома, в которых сочетаются элегантность, стиль
            и комфорт.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-10">
          {propertyHomes.slice(0, 6).map((item, index) => (
            <div key={index} className="">
              <PropertyCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
