import Images from "@/assets/Images";
import React from "react";

const YoungsFav = () => {
  return (
    <div>
      <div className="container mx-auto my-10">
        <h1 className="font-extrabold md:my-10 my-5 md:text-3xl text-xl">
          Young's Favourite
        </h1>
        <div className="md:flex items-center justify-between">
          <div className="p-3">
            <img className="w-full" src={Images.Image5} alt="Image1" />
            <div className="flex items-center justify-between py-2">
              <div>
                <h2 className="font-Poppins font-semibold md:text-lg text-sm">
                  Trending on instagram
                </h2>
                <h6 className="font-Poppins font-medium text-gray-400 md:text-lg text-sm">
                  Explore Now!
                </h6>
              </div>
                <img
                  className="w-1/12"
                  src={Images.RightArrow}
                  alt="RightArrow"
                />
            </div>
          </div>
          <div className="p-3">
            <img className="w-full" src={Images.Image6} alt="Image1" />
            <div className="flex items-center justify-between py-2">
              <div>
                <h2 className="font-Poppins font-semibold md:text-lg text-sm">
                  All Under $50
                </h2>
                <h6 className="font-Poppins font-medium text-gray-400 md:text-lg text-sm">
                  Explore Now!
                </h6>
              </div>
              <img
                className="w-1/12"
                src={Images.RightArrow}
                alt="RightArrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoungsFav;
