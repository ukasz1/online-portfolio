import './main.css';
import { useState, useEffect } from 'react';
import { Avatar, Navbar, Container } from './Components/index';

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
    <main style={mainWidth >= 1050 ? null : { height: mainHeight }}>
      <Avatar />
      <Navbar checkTab={checkTab} showNavList={showNavList} setShowNavList={setShowNavList} />
      <Container actualTab={actualTab} />
    </main>
  );
}

export default App;
