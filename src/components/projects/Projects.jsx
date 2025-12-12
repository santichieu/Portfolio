import { projectsInfo } from "../../data/projects"
import { useTranslate } from "../../hooks/useTranslate";
import "./Projects.css"

const Projects = () => {
    const {t} = useTranslate();
  return (
    <div id="projects" className='projectContainer'>
      <div className="header">
          <h2>
            <span className="spantitle">
              {t("projects")}
            </span>
          </h2>
          <div className="underline"></div>

        </div>

      <div className='cardContainer'>
        {projectsInfo.map((project) => (
          <div key={project.id} className="projectCard">

            <h3>{project.title}</h3>

            <div className="projectBottom">
              <p>{t(project.description)}</p>
              <img src={project.image} alt={project.title} />
            </div>

            <div className="cardLinks">
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cardLink"
                >
                  <i className="bi bi-github"></i>  {t("GitHub Project")}
                </a>
              )}
              {project.projectLinkFront && (
                <a
                  href={project.projectLinkFront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cardLink"
                >
                  <i className="bi bi-code"></i> Frontend
                </a>
              )}

              {project.projectLinkBack && (
                <a
                  href={project.projectLinkBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cardLink"
                >
                  <i className="bi bi-database-fill"></i>Backend
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
