import React ,{useState , useEffect} from "react";
import { Link , useParams } from "react-router-dom";
import {IoMdArrowDropright} from "react-icons/io";
import Slider from "react-slick";
import { useSelector ,useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// components
import MenuCollection from "../../components/restaurant/MenuCollection";
import MenuSimilarRestaurantcard from "../../components/restaurant/MenuSimilarRestaurantcard";
import { NextArrow,PrevArrow } from "../../components/CarousalArrow";
import ReviewCard from "../../components/restaurant/Reviews/reviewCard";
import Mapview from "../../components/restaurant/Mapview";

import {getImage} from "../../Redux/Reducer/Image/Image.action";
import { getReviews } from "../../Redux/Reducer/Reviews/reviews.action";

const Overview = () => {
    const [menuImage, setMenuImages] = useState({ images: [] });
    const [Reviews, setReviewss] = useState([]);
  
    const {id} = useParams();
    const settings = {
      arrows :true,
      infinite:true,
      speed:500,  
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow/>,
      prevArrow:<PrevArrow/>,
    
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
      ],
    };
  
      const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
      );
      const dispatch = useDispatch();

      useEffect(() => {
        if (reduxState) {
          dispatch(getImage(reduxState?.menuImage)).then((data) => {
            const images = [];
            data.payload.image?.images.map(({ location }) =>
             images.push(location));
            setMenuImages(images);
          });
          dispatch(getReviews(reduxState?._id)).then((data) =>
            setReviewss(data.payload.reviews)
          );
        }
      }, [reduxState]);
    


     const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      const getLatLong = (mapAddress) => {
        return mapAddress?.split(",").map((item) => parseFloat(item));
      };
    
    return (
        
        <>
         <div className="flex flex-col md:flex-row relative">
             <div className="w-full  md:w-8/12">
                 <h2 className="font-semibold text-lg md:text-xl my-4">
                     About this place
                     </h2>
                 <div className="flex justify-between items-center">
                     <h4 className="text-lg font-medium">Menu</h4>
                     <Link to ={`/restaurant/${id}/menu`}>
                     <span className="flex items-center gap-1 text-zomato-400">
                         See all menu <IoMdArrowDropright/>
                         </span>
                     </Link>
                      </div>
                     <div className="flex flex-wrap gap-3 my-4">
                     <MenuCollection
                      menuTitle="Menu"
                       pages="3" 
                     image={menuImage}
                     
                     />
                 </div>
                 <h4 className="text-lg font-medium my-4">Cuisines</h4>
                 <div classNam="flex flex-wrap gap-2">
                 {reduxState?.cuisine.map((data) =>(
                 <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                        {data}
                         </span>) )}
                 </div>
               <div className="my-4">
               <h4 className="text-lg font-medium ">Average Cost</h4>
               <h6>₹{reduxState?.averageCost} for one order (approx.) </h6>
               <small className="text-gray-500">
                   Exclusive of applicable taxes and charges, if any
               </small>
              
               </div>
               <div className="my-4">
               <h4 className="text-lg font-medium ">Similar Restaurants</h4>
              <div> 
          <Slider {...settings}>
          <MenuSimilarRestaurantcard
            image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg"
           title="Chung Wah"
           />
            <MenuSimilarRestaurantcard
            image="data:image/jpeg;base64,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"
           title="Momos"
           />
            <MenuSimilarRestaurantcard
            image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg"
           title="Chung Wah"
           />
            <MenuSimilarRestaurantcard
            image="data:image/jpeg;base64,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"
           title="Momos"
           /> 
          </Slider>
          </div>
           <h4 className="text-lg font-medium">
               Rate your delivery experience
               </h4>
               <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                   activeColor="#ffd700"
                />
                 {Reviews.map((reviewData) => (
              <ReviewCard {...reviewData} />
            ))}

               </div>
               <div className="my-4  w-full  md:hidden flex flex-col gap-4">
               <Mapview 
               title={reduxState?.name} 
           phno={`+91${reduxState?.contactNumber}`}
           mapLocation={getLatLong(reduxState?.mapLocation)}
           address={reduxState?.address}/> 
               </div>
               <div className="my-4 flex flex-col gap-4">
                   {/* <ReviewCard/>
                   <ReviewCard/>
                   <ReviewCard/> */}
               </div>
             </div>
             <aside 
             style={{height:"fit-content"}} 
             className="hidden  md:flex md:w-4/12 sticky rounded-xl top-2 bg-white  
             p-3 shadow-md flex flex-col gap-4"
             >
                 <Mapview title={reduxState?.name} 
           phno={`+91${reduxState?.contactNumber}`}
           mapLocation={getLatLong(reduxState?.mapLocation)}
           address={reduxState?.address}/>

</aside>
</div>   
        </>
    )
}

export default Overview;
