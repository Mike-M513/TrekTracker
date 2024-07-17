import React from "react";

const HeroSection = ({ image, description, section = "hero-section" }) => {
  return (
    <div className={section} style={{ backgroundImage: `url(${image.url})` }}>
      <div className="hero-content">
        <h1>{description}</h1>
      </div>
    </div>
  );
};

export default HeroSection;
