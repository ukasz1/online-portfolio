import './main.css';
import navList from './navList';
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
        {navList.map(link => {
          const { id, text } = link;
          return <li key={id}><button type="button" className="menu-btn">{text}</button></li>
        })

        }


        {/* <li><a href="#">O mnie</a></li>
        <li><a href="#">Projekty</a></li>
        <li><a href="#">Osiągnięcia</a></li> */}
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
      <h1>Portfolio</h1>
      <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat efficitur felis nec vestibulum. Nam non metus luctus, vehicula quam quis, consectetur elit. Curabitur nec leo nec mauris pretium vestibulum. Sed quis ex in sapien laoreet sodales ut id turpis. Nam purus nisi, semper et pellentesque ut, fermentum nec lacus. Nam tempor, dui vulputate placerat vulputate, velit sapien porttitor lectus, sed cursus ipsum nisi sed risus.
        </p><br />

        <p>Curabitur vel egestas lacus, quis vehicula quam. Aenean facilisis vulputate metus, fermentum bibendum justo efficitur et. Morbi hendrerit ipsum leo, ac lacinia magna lobortis et. Proin luctus lectus fermentum suscipit condimentum. Vestibulum est ante, suscipit vel dapibus sit amet, ullamcorper vitae orci. Vivamus in risus gravida, viverra nunc at, porta neque.</p><br />

        <p>Morbi a viverra nisl. Sed gravida mattis velit, a facilisis tortor vehicula sit amet. Duis porttitor arcu non sapien feugiat hendrerit. Praesent metus arcu, ornare id vehicula aliquam, pulvinar quis velit. Maecenas in tempus risus. Maecenas vestibulum id dui id volutpat. Nulla facilisi. Donec nec turpis lectus. Phasellus felis dui, pulvinar sit amet neque a, pulvinar laoreet felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sed mollis velit. Praesent id tortor eros.</p>

      </article>
    </div>
  )
}


export default App;
