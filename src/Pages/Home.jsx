import Images from "@/assets/Images";
import Companyimage from "@/components/Companyimage";
import Header from "@/components/Header";
import NewArrives from "@/components/NewArrives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import YoungsFav from "@/components/YoungsFav";
import { Grip, Search } from "lucide-react";
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
          <p className="lg:text-7xl md:text-5xl text-4xl font-extrabold">
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

      {/* <div className="container mx-auto">
      <div className="grid md:grid-cols-2 items-center justify-center">
        <div>
          <h2 className="font-extrabold text-3xl w-7/12 my-5">DOWNLOAD APP & GET THE VOUCHER</h2>
          <p className="font-medium text-md text-gray-600 w-6/12 my-5">Get 30% for first transction using Rondovision mobile app now.</p>
          <div className="flex py-5 gap-5">
            <img className="w-1/4" src={Images.Appstore} alt="Appstore" />
            <img className="w-1/4" src={Images.Playstore} alt="Playstore" />
          </div>
        </div>
        <div>
          <div className="w-2/3 h-4/5 border-[20px] border-solid border-gray-300 rounded-3xl p-5">
          <div className="flex justify-between items-center">
            <Grip color="yellow" size={30} />
            <img src={Images.Profilepic} alt="Profilepic" />
          </div>
          <h2 className="font-extrabold my-5 text-2xl">Match your style </h2>
          <div className="flex justify-between items-center bg-slate-200 rounded-3xl px-4 my-4">
              <Search />
              <Input className='border-none bg-slate-200' disabled placeholder="Search" />
            </div>
            <div className="flex items-center">
              <p className="px-6 py-2 bg-yellow-400 rounded-3xl mr-5">Trending Now</p>
              <p className="px-6 py-2 bg-slate-300 text-gray-400 rounded-3xl mr-5">All</p>
              <p className="px-6 py-2 bg-slate-300 text-gray-400 rounded-3xl">New</p>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
      </div> */}



      <div className="bg-yellow-400 flex flex-col items-center justify-center py-10 px-5">
        <h2 className="font-extrabold md:text-5xl text-xl text-center my-2 text-white">
          JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
        </h2>
        <p className="text-white my-5 md:text-2xl text-lg text-center">Type your email down below and be yonug wild generation</p>
        <div className="flex w-full max-w-sm items-center bg-white rounded-md p-1 ">
        <Input className="border-none" type="email" placeholder="Add your Email here" />
        <Button type="submit">SEND</Button>
        </div>
      </div>




    </div>
  );
};

export default Home;
