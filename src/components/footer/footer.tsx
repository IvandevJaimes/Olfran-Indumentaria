import React from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import "./footer.css";
import UpBtn from '../utils/buttons/buttonDesign1'
import links from '../../links/links.json'
import locationpng from '../../assets/location.png'


const Footer = () => {
  const returnUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="text-muted footer">
      <div className="mx-auto w-full max-w-screen-xl p-6">
        <div className="flex flex-col items-center gap-10">
          <div className="links">
            <div className="grid text-center md:grid-cols-4 sm:grid-cols-2 gap-8 linksGrid">
              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                  Enlaces útiles
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline text-gray-700">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-gray-700">
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-gray-700">
                      Cursos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-gray-700">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                  Síguenos
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline text-gray-700">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-gray-700">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-gray-700">
                      TikTok
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                  Legal
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline text-gray-700">
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-gray-700">
                      Términos y Condiciones
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                  Soporte
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline text-gray-700">
                      Horarios de atención
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-gray-700">
                      ¿Cómo reservar una cita?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-gray-700">
                      Métodos de Pago
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <hr className="my-8" />

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          
          <a href={links.locations.location} target="blank" className="adress text-l  items-center text-bold text-gray-800 text-center sm:text-left hover:underline">
            <img src={locationpng} className="w-3 h-3 text-white"/>
            <p>{links.locations.reference}</p>
          </a>
        
          <span className="text-sm text-white text-center sm:text-left">
            © 2025{" "}
            <a href="#" className="hover:underline ">
              Manos de Diosa
            </a>
            . Todos los derechos reservados.
          </span>

          <div className="flex justify-center space-x-6">
            {/* Facebook */}
            <a href="#" className="text-gray-700 hover:text-on-accent transition-colors duration-200 ">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="#" className="text-gray-700 hover:text-on-accent transition-colors duration-200 ml-2">
              <svg
                className="w-6 h-6 t"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                  clip-rule="evenodd"
                />
                <path
                  fill="currentColor"
                  d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="text-gray-700 hover:text-on-accent transition-colors duration-200 ml-2">
              <svg
                className="w-6 h-6 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
             {/* TikTok (icono estilizado) */}
            <a href="#" aria-label="TikTok" className="text-gray-700 hover:text-on-accent transition-colors duration-200">
              <svg className="h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                <path d="M16.5 2c-.3 0-.6.1-.8.3-.2.2-.3.5-.3.8v7.1c0 .6-.5 1.1-1.1 1.1-1.6 0-2.9 1.3-2.9 2.9 0 1.6 1.3 2.9 2.9 2.9 2.2 0 4-1.8 4-4V6.6c.9.5 2 .8 3.1.8v-2c-1.3 0-2.6-.4-3.6-1z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center ">
          <UpBtn onClick={returnUp} size="md" className="upBtn flex items-center text-center gap-2 " textColor="white">
            <ArrowUpCircleIcon className="w-6 h-6" />
            <span>Volver arriba</span>
          </UpBtn>
        </div>
      </div>
    </div>
  );
};

export default Footer;
