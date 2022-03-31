import avatar from '../images/avatar-photo.jpg';
import navList from '../data/navList';
import { FaBars } from "react-icons/fa";

const Navbar = ({ checkTab, showNavList, setShowNavList }) => {
  return (
    <nav>
      <BasicNav checkTab={checkTab} />
      <ToggleNav checkTab={checkTab} showNavList={showNavList} setShowNavList={setShowNavList} />
    </nav >
  )
}
const BasicNav = ({ checkTab }) => {
  return (
    <ul className='basic-nav'>
      {navList.map((link, index) => {
        const { id, text } = link;
        return <li key={id}><span className="menu-btn" id={'_' + index} onClick={checkTab}>{text}</span></li>
      })}
    </ul>
  )
}

const ToggleNav = ({ checkTab, showNavList, setShowNavList }) => {
  return (
    <div className='toggle-nav'>
      <div className='upper-nav'>
        <div className='little-avatar-div'>
          <span className='nav-span'>ŁUKASZ MITKOWSKI'S PORTFOLIO</span>
          <img src={avatar} alt="logo" className='small-avatar' />
        </div>
        <div className='nav-button'>
          <button className='toggle-button' onClick={() => setShowNavList(!showNavList)}>
            <FaBars className='fa-bars' />
          </button>
        </div>
      </div>

      <div className={`links-container ${showNavList && 'show-links-container'}`}>
        <ul className='links'>
          {navList.map((link, index) => {
            const { id, text } = link;
            return (
              <li key={id}><span
                className="links-btn"
                id={'_' + index}
                onClick={(e) => { checkTab(e); setShowNavList(!showNavList) }}
              >{text}</span></li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export { Navbar };