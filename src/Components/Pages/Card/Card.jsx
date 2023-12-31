import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard/SingleCard";
import Gallery from "../Gallery/Gallery";

const Card = () => {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    fetch("https://b7a10-chef-recipe-hunter-server-side-rafsanfaruk-rafsanfaruk.vercel.app/data")
      .then((res) => res.json())
      .then((data) => setRecipeData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center items-center">
        Let's Meet The Experts
      </h1>
      <p className="text-center">
        <span>
          Let’s face it: if you and I have the same capabilities, the same
          energy, the same staff,
          <br></br>if the only thing that’s different between you and me is the
          products we can get
        </span>
      </p>
      <div className="grid grid-cols-3 gap-5 mt-5">
         {
            recipeData?.map((data) =>(
                <SingleCard
                key={data?.id}
                data={data}
                >
                    
                </SingleCard>

            ))
         }
      </div>
      <div className="mt-14 mb-10">
      <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Card;
