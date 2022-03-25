import './main.css';
import { useState } from 'react';
import navList from './navList';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Achievements from './Achievements';
import avatar from './images/avatar-photo.jpg';
import { FaGithub, FaLinkedin, FaEnvelopeOpen, FaBars } from "react-icons/fa";

function App() {
  const [actualTab, setActualTab] = useState(0);

  const checkTab = (e) => {
    e.preventDefault();
    let gainedTabNumber = Number(e.target.id[1]);
    setActualTab(gainedTabNumber);
  }
  return (
    <>
      <main>
        <Avatar />
        <Navbar checkTab={checkTab} />
        <Container actualTab={actualTab} />
      </main>
    </>
  );
}

const Avatar = () => {
  return (
    <div className='avatar-frame'>
      <img src={avatar} alt="avatar" className="avatar" />
    </div>
  )
}

const Navbar = ({ checkTab }) => {
  return (
    <nav>
      <ul>
        {navList.map((link, index) => {
          const { id, text } = link;
          return <li key={id}><button type="button" className="menu-btn" id={'_' + index} onClick={checkTab}>{text}</button></li>
        })}
      </ul>
    </nav>
  )
}

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
        <a href="https://github.com/ukasz1"><FaGithub className='icon github-icon' /></a>
        <a href="https://www.linkedin.com/in/%C5%82ukasz-mitkowski-058883177"><FaLinkedin className='icon linkedin-icon' /></a>
        <a href="mailto:lukaszmitkowski53@gmail.com"><FaEnvelopeOpen className='icon email-icon' /></a>
      </div>
    </div>
  )
}

const Content = ({ actualTab }) => {
  const tabs = [<AboutMe />, <Projects />, <Achievements />];
  console.log(actualTab);
  return (
    <div className='content'>
      {/* {tabs[actualTab]} */}
      <AboutMe actualTab={actualTab} />
      <Projects actualTab={actualTab} />
      <Achievements actualTab={actualTab} />
    </div>
  )
}


export default App;
