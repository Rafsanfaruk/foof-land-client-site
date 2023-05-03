import React from "react";
import pic from "../../../assets/cc.jpg";
import Card from "../Card/Card";

const Home = () => {
  return (
    <div className="my-container mt-10">
      <div className="card card-side bg-slate-100 rounded-lg">
        <figure>
          <img className="w-full sm:w-3/4 object-cover object-center rounded-lg shadow-md" src={pic} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Cook Anything with the express!</h2>
          <p>Food is an essential aspect of human life and plays a significant role in our culture and society.</p>
          <div className="justify-center flex flex-row gap-3">
            <button className="btn btn-primary">Let's Cook</button>
            <button className="btn btn-outline btn-primary">Explore More</button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Card></Card>
      </div>
    </div>
  );
};

export default Home;
