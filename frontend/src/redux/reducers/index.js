import { combineReducers } from "redux";

import Product from "./Product";
import Category from "./Category";

const reducers = combineReducers({
  product: Product,
  category: Category
});

export default reducers;
