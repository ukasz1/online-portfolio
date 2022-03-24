import card1 from './images/card1.jpg';
import card2 from './images/card2.jpg';
import card3 from './images/card3.jpg';
import card4 from './images/card4.jpg';
import card5 from './images/card5.jpg';
import card6 from './images/card6.jpg';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <section className="project-container">
        <img src={card1} alt="card1" className='card-picture' />
        <img src={card2} alt="card2" className='card-picture' />
        <img src={card3} alt="card3" className='card-picture' />
        <img src={card4} alt="card4" className='card-picture' />
        <img src={card5} alt="card5" className='card-picture' />
        <img src={card6} alt="card6" className='card-picture' />
      </section>
    </div>
  )
}

export default Projects;