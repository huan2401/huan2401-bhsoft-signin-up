import React from "react";
import "./articleDetail.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../actions/user";
import { deleteArticle, loadArticle } from "../../actions/articles";
import { useHistory } from "react-router";

import { useParams } from "react-router";

const ArticleDetail: React.FC = () => {
  const convertUrl = (str: any) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
  };

  localStorage.setItem("activeId", "-1");
  const dispatch = useDispatch();
  const param: any = useParams();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(loadArticle());
    dispatch(getUserProfile());
  }, []);
  const articles = useSelector((state: any) => state.articles);
  const user = useSelector((state: any) => state.user.profile);
  const articleDetail = articles.filter(
    (article: any) => convertUrl(article.title) === param.slug
  )[0];

  const handleDelete = () => {
    dispatch(deleteArticle(articleDetail.slug));
    history.push("/");
  };

  return (
    <div className="article">
      <div className="article-title">
        <h1>{articleDetail ? articleDetail.title : "Loading..."}</h1>
        <div className="user">
          <p>{user ? user.username : ""}</p>
          <button onClick={handleDelete}>delete article</button>
        </div>
      </div>
      <div className="article-content">
        <p className="description">
          {articleDetail ? articleDetail.description : "Loading..."}
        </p>
      </div>
    </div>
  );
};

export default ArticleDetail;
