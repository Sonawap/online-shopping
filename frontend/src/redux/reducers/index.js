import { combineReducers } from "redux";

import Product from "./Product";

const reducers = combineReducers({
  product: Product,
});

export default reducers;
