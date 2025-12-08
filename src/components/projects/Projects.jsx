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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects