import axiosClient from "./axiosClient";

const userApi = {
  getUserProfile: () => {
    const url = "/user";
    return axiosClient.get(url);
  },
  login: (params: any) => {
    const url = "/users/login";
    return axiosClient.post(url, params);
  },
  register: (params: any) => {
    const url = "/users";
    return axiosClient.post(url, params);
  },
  updateProfile: (params: any) => {
    const url = "/user";
    return axiosClient.put(url, params);
  },
  createArticle: (params: any) => {
    const url = "/articles";
    return axiosClient.post(url, params);
  },
  getArticles: () => {
    const url = "/articles?limit=10&offset=0";
    return axiosClient.get(url);
  },
};

export default userApi;
