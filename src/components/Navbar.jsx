import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks, profiles } from "../constants";
import { logo, menu, close } from "../assets";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

   const translatedNavLinks = [
    { id: "about", title: t("nav.about") },
    { id: "work", title: t("nav.work") },
    { id: "contact", title: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setActiveLinkInMenu = (linkTitle) => {
    setActiveLink(linkTitle);
    toggleMenuVisibility();
  };

  const setActiveLink = (linkTitle) => setActive(linkTitle);

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav
      className={`p-4 w-full fixed top-0 z-20 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
            setActive("");
          }}
        >
          <img
            src={logo}
            alt="webiwo logo"
            className="size-12 object-contain"
          />
          <p className="font-medium cursor-pointer text-gray-200 tracking-wide">
            sławomir <span>piwo</span>warski{" "}
            <span className="block md:inline">| webiwo</span>
          </p>
        </Link>

        {/* LINKS */}
        <ul className="list-none hidden md:flex md:items-center gap-10">
          {translatedNavLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <ul className="list-none hidden md:flex gap-3">
            {profiles.map(({ name, icon, url }) => (
              <li key={name}>
                <a href={url} target="_blank">
                  <img className="size-8" src={icon} alt={name} />
                </a>
              </li>
            ))}
          </ul>
        </ul>

        {/* Language switcher */}
        <div className="hidden sm:flex gap-2 ml-8">
          <button
            onClick={() => changeLanguage("pl")}
            className={`text-sm ${
              i18n.language === "pl" ? "text-white" : "text-gray-400"
            }`}
          >
            PL
          </button>
          <span className="text-gray-500">|</span>
          <button
            onClick={() => changeLanguage("en")}
            className={`text-sm ${
              i18n.language === "en" ? "text-white" : "text-gray-400"
            }`}
          >
            EN
          </button>
        </div>

        {/* SIDE MENU */}
        <div className="self-start md:hidden">
          {/* TOGGLE MENU */}
          <img
            src={isMenuVisible ? close : menu}
            alt="menu button"
            className={`${
              isMenuVisible ? "size-5 mt-1" : "size-7"
            } object-contain cursor-pointer md:hidden`}
            onClick={toggleMenuVisibility}
          />
          {/* LINKS */}
          <div
            className={`${
              !isMenuVisible ? "hidden" : "flex"
            } absolute top-20 right-0 min-w-28 black-gradient rounded-xl justify-center mx-4 py-3 pl-3 z-10 md:hidden`}
          >
            <ul className="list-none flex flex-col gap-2">
              {/* Mobile language switch */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => changeLanguage("pl")}
                  className={`text-sm ${
                    i18n.language === "pl" ? "text-white" : "text-gray-400"
                  }`}
                >
                  PL
                </button>
                <span className="text-gray-500">|</span>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`text-sm ${
                    i18n.language === "en" ? "text-white" : "text-gray-400"
                  }`}
                >
                  EN
                </button>
              </div>

              {translatedNavLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === link.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              
              
              {profiles.map(({ name, url }) => (
                <li key={name} className="text-gray-400 hover:text-white">
                  <a href={url} target="_blank">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
