import { ADD_ITEM, REMOVE_ITEM } from "redux/constants/Cart";

export const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    payload,
  };
};

export const removeItem = (payload) => {
  return {
    type: REMOVE_ITEM,
    payload,
  };
};
