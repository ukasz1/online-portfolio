import { projects } from '../data/index';

const Projects = ({ actualTab }) => {
  return (
    <div className={`projects ${(actualTab === 1) ? 'active-tab' : null}`}>
      <div className='title'>
        <h1>Projects</h1>
        <div className='underline underline-projects'></div>
      </div>
      <section className="project-container">
        {projects.map(project => {
          const { id, src, link /*, description*/ } = project;
          return (
            <article key={id} className="projects-item">
              <a href={link} target="_blank" rel="noreferrer">
                <img src={src} alt={`Project-${id}`} className='card-picture' />
              </a>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default Projects;