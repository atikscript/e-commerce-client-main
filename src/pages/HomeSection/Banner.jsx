import React from "react";
import Categories from "./Categories";
import SlideHome from "./SlideHome";
import './Banner.css'

const Banner = () => {
  return (
    <div className="container mx-auto flex mt-10 ">
      <div className="w-1/4">
        <Categories />
      </div>
      <div className="w-3/4">
        <SlideHome />
      </div>
    </div>
  );
};

export default Banner;
