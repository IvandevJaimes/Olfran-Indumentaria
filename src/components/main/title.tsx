import React from 'react'
import logo from '../../assets/olfranLogo.png'
import './title.css'
import ButtonDesign1 from '../utils/buttons/buttonDesign1'

const Title = () => {
  return (
    <section className="title flex items-center justify-center p-2">
      <div className="flex flex-col items-center gap-6 max-w-3xl">

        <div className='flex items-center'>
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo Olfran" className="w-32 object-contain rounded-lg" />
          </div>
          <div>
      
            <p className="mt-2 text-sm text-white max-w-md">
              Ropa urbana y cómoda pensada para el día a día. Calidad, diseño simple y materiales duraderos.
            </p>
          </div>
        </div>
      
        <div>
          <ButtonDesign1 onClick={() => console.log("")} size="lg" className="titleButton" textColor="white">
            Comprar ahora
          </ButtonDesign1>
        </div>
      </div>
    </section>
  )
}

export default Title
