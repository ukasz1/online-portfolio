import './main.css';
import { useState, useEffect } from 'react';
import navList from './navList';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Achievements from './Achievements';
import avatar from './images/avatar-photo.jpg';
import { FaGithub, FaLinkedin, FaEnvelopeOpen, FaBars } from "react-icons/fa";

function App() {
  const [actualTab, setActualTab] = useState(0);
  const [showNavList, setShowNavList] = useState(true);
  const [mainWidth, setMainWidth] = useState(window.innerWidth);
  const [mainHeight, setMainHeight] = useState(window.innerHeight);

  const checkTab = (e) => {
    let gainedTabNumber = Number(e.target.id[1]);
    setActualTab(gainedTabNumber);
  }

  //** To avoid hardcoding the height for RWD  **/
  useEffect(() => {
    checkDocumentHeight();
    window.addEventListener('resize', checkDocumentHeight);
    return () => {
      window.removeEventListener('resize', checkDocumentHeight)
    }
  }, [])

  const checkDocumentHeight = () => {
    setMainWidth(window.innerWidth);
    setMainHeight(window.innerHeight);

    const navHeight = 70;
    const contentPaddingTop = 60;

    const title = document.getElementsByTagName('h1')[actualTab];
    const titleHeight = title.getBoundingClientRect().height;

    if (actualTab === 2) {
      const table = document.getElementsByTagName('table')[0];
      const tableHeight = table.getBoundingClientRect().height;

      const sectionPaddingTop = 30;
      const tmp = navHeight + contentPaddingTop + titleHeight + sectionPaddingTop + tableHeight;
      setMainHeight(tmp);
    }
    else
      setMainHeight(800);

  }

  return (
    <div className="main" style={mainWidth >= 1050 ? null : { height: mainHeight }}>
      <Avatar />
      <Navbar checkTab={checkTab} showNavList={showNavList} />
      <Container actualTab={actualTab} />
      {/* Szerokość dokumentu: {mainWidth} PX <br />
      Wysokość dokumentu: {mainHeight} PX */}
    </div>
  );
}

const Avatar = () => {
  return (
    <div className='avatar-frame'>
      <img src={avatar} alt="avatar" className="avatar" />
    </div>
  )
}

const Navbar = ({ checkTab, showNavList }) => {
  return (
    <nav>
      <ul>
        {navList.map((link, index) => {
          const { id, text } = link;
          return <li key={id}><a className="menu-btn" id={'_' + index} onClick={checkTab}>{text}</a></li>
        })}
        <button className='nav-toggle'>
          <FaBars className='fa-bars' />
        </button>
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
