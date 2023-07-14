import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import SearchedMain from './Components/SearchedMain';
import HomepageMain from './Components/HomepageMain';
import VideopageMain from './Components/VideopageMain';
import MenuDrawer from './Components/MenuDrawer';



const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(!isOpen);
  }

  const onClose = () => {
    setIsOpen(false);
  }

  return (
    <div className='w-[100%] h-auto flex flex-col '>
      <Navbar onOpen={onOpen} />
      <HomepageMain />
      {/* <SearchedMain /> */}
      {/* <VideopageMain /> */}


      <MenuDrawer isOpen={isOpen} onClose={onClose} />

    </div>
  )
};

export default App;