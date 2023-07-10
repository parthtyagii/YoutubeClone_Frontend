import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import SearchedMain from './Components/SearchedMain';
import HomepageMain from './Components/HomepageMain';



const App = () => {
  return (
    <div className='w-[100%] h-auto flex flex-col '>
      <Navbar />
      {/* <HomepageMain /> */}
      <SearchedMain />

    </div>
  )
};

export default App;