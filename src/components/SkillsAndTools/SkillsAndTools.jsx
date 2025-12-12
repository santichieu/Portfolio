import { useTranslate } from "../../hooks/useTranslate"
import "./SkillsAndTools.css"

const SkillsAndTools = () => {
  const t = useTranslate();
  return (
    <div id="skills" className="toolsContainer">
        <div className="header">
          <h2>
            <span className="spantitle">
              {t("tools")}
            </span>
          </h2>
          <div className="underline"></div>

        </div>
        <section className="toolsList">

          <div className="toolsBox">
            <h4>Frontend</h4>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div className="toolsBox">
            <h4>Backend</h4>
            <ul>
              <li>C#</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>SQL</li>
              <li>SQLite</li>
              <li>SQL Server</li>
              <li>.NET 8</li>
            </ul>
          </div>

          <div className="toolsBox">
            <h4>{t("skills&methodologies")}</h4>
            <ul>
              <li>Postman</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>GitHub Actions</li>
              <li>CI/CD</li>
              <li>{t("methodologies")}</li>
              <li>Kanban</li>
              <li>Jira</li>
              <li>Scrum</li>
            </ul>
          </div>

        </section>
      </div>

      )
}

      export default SkillsAndTools
