import React from 'react'
import { useState } from 'react'
import './App.css'

import './components/main/main.css'
import Navbar from './components/header/navbar.tsx'
import Footer from './components/footer/footer.tsx'
import Title from "./components/main/title.tsx";
import CarrouselMain from "./components/main/carrouselMain.tsx";
import Sidebar from './components/utils/sidebars/sidebar.tsx'
import CardSection1 from './components/main/cardSectionColecciones.tsx'
import CardSection2 from './components/main/cardSectionCategorias.tsx'

const App = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
   <>
    <header className='sticky top-0 z-20'>
      <Navbar handleToggle={handleToggle}></Navbar>
    </header>

    <main>
      <>
        <Sidebar open={open} handleClose={handleClose} />
      </>
      <div>
        <Title></Title>
      </div>
      <div className="titleCarousel">
        
        <CarrouselMain></CarrouselMain>
      </div>
      <div className='cardSection2'>
        <CardSection2></CardSection2>
      </div>
      <div className='cardSection1'>
        <CardSection1></CardSection1>
      </div>
    </main>
   
    <footer>
      <Footer></Footer>
    </footer>
    
   </>
  )
}

export default App
