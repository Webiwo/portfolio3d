import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      className={`p-4 sm:p-6 w-full fixed top-0 z-20 ${
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
        <ul className="list-none hidden md:flex gap-10 justify-self-end">
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              onClick={() => setActiveLink(title)}
              className={`${
                active === title ? "text-white" : "text-gray-400"
              } hover:text-white`}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>

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
            } absolute top-20 right-0 min-w-28 black-gradient rounded-xl justify-center mx-4 py-3 z-10 md:hidden`}
          >
            <ul className="list-none flex flex-col gap-2">
              {navLinks.map(({ id, title }) => (
                <li
                  key={id}
                  onClick={() => setActiveLinkInMenu(title)}
                  className={`${
                    active === title ? "text-white" : "text-gray-400"
                  } hover:text-white`}
                >
                  <a href={`#${id}`}>{title}</a>
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
