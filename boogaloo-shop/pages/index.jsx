import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";

const index = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Melhores Produtos</h2>
        <p>Grande diversidade de dispovisivos de áudio.</p>
      </div>
      <div className="products-container">
        {["Produto 1", "Produto 2"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
};

export default index;
