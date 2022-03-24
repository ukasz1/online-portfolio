import card1 from './images/card1.jpg';
import card2 from './images/card2.jpg';
import card3 from './images/card3.jpg';
import card4 from './images/card4.jpg';
import card5 from './images/card5.jpg';
import card6 from './images/card6.jpg';

const Projects = () => {
  return (
    <div className="projects">
      <div className='title'>
        <h1>Projects</h1>
        <div className='underline underline-projects'></div>
      </div>
      <section className="project-container">

        <article className="projects-item">
          <img src={card1} alt="card1" className='card-picture' />
        </article>

        <article className='projects-item'>
          <img src={card2} alt="card2" className='card-picture' />
        </article>

        <article className='projects-item'>
          <img src={card3} alt="card3" className='card-picture' />
        </article>

        <article className='projects-item'>
          <img src={card4} alt="card4" className='card-picture' />
        </article>

        <article className='projects-item'>
          <img src={card5} alt="card5" className='card-picture' />
        </article>


        <article className='projects-item'>
          <img src={card6} alt="card6" className='card-picture' />
        </article>







      </section>
    </div>
  )
}

export default Projects;