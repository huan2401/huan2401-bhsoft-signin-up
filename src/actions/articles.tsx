import articleApi from "../api/articleApi";

export const createArticle =
  (body: string, description: string, tagList: string[], title: string) =>
  async (dispatch: any) => {
    try {
      const raw = JSON.stringify({
        article: {
          body: body,
          description: description,
          tagList: tagList,
          title: title,
        },
      });
      const response: any = await articleApi.createArticle(raw);
    } catch (error) {
      console.log(error);
    }
  };

export const loadArticle = () => async (dispatch: any) => {
  try {
    const response: any = await articleApi.getArticles();
    dispatch(fetchArticle(response.articles));
  } catch (error) {
    console.log(error);
  }
};

export const deleteArticle = (slug: string) => async (dispatch: any) => {
  try {
    const response: any = await articleApi.deleteArticle(slug);
  } catch (error) {
    console.log(error);
  }
};

const fetchArticle = (articles: any) => ({
  type: "FETCH_ARTICLE",
  payload: articles,
});
