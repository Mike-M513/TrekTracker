import React from "react";

const HeroSection = ({ image, description }) => {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${image.url})` }}
    >
      <div className="hero-content">
        <h1>{description}</h1>
      </div>
    </div>
  );
};

export default HeroSection;
