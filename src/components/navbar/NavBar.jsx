import { useState, useContext, useEffect, useRef } from "react";
import "./NavBar.css";
import { useTranslate } from "../../hooks/useTranslate";
import { TranslateContext } from "../../contexts/Translate.context";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { language, handleChangeLanguage } = useContext(TranslateContext);
  const lastScrollPos = useRef(0);
  const { t } = useTranslate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollpos = window.scrollY;
      if (currentScrollpos > lastScrollPos.current) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollPos.current = currentScrollpos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`navbar ${isHidden ? "hide" : "show"}`}>
      <div className="navContainer">

        <div className="logo">
          <a href="#home"><i className="bi bi-terminal"></i></a>
        </div>

        <ul className={`navLinks ${open ? "open" : ""}`}>
          <li><a href="#home">{t("Home")}</a></li>
          <li><a href="#aboutMe">{t("About Me")}</a></li>
          <li><a href="#skills">{t("Skills")}</a></li>
          <li><a href="#projects">{t("Projects")}</a></li>
          <li><a href="#contact">{t("Contact")}</a></li>
        </ul>

        <div className="controls">
          <button
            className="language-toggle"
            onClick={() => handleChangeLanguage(language === "es" ? "en" : "es")}
            aria-label="Toggle language"
          >
            <span className="lang-text">{language === "es" ? "EN" : "ES"}</span>
          </button>

          <div
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
