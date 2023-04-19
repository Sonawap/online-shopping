import fetch from "axiosConfig/FetchInterceptor";

const ProductRequest = {};
const product = 'products';

ProductRequest.addAProduct = (data) => {
  return fetch({
    url: product,
    method: "post",
    data: data,
  });
};

ProductRequest.getAllProducts = (params) => {
  return fetch({
    url: product,
    method: "get",
    params: params
  });
};

ProductRequest.getAProduct = (id) => {
  return fetch({
    url: `${product}/${id}`,
    method: "get"
  });
};

ProductRequest.updateAProduct = (params) => {
  return fetch({
    url: product,
    method: "put",
    params: params
  });
};

ProductRequest.deleteAProduct = (params) => {
  return fetch({
    url: product,
    method: "delete",
    params: params
  });
};

export default ProductRequest;
