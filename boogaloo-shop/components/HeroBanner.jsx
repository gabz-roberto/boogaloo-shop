import React from "react";
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">TEXTO CURTO</p>
        <h3>TEXTO MÉDIO</h3>
        <img  src="" alt="headphones" className="hero-banner-image"/>
        <div>
          <Link href="/product/id">
            <button type="button">TEXTO</button>
          </Link>
          <div className="desc">
            <h5>Descrição</h5>
            <p>DESCRIÇÃO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
