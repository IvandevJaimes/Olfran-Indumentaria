import React from "react";

import CardSection1 from "./cardSectionColecciones.tsx";
import CardSection2 from "./cardSectionCategorias.tsx";
import Title from "./title.tsx";
import CarrouselMain from "./carrouselMain.tsx";

import "./mainPage.css";

const mainPage = () => {
  return (
    <main>
      <div>
        <Title></Title>
      </div>
      <div>
        <CarrouselMain></CarrouselMain>
      </div>
      <div className="cardSection2">
        <CardSection2></CardSection2>
      </div>
      <div className="cardSection1">
        <CardSection1></CardSection1>
      </div>
    </main>
  );
};

export default mainPage;
