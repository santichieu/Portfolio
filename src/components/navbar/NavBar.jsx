import { useState, useContext } from "react";
import "./Navbar.css";
import { useTranslate } from "../../hooks/useTranslate";
import { TranslateContext } from "../../contexts/Translate.context";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language, handleChangeLanguage } = useContext(TranslateContext);

  const t = useTranslate();

  return (
    <nav className="navbar">
      <div className="navContainer">

        <div className="logo"><i className="bi bi-terminal"></i></div>

        <ul className={`navLinks ${open ? "open" : ""}`}>
          <li><a href="#home">{t("Home")}</a></li>
          <li><a href="#aboutMe">{t("About Me")}</a></li>
          <li><a href="#projects">{t("Projects")}</a></li>
          <li><a href="#skills">{t("Skills")}</a></li>
          <li><a href="#contact">{t("Contact")}</a></li>
        </ul>
        <button
          className="language-toggle"
          onClick={() => handleChangeLanguage(language === "es" ? "en" : "es")}
          aria-label="Toggle language"
        >
          <span className="lang-text">{language === "es" ? "EN" : "ES"}</span>
        </button>

        <div className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
