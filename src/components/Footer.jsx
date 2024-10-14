import Images from "@/assets/Images";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto md:grid grid-cols-2 py-20">
        <div className="md:p-0 p-2">
          <h2 className="font-extrabold text-2xl">FASHION</h2>
          <p className="text-gray-500 w-64 my-3">
            Complete your style with awesome clothes from us.
          </p>
          <div className="flex sm:my-10 my-5">
            <img
              className="rounded-full mr-3"
              src={Images.Facebook}
              alt="Facebook"
            />
            <img
              className="rounded-full mr-3"
              src={Images.Instagram}
              alt="Instagram"
            />
            <img className="rounded-full mr-3" src={Images.X} alt="X" />
            <img
              className="rounded-full mr-3"
              src={Images.Linkedin}
              alt="Linkedin"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 md:p-0 p-2">
          <div>
            <h6 className="text-gray-200">Company</h6>
            <div className="flex flex-col my-2">
              <p className="text-gray-500 py-3 hover:text-gray-400 cursor-pointer">
                About
              </p>
              <p className="text-gray-500 py-3 hover:text-gray-400 cursor-pointer">
                Contact us
              </p>
              <p className="text-gray-500 py-3 hover:text-gray-400 cursor-pointer">
                Support
              </p>
              <p className="text-gray-500 py-3 hover:text-gray-400 cursor-pointer">
                Careers
              </p>
            </div>
          </div>
          <div>
            <h6 className="text-gray-200">Quick Link</h6>
            <div className="flex flex-col my-2">
              <p className="text-gray-500 py-3 hover:text-gray-400 cursor-pointer">
                Share Location{" "}
              </p>
              <p className="text-gray-500 py-3 hover:text-gray-400 cursor-pointer">
                Order Tracking
              </p>
              <p className="text-gray-500 py-3 hover:text-gray-400 cursor-pointer">
                Size Guide
              </p>
              <p className="text-gray-500 py-3 hover:text-gray-400 cursor-pointer">
                FAQs
              </p>
            </div>
          </div>
          <div>
            <h6 className="text-gray-200">Legal</h6>
            <div className="flex flex-col my-2">
              <p className="text-gray-500 py-3 hover:text-gray-400 cursor-pointer">
                Terms & Conditons
              </p>
              <p className="text-gray-500 py-3 hover:text-gray-400 cursor-pointer">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
