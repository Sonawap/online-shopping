import { SAVE_PRODUCTS, SAVE_PRODUCT } from "store/contants/Product";

export const setProducts = (payload) => {
  return {
    type: SAVE_PRODUCTS,
    payload,
  };
};

export const setCurrentProduct = (payload) => {
  return {
    type: SAVE_PRODUCT,
    payload,
  };
};
