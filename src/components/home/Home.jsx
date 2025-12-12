import { useTranslate } from "../../hooks/useTranslate"
import "./home.css"

const Home = () => {
  const t = useTranslate();
  return (
    <>
    <div id="home" className="homeContainer">
    <h1 className="Name">Santiago Chieu</h1>
    <div className="header">
          <h2>
            <span className="spantitle">
              {t("FullStack Developer")}
            </span>
          </h2>
          <div className="underline"></div>

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
      <button>{t("Download CV")}</button>
    
    </div>
    </>
  )
}

export default Home