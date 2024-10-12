import Images from "@/assets/Images";
import Companyimage from "@/components/Companyimage";
import Header from "@/components/Header";
import NewArrives from "@/components/NewArrives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import YoungsFav from "@/components/YoungsFav";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />

      <Companyimage />

      <NewArrives />

      <div className="bg-yellow-400 grid md:grid-cols-2 items-center justify-center my-5 p-5">
        <div>
          <img className="md:w-5/6 w-full mx-auto" src={Images.Image4} alt="Image4" />
        </div>
        <div className="md:p-0 py-5">
          <p className="lg:text-7xl md:text-5xl text-3xl font-extrabold">
            <span className="bg-white px-2">PAYDAY</span>
            <br /> SALE NOW
          </p>
          <p className="font-medium md:w-64 my-5">
            Spend minimal $100 get 30% off voucher code for your next purpose
          </p>
          <div className="my-5">
            <p className="font-bold">1 June - 10 June 2021</p>
            <p>*Terms & Conditions apply</p>
          </div>
          <Button>SHOP NOW</Button>
        </div>
      </div>

      <YoungsFav />

      <div className="container mx-auto">
      <div className="grid md:grid-cols-2 items-center justify-center">
        <div>
          <h1>DOWNLOAD APP & GET THE VOUCHER</h1>
        </div>
        <div></div>
      </div>
      </div>



      <div className="bg-yellow-400 flex flex-col items-center justify-center py-10 px-5">
        <h2 className="font-extrabold md:text-4xl text-lg text-center my-3 text-white">
          JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
        </h2>
        <p className="text-white my-5 md:text-2xl text-base text-center">Type your email down below and be yonug wild generation</p>
        <div className="flex w-full max-w-sm items-center bg-white rounded-md p-1 ">
        <Input className="border-none" type="email" placeholder="Add your Email here" />
        <Button type="submit">SEND</Button>
        </div>
      </div>




    </div>
  );
};

export default Home;
