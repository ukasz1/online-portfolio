import './main.css';
import avatar from './images/avatar-photo.jpg';
import { FaGithub, FaLinkedin, FaEnvelopeOpen, FaBars } from "react-icons/fa";

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
        <a href="https://github.com/ukasz1"><FaGithub className='icon github-icon' /></a>
        <a href="https://www.linkedin.com/in/%C5%82ukasz-mitkowski-058883177"><FaLinkedin className='icon linkedin-icon' /></a>
        <a href="mailto:lukaszmitkowski53@gmail.com"><FaEnvelopeOpen className='icon email-icon' /></a>
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
