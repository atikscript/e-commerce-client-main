import React from "react";
import DiscountData from "./DiscountData";
 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const DiscountCard = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
      };

      console.log("discount",DiscountData);
  return (
    <div>
      <div className="container mx-auto my-8">
        <Slider {...settings}>
          {DiscountData.map((value, index) => (
                <div className="text-center shadow-lg gap-5 bg-[#fff]" key={index}>
                  <div className=" flex justify-center ">
                    <img
                      className="w-32 h-32"
                      src={value.cover}
                      alt=""
                      width="100%"
                    />
                  </div>
                  <h4>{value.name}</h4>
                  <span>{value.price}</span>
                </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DiscountCard;
