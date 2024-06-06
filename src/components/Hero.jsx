import React from "react";
import Cards from "./Cards";

const Hero = () => {
  // Example array with 10 items to represent 10 cards
  const cardsData = Array.from({ length: 5 }, (_, index) => index);

  return (
    <div className="mr-32 ml-32">
      <div className="grid grid-cols-4 gap-2 m-5 ">
        {cardsData.map((card, index) => (
          <Cards key={index} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
