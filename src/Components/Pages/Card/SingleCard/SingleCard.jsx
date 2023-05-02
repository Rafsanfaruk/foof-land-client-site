import React from "react";

const SingleCard = ({ data }) => {
  const {
    chefPicture,
    chefName,
    yearsOfExperience,
    numRecipes,
    likes,
    Recipes_image,
  } = data;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={chefPicture} alt="Shoes" className="h-64 w-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chefName}</h2>
          <p> Years of Experience:{yearsOfExperience}</p>
          <p>Number of Recipe:{numRecipes}</p>
          <p>Like :{likes}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
