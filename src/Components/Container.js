import AboutMe from './AboutMe';
import Projects from './Projects';
import { Achievements } from './Achievements';
import socials from '../data/socials'

const Container = ({ actualTab }) => {
  return (
    <div className='container'>
      <Socials />
      <Content actualTab={actualTab} />
    </div>
  )
}

const Socials = () => {
  return (
    <div className='socials'>
      <div className='socials-inner'>
        {socials.map((item, index) => {
          const { link, icon } = item;
          return <a key={index} href={link} target="_blank" rel="noreferrer">{icon}</a>
        })}
      </div>
    </div>
  )
}

const Content = ({ actualTab }) => {
  return (
    <div className='content'>
      <AboutMe actualTab={actualTab} />
      <Projects actualTab={actualTab} />
      <Achievements actualTab={actualTab} />
    </div>
  )
}

export { Container };