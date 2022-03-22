import './main.css';
import avatar from './images/avatar-photo.jpg';
import { FaGithub, FaLinkedin, FaEnvelopeOpen } from "react-icons/fa";

function App() {
  return (
    <main>
      <Avatar />
      <Navbar />
      <Container />
    </main>
  );
}

const Avatar = () => {
  return (
    <div className='avatar-frame'>
      <img src={avatar} alt="avatar" className="avatar" />
    </div>
  )
}

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">O mnie</a></li>
        <li><a href="#">Projekty</a></li>
        <li><a href="#">Osiągnięcia</a></li>
      </ul>
    </nav>
  )
}

const Container = () => {
  return (
    <div className='container'>
      <Socials />
      <Content />
    </div>

  )
}

const Socials = () => {
  return (
    <div className='socials'>
      <div className='socials-inner'>
        <FaGithub className='icon github-icon' />
        <FaLinkedin className='icon linkedin-icon' />
        <FaEnvelopeOpen className='icon email-icon' />
      </div>
    </div>
  )
}

const Content = () => {
  return (
    <div className='content'>

    </div>
  )
}


export default App;
