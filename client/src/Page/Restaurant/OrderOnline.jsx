import React ,{useState , useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from "../../components/restaurant/Order-Online/FloatMenuBtn";
import MenuListContainer from "../../components/restaurant/Order-Online/MenuListContainer";
import FoodList from "../../components/restaurant/Order-Online/FoodList";

// redux actions
import { getFoodList } from "../../Redux/Reducer/Food/food.action";
import { addCart } from "../../Redux/Reducer/Cart/Cart.action";

const OrderOnline = () => {
    const [menu, setMenu] = useState([]);
    const [selected, setSelected ] = useState("")

    const onClickHandler = (e) => {
      if (e.target.id){
          setSelected(e.target.id);
      }
        return;
  };

  const dispatch = useDispatch();
    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
      );
      console.log({reduxState});

      useEffect(() => {
        reduxState &&
          dispatch(getFoodList(reduxState.menu)).then((data) =>
          setMenu(data.payload.menus.menus)
          );
      }, [reduxState]);
      
    
    return (
        <>
          <div className="w-full h-screen flex">
              <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen md:block w-1/4">
             {
               menu.map((item)=>(
                 <MenuListContainer 
                 {...item}
                  key={item. _id} 
                 onClickHandler={onClickHandler} 
                 selected={selected}
                   /> 
               ))
             }
              </aside>

              <div className="w-full px-3 md:w-3/4">
                  <div className="pl-3 mb-4 ">
                  <h2 className="text-xl font-semibold"> Order Online</h2>
                  <h4 className="flex items-center gap-2 font-light text-gray-500">
                   <AiOutlineCompass/> Live Track Your Order | <BiTimeFive/>45 min
                  </h4>
                  </div>
                  <section className="flex  h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
                  { menu.map( (item) => (
           <FoodList key= {item._id} {...item} />
                  ))}
                
                  </section>
              </div>
          </div>
              <FloatMenuBtn/>              
        </>
    )
}


export default OrderOnline;


// https://b.zmtcdn.com/data/dish_photos/ee7/1c361f758cb11a23b573f59c99e91ee7.jpg?fit=around|130:130",