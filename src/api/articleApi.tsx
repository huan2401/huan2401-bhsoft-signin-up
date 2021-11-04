import axiosClient from "./axiosClient";

const articleApi = {
  createArticle: (params: any) => {
    const url = "/articles";
    return axiosClient.post(url, params);
  },
  getArticles: () => {
    const url = "/articles?limit=10&offset=0";
    return axiosClient.get(url);
  },
  deleteArticle: (params: any) => {
    const url = `/articles/${params}`;
    return axiosClient.delete(url);
  },
};

export default articleApi;
