import React from 'react'

interface CardDesign1Props {
  img: string
  title: string
  subtitle?: string
  alt?: string
}

const CardDesign1: React.FC<CardDesign1Props> = ({ img, title, subtitle, alt }) => {
  return (
    <div className='cardDesign1'>
      <a href="#" className="flex flex-col items-center bg-gray-800 border border-gray-800 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-700 transition duration-300 ease-in-out">
        <img className='object-cover w-full rounded-lg h-48 md:h-20 md:w-48' src={img} alt={alt} />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
          {subtitle && (
            <p className="mb-3 font-normal text-gray-200">{subtitle}</p>
          )}
        </div>
      </a>
    </div>
  )
}

export default CardDesign1
