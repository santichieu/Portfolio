import { useTranslate } from "../../hooks/useTranslate"
import "./Home.css"

const Home = () => {
  const { t, language } = useTranslate();

const openPDF = () => {

    const fileName = language === "en" 
      ? "CV_English.pdf" 
      : "CV.pdf"; 

      const a = document.createElement("a");
      a.href

  };

  return (
    <>
      <section id="home" className="homeContainer">
        <h1 className="Name">Santiago Chieu</h1>
        <div className="header">
          <h2>
            <span className="spantitle">
              {t("FullStack Developer")}
            </span>
          </h2>
          <div className="underlinetitle"></div>
        </div>
        
        <ul className="social-links">
          <li>
            <a
              href="https://github.com/santichieu"
              target="_blank"
              rel="noreferrer"
              className="iconButton"
            >
              <i className="bi bi-github" style={{ fontSize: "2rem" }}></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/santiago-chieu-171569187/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin" style={{ fontSize: "2rem" }}></i>
            </a>
          </li>
        </ul>
  
        <button className="downloadbutton" onClick={() => window.open(`${language === "en" ? "CV_English.pdf" : "CV.pdf"}`,
      "_blank")}>
          {t("open CV")}
        </button>
      </section>
    </>
  )
}

export default Home;