export function ArticleReducer(state: Array<any> = [], action: any) {
  switch (action.type) {
    case "FETCH_ARTICLE":
      return [...action.payload];
    default:
      return state;
  }
}
