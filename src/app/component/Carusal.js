'use client'
import { Carousel } from "@material-tailwind/react";
export function CarouselDefault() {
    const images=[
        {
          item:"./Banner/4.jpg",
        },
        {
          item:"./Banner/2.jpg",
        },
        {
          item:"./Banner/3.jpg",
        },
        {
          item:"./Banner/1.jpg",
        },
        {
          item:"./Banner/6.jpg",
        },
      ]
  return (
    <Carousel autoplay={true} autoplayDelay={5000} transition={{ duration: 2 }} loop={true} className="">
        
      {
        images.map((items,index)=>{
            return(
                <div key={index} className="h-full w-full  ">
           <img src={items.item} alt='img' className="h-full w-full object-fill"/>
           </div>
            )
        })
      }
    </Carousel>
  );
}