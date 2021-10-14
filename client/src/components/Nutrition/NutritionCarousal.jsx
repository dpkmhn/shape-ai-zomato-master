import React from "react";
import Slider from "react-slick";
import NutritionCarousalCard from "./NutritionCarousalCard";
import { NextArrow,PrevArrow } from "../CarousalArrow";

const NutritionCarousal = () => {
    const categories =[
        { 
            image:
              "https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
            title: "Calcium Tablets",
          },
          {
            image:
              "https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp",
            title: "Antibiotics",
          },
          {
            image:
              "https://dote.zmtcdn.com/prod/data/admin_assets/images/89fdc1246c12461db02d853a513ab616_1628243591.png?output-format=webp",
            title: "Cpsules Cd",
          },
          {
            image:
              "https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp",
            title: "Vitamins",
          },
          {
            image:
              "https://dote.zmtcdn.com/prod/data/admin_assets/images/c021611d9bce8289f48f59303b2d0fc6_1628243496.png?output-format=webp",
            title: "Immunity",
          },
          {
            image:
              "https://dote.zmtcdn.com/prod/data/admin_assets/images/08f/1fa2739bd9b0bd00d8b163a41f3bc08f_1615971462.png?output-format=webp",
            title: "Beauty & skincare",
          },
          {
            image:
              "https://dote.zmtcdn.com/prod/data/admin_assets/images/d3e/3fbf4dfc777abaf924ac6fe7673c9d3e_1615971345.png?output-format=webp",
            title: "Immunity & Bones",
          },
     ];

     const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow : <NextArrow/>,
        prevArrow:<PrevArrow/>,
     };


    return (
        <>
         <div className=" lg:hidden flex gap-3 lg:gap-0  flex-wrap justify-between">
                     { categories.map((food)=> (
                        <NutritionCarousalCard{...food}/>
                      ))}
              </div>
              <div className="hidden lg:block">
                  <Slider{...settings}>
                  { categories.map((food)=> (
                        <NutritionCarousalCard{...food}/>
                      ))}
                  </Slider>
              </div>
            
        </>
    )
}

export default NutritionCarousal;

