import { SAVE_CATEGORIES, SAVE_CATEGORY } from "redux/constants/Category";

export const setCategories = (payload) => {
  return {
    type: SAVE_CATEGORIES,
    payload,
  };
};

export const setCurrentCategory = (payload) => {
  return {
    type: SAVE_CATEGORY,
    payload,
  };
};
