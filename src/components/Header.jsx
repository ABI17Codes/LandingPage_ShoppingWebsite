import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Images from "@/assets/Images";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center my-5 ">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div>
              {/* <img src="" alt="" /> */}
              <h2 className="font-extrabold text-2xl">FASHION</h2>
            </div>
            <ul className="hidden lg:flex justify-center items-center gap-10">
              <li className="font-semibold cursor-pointer">CATALOGUE</li>
              <li className="font-semibold cursor-pointer">FASHION</li>
              <li className="font-semibold cursor-pointer">FAVOURITE</li>
              <li className="font-semibold cursor-pointer">LIFESTYLE</li>
              {/* <Button>SIGN UP</Button> */}
            </ul>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {isOpen && (
            <ul className="flex flex-col w-full right-0 fixed items-center justify-center z-20 my-5 lg:hidden bg-slate-900 text-white">
              <li className="font-semibold cursor-pointer m-5">CATALOGUE</li>
              <li className="font-semibold cursor-pointer m-5">FASHION</li>
              <li className="font-semibold cursor-pointer m-5">FAVOURITE</li>
              <li className="font-semibold cursor-pointer m-5">LIFESTYLE</li>
              {/* <Button>SIGN UP</Button> */}
            </ul>
          )}
        </div>
      </nav>

      <div className="bg-gray-100 px-5 rounded-3xl ">
        <div className="grid sm:grid-cols-2 p-3">
          <div>
            <p className="md:font-extrabold font-bold md:text-6xl lg:text-7xl text-5xl">
              LET'S <br />
              EXPLOER <br /> 
              <span className="bg-yellow-300 px-2 box-decoration-slice">UNIQUE</span> <br /> 
              CLOTHES.
            </p>
            <p className="font-medium lg:text-2xl text-lg my-7">Live for influential innovative fashion!</p>
            <Button>Shop Now</Button>
          </div>
          <div>
            <img
              className="md:w-5/6 w-full mx-auto my-5"
              src={Images.Ladypinkclothes}
              alt="clothes image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
