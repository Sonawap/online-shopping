import fetch from "axiosConfig/FetchInterceptor";

const CategoryRequest = {};
const category = 'categories';

CategoryRequest.addACategory = (data) => {
  return fetch({
    url: category,
    method: "post",
    data: data,
  });
};

CategoryRequest.getAllCategories = (params) => {
  return fetch({
    url: category,
    method: "get",
    params: params
  });
};

CategoryRequest.getACategory = (id) => {
  return fetch({
    url: `${category}/${id}`,
    method: "get"  
  });
};

CategoryRequest.updateACategory = (params) => {
  return fetch({
    url: category,
    method: "put",
    params: params
  });
};

CategoryRequest.deleteACategory = (params) => {
  return fetch({
    url: category,
    method: "delete",
    params: params
  });
};

export default CategoryRequest;
