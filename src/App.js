import './main.css';
import { useState, useEffect } from 'react';
import navList from './navList';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Achievements from './Achievements';
import avatar from './images/avatar-photo.jpg';
import { FaGithub, FaLinkedin, FaEnvelopeOpen, FaBars } from "react-icons/fa";

function App() {
  const [actualTab, setActualTab] = useState(2);
  const [showNavList, setShowNavList] = useState(false);
  const [mainWidth, setMainWidth] = useState(window.innerWidth);
  const [mainHeight, setMainHeight] = useState(window.innerHeight);

  const checkTab = (e) => {
    let gainedTabNumber = Number(e.target.id[1]);
    setActualTab(gainedTabNumber);
  }

  //** To improve RWD and avoid hardcoding the content height **/
  useEffect(() => {
    checkDocumentHeight();
    window.addEventListener('resize', checkDocumentHeight);
    return () => {
      window.removeEventListener('resize', checkDocumentHeight)
    }
  }, [actualTab])

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
      const newMainHeight = navHeight + contentPaddingTop + titleHeight + sectionPaddingTop + tableHeight;
      setMainHeight(newMainHeight);
    }
    else
      setMainHeight(800);
  }
  // ----------------------------------

  return (
    <div className="main" style={mainWidth >= 1050 ? null : { height: mainHeight }}>
      <Avatar />
      <Navbar checkTab={checkTab} showNavList={showNavList} setShowNavList={setShowNavList} />
      <Container actualTab={actualTab} />
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

const Navbar = ({ checkTab, showNavList, setShowNavList }) => {
  return (
    <nav>
      <ul className='basic-list'>
        {navList.map((link, index) => {
          const { id, text } = link;
          return <li key={id}><a className="menu-btn" id={'_' + index} onClick={checkTab}>{text}</a></li>
        })}
      </ul>
      <div className='nav'>
        <div className='upper-nav'>
          <div className='little-avatar-div'>
            <span className='nav-span'>ŁUKASZ MITKOWSKI'S PORTFOLIO</span>
            <img src={avatar} alt="logo" className='small-avatar' />
          </div>
          <div className='nav-button'>
            <button className='nav-toggle' onClick={() => setShowNavList(!showNavList)}>
              <FaBars className='fa-bars' />
            </button>
          </div>
        </div>
        <div className={`links-container ${showNavList && 'show-links-container'}`}>
          <ul className='links'>
            {navList.map((link, index) => {
              const { id, text } = link;
              return <li key={id}><a className="links-btn" id={'_' + index} onClick={(e) => { checkTab(e); setShowNavList(!showNavList) }}>{text}</a></li>
            })}
          </ul>
        </div>
      </div>
    </nav >
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
        <a href="https://github.com/ukasz1" target="_blank"><FaGithub className='icon github-icon' /></a>
        <a href="https://www.linkedin.com/in/%C5%82ukasz-mitkowski-058883177" target="_blank"><FaLinkedin className='icon linkedin-icon' /></a>
        <a href="mailto:lukaszmitkowski53@gmail.com" target="_blank"><FaEnvelopeOpen className='icon email-icon' /></a>
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
