import { useTranslate } from "../../hooks/useTranslate";
import "./AboutMe.css"

const AboutMe = () => {
  const t = useTranslate();
  return (
    <div id="aboutMe">
    <div  className="aboutmecontainer">
      <section className="aboutmecontent">
          <h3 className="header">
            <span className="spantitle">
              {t("About Me")}
            </span>
          <div className="underline"></div>
          </h3>
        <div className="aboutmetext">
          {t("aboutmetext")}
        </div>

        <div className="experiences">
          {t("experiences")}
        </div>

        <div className="englishlevelandgrowth">
          {t("englishlevelandgrowth")}
        </div>
      </section>
    </div>
    </div>
  );
}

export default AboutMe
