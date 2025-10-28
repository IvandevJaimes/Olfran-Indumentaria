import React from "react";
import { useState } from "react";

import Navbar from "./components/header/navbar.tsx";
import MainPage from "./components/mainPage/mainPage.tsx";
import Footer from "./components/footer/footer.tsx";
import Sidebar from "./components/utils/sidebars/sidebar.tsx";
import ModalLogin from "./components/utils/modals/modal.tsx";
import LoginButtons from "./components/utils/login/loginScreen.tsx"



const App = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true)
  const handleOnClose = () => setIsOpen(false);
  
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar handleToggle={handleToggle} handleOpen={handleOpen}></Navbar>
      </header>
      <>
        <ModalLogin title="Iniciar Sesión" isOpen={isOpen} onClose={handleOnClose} >
          <LoginButtons></LoginButtons>
        </ModalLogin>
      </>
      <>
        <Sidebar open={open} handleClose={handleClose} />
      </>

      <MainPage></MainPage>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default App;
