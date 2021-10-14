import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const PictureCarousalCard = () => {
    return (
        <>
        <div className="w-full h-64 relative px-4 overflow-hidden ">
           <div className="w-full h-full relative">
           <img 
           src="https://b.zmtcdn.com/data/pictures/1/19468701/3fdc10237d2fb9e7a910eaad5cfb0872_o2_featured_v2.jpg?output-format=webp"
           alt="food"
           className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
           /> 
           <div
            className="absolute w-full h-full inset-0 rounded-lg "
          style={{
              background:     
              "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
              
               }}
                /> 
                </div>
                <div  className="absolute w-full left-8 bottom-2 text-white ">
               <h4 className="z-10">Sunday Brunchies</h4>
                <h6 className="z-10 flex items-center">
                    8 Places <IoMdArrowDropright/>
                </h6>
           </div>
        </div>

        </>
    );
};

export default PictureCarousalCard;


