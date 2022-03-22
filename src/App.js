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
    <div className='test'>
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
      <div className='socials-in'>
        <FaGithub className='icon linkedin' />
        <FaLinkedin className='icon' />
        <FaEnvelopeOpen className='icon' />
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
