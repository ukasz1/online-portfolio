import './main.css';
import avatar from './images/avatar-photo.jpg';

function App() {
  return (
    <main>
      <Avatar />
      <Navbar />
      <Content />
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

const Content = () => {
  return <></>
}


export default App;
