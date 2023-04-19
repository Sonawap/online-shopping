import fetch from "axiosConfig/FetchInterceptor";

const PaymentRequest = {};
const payment = 'payment';

PaymentRequest.makeAPayment = (data) => {
  return fetch({
    url: payment,
    method: "post",
    data: data,
  });
};

export default PaymentRequest;
