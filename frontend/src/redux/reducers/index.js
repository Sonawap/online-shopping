import { combineReducers } from "redux";

import Product from "./Product";
import Category from "./Category";
import Cart from "./Cart";

const reducers = combineReducers({
  product: Product,
  category: Category,
  cart: Cart
});

export default reducers;
