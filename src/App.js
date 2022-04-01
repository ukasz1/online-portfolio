import './main.css';
import { useState } from 'react';
import { Avatar, Navbar, Container } from './Components/index';

function App() {
  const [actualTab, setActualTab] = useState(0);
  const [showNavList, setShowNavList] = useState(false);

  const checkTab = (e) => {
    let gainedTabNumber = Number(e.target.id[1]);
    setActualTab(gainedTabNumber);
  }
  return (
    <main>
      <Avatar />
      <Navbar checkTab={checkTab} showNavList={showNavList} setShowNavList={setShowNavList} />
      <Container actualTab={actualTab} />
    </main>
  );
}
export default App;
