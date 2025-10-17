import React from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import "./footer.css";

import olfranLogoSecundario from "../../assets/olfranLogoSecundario.png";

const Footer = () => {
  const volverArriba = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-gray-400">
      <div className="mx-auto w-full max-w-screen-xl p-6">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center">
            <a href="#" className="flex items-center mb-4">
              <img
                src={olfranLogoSecundario}
                className="h-8 me-3"
                alt="Logo Olfran"
              />
              <span className="self-center text-2xl font-semibold text-white">
                Olfran
              </span>
            </a>
            <p className="text-center text-sm text-gray-500 mb-2">
              Calidad y estilo en cada prenda.
            </p>
          </div>

          <div className="links">
            <div className="grid text-center md:grid-cols-4 sm:grid-cols-2 gap-8">
              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                  Enlaces útiles
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Nosotros
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Tienda
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Preguntas Frecuentes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
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
                    <a href="#" className="hover:underline">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
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
                    <a href="#" className="hover:underline">
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
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
                    <a href="#" className="hover:underline">
                      Envíos y Devoluciones
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Métodos de Pago
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Ayuda en Línea
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <span className="text-sm text-gray-400 text-center sm:text-left">
            © 2025{" "}
            <a href="#" className="hover:underline text-white">
              Olfran
            </a>
            . Todos los derechos reservados.
          </span>

          <div className="flex justify-center space-x-6">
            {/* Facebook */}
            <a href="#" className="hover:text-white">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="#" className="hover:text-white">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.738 5.458 2.025 7.764L0 32l8.449-2.018C10.542 31.262 13.211 32 16 32 24.837 32 32 24.837 32 16S24.837 0 16 0zm8.52 23.563c-.336.944-1.998 1.8-2.77 1.92-1.46.224-3.16.326-5.13-.116-5.75-1.178-9.466-6.576-9.79-6.916-.33-.346-2.74-3.32-2.74-6.333 0-3.012 1.55-4.492 2.09-5.11.544-.623 1.178-.764 1.554-.764.392 0 .78.01 1.126.01.362 0 .846-.14 1.323.994.477 1.136 1.622 3.932 1.765 4.226.143.296.236.658.024 1.064-.212.405-.31.654-.625 1.016-.312.362-.662.805-.94 1.086-.28.28-.56.593-.28 1.174.28.578 1.234 2.048 2.64 3.31 1.806 1.58 3.287 2.08 3.878 2.318.588.236.933.198 1.277-.118.344-.314 1.39-1.626 1.777-2.293.386-.664.77-.577 1.278-.35.507.228 3.018 1.426 3.541 1.682.524.257.876.385 1.01.598.136.212.136 1.243-.2 2.184z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="hover:text-white">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.773.131 4.602.38 3.635 1.348c-.967.967-1.217 2.138-1.276 3.417C2.013 6.741 2 7.151 2 10.41v3.179c0 3.259.013 3.669.072 4.949.059 1.279.309 2.45 1.276 3.417.967.967 2.138 1.217 3.417 1.276 1.279.059 1.689.072 4.949.072s3.669-.013 4.949-.072c1.279-.059 2.45-.309 3.417-1.276.967-.967 1.217-2.138 1.276-3.417.059-1.28.072-1.689.072-4.949V10.41c0-3.259-.013-3.669-.072-4.949-.059-1.279-.309-2.45-1.276-3.417-.967-.967-2.138-1.217-3.417-1.276C15.669.013 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={volverArriba}
            className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 rounded-full px-4 py-2 transition"
          >
            <ArrowUpCircleIcon className="w-6 h-6" />
            <span>Volver arriba</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
