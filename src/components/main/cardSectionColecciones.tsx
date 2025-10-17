import React from 'react'
import CardDesign1 from '../utils/cards/cardDesign1'
const cardSection1 = () => {
    const cards = [
        { 
          img: 'https://tse2.mm.bing.net/th/id/OIP.Of4m_tBoFqdzjUY5fnl-qAHaHa?pid=Api&P=0&h=220', 
          title: 'Colección Invierno', 
          subtitle: 'Abrigos, sweaters y prendas tejidas únicas', 
          alt: 'Abrigos de invierno'
        },
        { 
          img: 'https://tse4.mm.bing.net/th/id/OIP.hMn0KFL3qVgdkrmSbwrDmgHaHa?pid=Api&P=0&h=220', 
          title: 'Streetwear', 
          subtitle: 'Diseños urbanos con identidad independiente', 
          alt: 'Moda urbana'
        },
        { 
          img: 'https://tse4.mm.bing.net/th/id/OIP.h_dIufDp9qsbBhdk1MG-QwHaFe?pid=Api&P=0&h=220', 
          title: 'Ropa sin género', 
          subtitle: 'Moda libre, cómoda y sostenible para todos los cuerpos', 
          alt: 'Ropa sin género'
        }
      ]
  return (
    <>
      <section className="w-full py-10 bg-dark mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2 px-4 mt-6">
        Colecciones destacadas
      </h2>

      <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth ">
        <div className="flex space-x-6 px-4">
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-80 snap-center">
              <CardDesign1
                img={card.img}
                title={card.title}
                subtitle={card.subtitle}
                alt={card.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default cardSection1
