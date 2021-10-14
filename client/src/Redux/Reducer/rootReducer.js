import {combineReducers} from "redux";

import restaurant from "./restaurant/restaurant.reducer";
import image from "./Image/Image.reducer";
import reviews from "./Reviews/reviews.reducer";
import user from "./User/user.reducer";
import food from "./Food/food.reducer";
import cart from "./Cart/Cart.reducer";
import order from "./Order/order.reducer";


const rootReducer = combineReducers
({ restaurant , image , reviews , user , food, cart, order});
export default rootReducer;












