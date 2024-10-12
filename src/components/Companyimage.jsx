import Images from "@/assets/Images";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Companyimage = () => {
  return (
    <div className="my-10">
       <Carousel
        className="w-full p-5 bg-yellow-400"
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
      >
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          <CarouselItem className="basis-1/3 lg:basis-1/6">
            <img className="h-8 sm:h-14 object-contain" src={Images.HM} alt="HM" />
          </CarouselItem>
          <CarouselItem className="basis-1/3 lg:basis-1/5">
            <img className="h-8 sm:h-14 object-contain" src={Images.AMAZON} alt="AMAZON" />
          </CarouselItem>
          <CarouselItem className="basis-1/3 lg:basis-1/5">
            <img className="h-8 sm:h-14 object-contain"src={Images.OBEY} alt="OBEY" />
          </CarouselItem>
          <CarouselItem className="basis-1/3 lg:basis-1/5">
            <img className="h-8 sm:h-14 object-contain"src={Images.SHOPIFY} alt="SHOPIFY" />
          </CarouselItem>
          <CarouselItem className="basis-1/3 lg:basis-1/5">
            <img className="h-8 sm:h-14 object-contain"src={Images.LACOSTE} alt="LACOSTE" />
          </CarouselItem>
          <CarouselItem className="basis-1/3 lg:basis-1/5">
            <img className="h-8 sm:h-14 object-contain"src={Images.LEVIS} alt="LEVIS" />
          </CarouselItem>
          <CarouselItem className="basis-1/3 lg:basis-1/5">
            <img className="h-8 sm:h-14 object-contain" src={Images.HM} alt="HM" />
          </CarouselItem>
          <CarouselItem className="basis-1/3 lg:basis-1/5">
            <img className="h-8 sm:h-14 object-contain" src={Images.AMAZON} alt="AMAZON" />
          </CarouselItem>
          <CarouselItem className="basis-1/3 lg:basis-1/5">
            <img className="h-8 sm:h-14 object-contain"src={Images.OBEY} alt="OBEY" />
          </CarouselItem>
          <CarouselItem className="basis-1/3 lg:basis-1/5">
            <img className="h-8 sm:h-14 object-contain"src={Images.SHOPIFY} alt="SHOPIFY" />
          </CarouselItem>
          <CarouselItem className="basis-1/3 lg:basis-1/5">
            <img className="h-8 sm:h-14 object-contain"src={Images.LACOSTE} alt="LACOSTE" />
          </CarouselItem>
          <CarouselItem className="basis-1/3 lg:basis-1/5">
            <img className="h-8 sm:h-14 object-contain"src={Images.LEVIS} alt="LEVIS" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Companyimage;
