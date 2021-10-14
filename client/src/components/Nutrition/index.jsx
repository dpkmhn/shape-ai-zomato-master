import React from "react";

// components
import NutritionHeroCarousal from "./NutritionHeroCarousal";
import NutritionCarousal from "./NutritionCarousal";
import NutritionCard from "./NutritionCard";

const Nutrition = () => {
    return (
        <div>
            <NutritionHeroCarousal/>
            <div className="my-6">
            <NutritionCarousal/>
        </div>
        <div className="flex justify-between flex-wrap">
            <NutritionCard 
            bg="red" 
            image="https://dote.zmtcdn.com/prod/data/admin_assets/images/b13/2c4893758c4c6393e3e2b40da026eb13_1614756464.png?output-format=webp"
           />
           <NutritionCard 
            bg="red" 
            image="https://dote.zmtcdn.com/prod/data/admin_assets/images/b13/2c4893758c4c6393e3e2b40da026eb13_1614756464.png?output-format=webp"
           />
           <NutritionCard 
            bg="red" 
            image="https://dote.zmtcdn.com/prod/data/admin_assets/images/b13/2c4893758c4c6393e3e2b40da026eb13_1614756464.png?output-format=webp"
           />
           <NutritionCard 
            bg="red" 
            image="https://dote.zmtcdn.com/prod/data/admin_assets/images/b13/2c4893758c4c6393e3e2b40da026eb13_1614756464.png?output-format=webp"
           />
           <NutritionCard 
            bg="red" 
            image="https://dote.zmtcdn.com/prod/data/admin_assets/images/b13/2c4893758c4c6393e3e2b40da026eb13_1614756464.png?output-format=webp"
           />
           <NutritionCard 
            bg="red" 
            image="https://dote.zmtcdn.com/prod/data/admin_assets/images/b13/2c4893758c4c6393e3e2b40da026eb13_1614756464.png?output-format=webp"
           />



        </div>
        </div>
    )
}

export default Nutrition;
