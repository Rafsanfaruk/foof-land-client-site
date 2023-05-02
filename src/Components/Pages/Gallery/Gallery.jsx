import React from "react";
import pic1 from "../../../assets/gallery1.jpg";
import pic2 from "../../../assets/gallery2.jpg";
import pic3 from "../../../assets/gallery3.jpg";
import pic4 from "../../../assets/gallery4.jpg";

const Gallery = () => {
  return (
    <div className="w-full items-center ">
      <h2 className="text-center font-bold text-2xl">
        Gallery Our Food And Cook's
      </h2>
      <p className="text-center mb-10">
        Cooking is an essential part of the food experience. It is the process
        of preparing food by using various techniques and ingredients <br /> to
        create dishes that are not only delicious but also visually appealing.
      </p>
      <div className="w-full h-96 carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img src={pic4} alt="food" className="h-full w-full object-cover" />
        </div>
        <div className="carousel-item">
          <img src={pic2} alt="food" className="h-full w-full object-cover" />
        </div>
        <div className="carousel-item">
          <img src={pic3} alt="Pizza" className="h-full w-full object-cover" />
        </div>
        <div className="carousel-item">
          <img src={pic1} alt="Pizza" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
