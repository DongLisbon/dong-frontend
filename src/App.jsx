import React from 'react'
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (

    <>
    <div className='bg-gray-50'>
      <Header/>
      <Routes>
       <Route path = "/" element = {<Homepage/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App
