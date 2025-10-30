"use client";
import { navLinks } from "@/app/api/navlink";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import NavLink from "./Navigation/NavLink";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const sideMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sideMenuRef.current &&
      !sideMenuRef.current.contains(event.target as Node)
    ) {
      setNavbarOpen(false);
    }
  };

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleScroll]);

  const isHomepage = pathname === "/";

  return (
    <header
      className={`fixed h-24 py-1 z-50 w-full bg-transparent transition-all duration-300 lg:px-0 px-4 ${
        sticky ? "top-3" : "top-0"
      }`}
    >
      <nav
        className={`container mx-auto max-w-8xl flex items-center justify-between py-4 duration-300 ${
          sticky
            ? "shadow-lg bg-white dark:bg-dark rounded-full top-5 px-4 "
            : "shadow-none top-0"
        }`}
      >
        <div className="flex justify-between items-center gap-2 w-full">
          {/* LOGO: светлый + тёмный вариант */}
          <div>
            <Link href="/" className="block" aria-label="АРХИТЕК — на главную">
              <span className="flex items-center gap-3">
                {/* Светлый логотип (чёрный) — показываем на светлой теме.
                   На главной без sticky прячем его, чтобы поверх фото был белый вариант */}
                <Image
                  src="/images/header/logo-dark.png"
                  alt="АРХИТЕК"
                  width={36}
                  height={36}
                  priority
                  className={`${
                    isHomepage
                      ? sticky
                        ? "block dark:hidden"
                        : "hidden"
                      : "block dark:hidden"
                  }`}
                />
                {/* Тёмный логотип (белый) — показываем в тёмной теме и на главной без sticky */}
                <Image
                  src="/images/header/logo.png"
                  alt="АРХИТЕК"
                  width={36}
                  height={36}
                  priority
                  className={`${
                    isHomepage
                      ? sticky
                        ? "hidden dark:block"
                        : "block"
                      : "hidden dark:block"
                  }`}
                />
                <span
                  className={`font-extrabold tracking-wide
                    ${
                      isHomepage
                        ? sticky
                          ? "text-dark dark:text-white"
                          : "text-white"
                        : "text-dark dark:text-white"
                    }
                    text-2xl sm:text-3xl`}
                >
                  АРХИТЕК
                </span>
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            {/* Theme switch */}
            <button
              className="hover:cursor-pointer"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Переключить тему"
            >
              <Icon
                icon="solar:sun-bold"
                width={32}
                height={32}
                className={`dark:hidden block ${
                  isHomepage
                    ? sticky
                      ? "text-dark"
                      : "text-white"
                    : "text-dark"
                }`}
              />
              <Icon
                icon="solar:moon-bold"
                width={32}
                height={32}
                className="dark:block hidden text-white"
              />
            </button>

            {/* Phone */}
            <div className="hidden md:block">
              <Link
                href="tel:+79234808330"
                className={`text-base text-inherit flex items-center gap-2 border-r pr-6 ${
                  isHomepage
                    ? sticky
                      ? "text-dark dark:text-white hover:text-primary border-dark dark:border-white"
                      : "text-white hover:text-primary"
                    : "text-dark hover:text-primary"
                }`}
                aria-label="Позвонить по номеру +7 (923) 480-83-30"
              >
                <Icon icon="ph:phone-bold" width={24} height={24} />
                +7 (923) 480-83-30
              </Link>
            </div>

            {/* Burger */}
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`flex items-center gap-3 p-2 sm:px-5 sm:py-3 rounded-full font-semibold hover:cursor-pointer border ${
                  isHomepage
                    ? sticky
                      ? "text-white bg-dark dark:bg-white dark:text-dark dark:hover:text-white dark:hover:bg-dark hover:text-dark hover:bg-white border-dark dark:border-white"
                      : "text-dark bg-white dark:text-dark hover:bg-transparent hover:text-white border-white"
                    : "bg-dark text-white hover:bg-transparent hover:text-dark dark:bg-white dark:text-dark dark:hover:bg-transparent dark:hover:text-white duration-300"
                }`}
                aria-label="Открыть меню"
              >
                <span>
                  <Icon icon="ph:list" width={24} height={24} />
                </span>
                <span className="hidden sm:block">Меню</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {navbarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
      )}

      {/* Side menu */}
      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-full w-full bg-dark shadow-lg transition-transform duration-300 max-w-2xl ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        } z-50 px-20 overflow-auto no-scrollbar`}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center justify-start py-10">
              <button
                onClick={() => setNavbarOpen(false)}
                aria-label="Закрыть меню"
                className="bg-white p-3 rounded-full hover:cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col items-start gap-4">
              <ul className="w-full">
                {navLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    item={item}
                    onClick={() => setNavbarOpen(false)}
                  />
                ))}
                <li className="flex items-center gap-4"></li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-1 my-16 text-white">
            <a
              href="mailto:750535@bk.ru"
              className="text-base sm:text-xm font-medium text-inherit hover:text-primary"
            >
              750535@bk.ru
            </a>
            <a
              href="tel:+79234808330"
              className="text-base sm:text-xm font-medium text-inherit hover:text-primary"
            >
              +7 (923) 480-83-30
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
