import { projectsInfo } from "../../data/projects"
import "./Projects.css"

const Projects = () => {
  return (
    <div id="projects" className='projectContainer'>
      <h2>Proyectos</h2>

      <div className='cardContainer'>
        {projectsInfo.map((project) => (
          <div key={project.id} className="projectCard">

            <h3>{project.title}</h3>

            <div className="projectBottom">
              <p>{project.description}</p>
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
                  <i className="bi bi-github"></i>  Ver Proyecto
                </a>
              )}
              {project.projectLinkFront && (
                <a
                  href={project.projectLinkFront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cardLink"
                >
                  <i className="bi bi-code"></i> Ver Frontend
                </a>
              )}

              {project.projectLinkBack && (
                <a
                  href={project.projectLinkBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cardLink"
                >
                  <i className="bi bi-database-fill"></i> Ver Backend
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
