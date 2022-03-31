import './main.css';
import { useState, useEffect } from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Achievements from './Achievements';
import { Avatar } from './Components/index';

import { Navbar } from './Components/index'

import avatar from './images/avatar-photo.jpg';
import { socials } from './data/index';
import { FaBars } from "react-icons/fa";

function App() {
  const [actualTab, setActualTab] = useState(0);
  const [showNavList, setShowNavList] = useState(false);
  const [mainWidth, setMainWidth] = useState(window.innerWidth);
  const [mainHeight, setMainHeight] = useState(window.innerHeight);

  const checkTab = (e) => {
    let gainedTabNumber = Number(e.target.id[1]);
    setActualTab(gainedTabNumber);
  }

  //** To improve RWD and avoid hardcoding the content height **/
  useEffect(() => {
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
        setMainHeight(850);
    }

    checkDocumentHeight();
    window.addEventListener('resize', checkDocumentHeight);
    return () => {
      window.removeEventListener('resize', checkDocumentHeight)
    }
  }, [actualTab])
  // ----------------------------------

  return (
    <div className="main" style={mainWidth >= 1050 ? null : { height: mainHeight }}>
      <Avatar />
      <Navbar checkTab={checkTab} showNavList={showNavList} setShowNavList={setShowNavList} />
      <Container actualTab={actualTab} />
    </div>
  );
}

// const Navbar = ({ checkTab, showNavList, setShowNavList }) => {
//   return (
//     <nav>
//       <BasicNav checkTab={checkTab} />
//       <ToggleNav checkTab={checkTab} showNavList={showNavList} setShowNavList={setShowNavList} />
//     </nav >
//   )
// }
// const BasicNav = ({ checkTab }) => {
//   return (
//     <ul className='basic-nav'>
//       {navList.map((link, index) => {
//         const { id, text } = link;
//         return <li key={id}><span className="menu-btn" id={'_' + index} onClick={checkTab}>{text}</span></li>
//       })}
//     </ul>
//   )
// }

// const ToggleNav = ({ checkTab, showNavList, setShowNavList }) => {
//   return (
//     <div className='toggle-nav'>
//       <div className='upper-nav'>
//         <div className='little-avatar-div'>
//           <span className='nav-span'>ŁUKASZ MITKOWSKI'S PORTFOLIO</span>
//           <img src={avatar} alt="logo" className='small-avatar' />
//         </div>
//         <div className='nav-button'>
//           <button className='toggle-button' onClick={() => setShowNavList(!showNavList)}>
//             <FaBars className='fa-bars' />
//           </button>
//         </div>
//       </div>

//       <div className={`links-container ${showNavList && 'show-links-container'}`}>
//         <ul className='links'>
//           {navList.map((link, index) => {
//             const { id, text } = link;
//             return <li key={id}><span className="links-btn" id={'_' + index} onClick={(e) => { checkTab(e); setShowNavList(!showNavList) }}>{text}</span></li>
//           })}
//         </ul>
//       </div>
//     </div>
//   )
//}


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

export default App;
