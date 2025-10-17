import React from "react";

type CardProps = {
  img: string;
  title: string;
  alt?: string;
  onclick: () => void;
};

const CardDesign2: React.FC<CardProps> = ({ img, title, alt, onclick }) => {
  return (
    <div className="w-48 sm:w-80 md:w-96 bg-gray-800  rounded-lg  overflow-hidden shadow-lg hover:bg-gray-700 hover:transition-transform duration-300 cursor-pointer" onClick={onclick}>
      <img
        src={img}
        alt={alt || title}
        className="w-full h-56 sm:h-64 object-cover rounded-lg"
      />
      <div className="p-4 text-center">
        <h2 className="text-base font-semibold text-white">{title}</h2>
      </div>
     
    </div>
  );
};

export default CardDesign2;
