import { SAVE_PRODUCTS, SAVE_PRODUCT } from "../constants/Product";

const initState = {
  products: [],
  currentProduct: null,
};

const Step = (state = initState, action) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SAVE_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload,
      };

    default:
      return state;
  }
};

export default Step;
