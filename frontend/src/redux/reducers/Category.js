import { SAVE_CATEGORIES, SAVE_CATEGORY } from "redux/constants/Category";

const initState = {
  categories: [],
  currentCategory: null,
};

const Category = (state = initState, action) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case SAVE_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };

    default:
      return state;
  }
};

export default Category;
