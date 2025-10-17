import React from "react";
import CardDesign2 from "../utils/cards/cardDesign2";

const CardsSection = () => {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d6?auto=format&fit=crop&w=800&q=80",
      title: "Accesorios",
    },
    {
      img: "https://images.unsplash.com/photo-1520962918287-7448c2878f65?auto=format&fit=crop&w=800&q=80",
      title: "Mujeres",
    },
    {
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      title: "Hombres",
    },
    {
      img: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?auto=format&fit=crop&w=800&q=80",
      title: "Niños",
    },
    {
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      title: "Calzado",
    },
  ];

  return (
    <section className="cardSectionCategorias w-full py-10 bg-black">
      <h2 className="text-3xl font-bold text-white mb-3 px-4">Categorías</h2>

      <div className="flex overflow-x-auto space-x-2 px-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {cards.map((c, i) => (
          <div key={i} className="min-w-[220px] sm:min-w-[260px] md:min-w-[280px] flex-shrink-0">
            <CardDesign2 img={c.img} title={c.title} onclick={()=>{console.log(`card presionada ${i} ${c.title}`)}}/>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent animate-pulse"></div>
    </section>
  );
};

export default CardsSection;
