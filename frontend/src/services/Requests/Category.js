import fetch from "auth/FetchInterceptor";

const CategoryRequest = {};
const category = 'categories';

CategoryRequest.addAProduct = (data) => {
  return fetch({
    url: category,
    method: "post",
    data: data,
  });
};

CategoryRequest.getAllProducts = (params) => {
  return fetch({
    url: category,
    method: "get",
    params: params
  });
};

CategoryRequest.getAProduct = (params) => {
  return fetch({
    url: category,
    method: "get",
    params: params
  });
};

CategoryRequest.updateAProduct = (params) => {
  return fetch({
    url: category,
    method: "put",
    params: params
  });
};

CategoryRequest.deleteAProduct = (params) => {
  return fetch({
    url: category,
    method: "delete",
    params: params
  });
};

export default CategoryRequest;
