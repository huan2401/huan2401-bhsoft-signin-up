import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "https://3zgug3s5bg.execute-api.eu-west-1.amazonaws.com/dev",
  headers: {
    "content-type": "application/json",
    Authorization: `Token ${localStorage.getItem("token")}`,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
