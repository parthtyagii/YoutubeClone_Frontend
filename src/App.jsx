import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';



const App = () => {
  return (
    <div className='w-[100%] h-auto flex flex-col '>
      <Navbar />
      <Main />
    </div>
  )
};

export default App;