import React from "react";

import "./navbar.css";

import olfranLogoSecundario from "../../assets/olfranLogoSecundario.png";

interface NavbarProps {
  handleToggle: () => void;
}

const navbar: React.FC<NavbarProps> = ({ handleToggle }) => {
  return (
    <>
      <nav className="bg-gray-900 border-gray-200 dark:bg-gray-100 sticky">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl py-4 px-2">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* Botón openSidebar al lado del logo, solo mobile */}
            <button
              onClick={handleToggle}
              className="openSidebar text-gray-400 hover:text-white cursor-pointer md:hidden mr-4"
              type="button"
              aria-label="Abrir menú"
            >
              <svg
                className="w-8 h-8"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={olfranLogoSecundario}
                alt="Logo Olfran"
                className="olfranLogo2"
              />
              <div className="olfranTitle flex flex-col leading-tight">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  Olfran
                </span>
                <span className="olfranSubTitle text-gray-300">Indumentaria</span>
              </div>
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <section className="flex items-center max-w-sm mx-auto bg-gray-900 rounded-2xl px-3 py-2 searchBar">
              <input
                type="text"
                placeholder="Buscar"
                className="w-full rounded-2xl border border-gray-700 bg-gray-900 p-2 text-sm text-white placeholder-gray-400 focus:border-gray-500 focus:ring-gray-200 outline-none"
              />
              <button
                type="button"
                className="ml-2 text-gray-400 hover:text-blue-500"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </section>
            <section className="searchButtonMb">
              <button
                type="button"
                className="border border-gray-700 bg-gray-900 px-4 py-2 text-m text-gray-400"
              >
                <span>
                  <p>Buscar</p>
                </span>
                <div>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </button>
            </section>

            <div className="loginButton flex items-center">
              <button className="text-sm text-white">Iniciar sesión</button>
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-gray-800">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center text-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li className="ml-4">
                <a
                  href="#"
                  className="text-white hover:underline "
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Productos
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
