import React from "react";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../actions/user";
import { loadArticle } from "../../actions/articles";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Home: React.FC = () => {
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

  // localStorage.setItem("activeId", "0");
  const [activeId, setActiveId] = React.useState(0);
  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(loadArticle());
    }
  }, [location.pathname]);
  let articles = useSelector((state: any) => state.articles);
  let category: string[] = ["Global Feed"];

  if (localStorage.getItem("token")) {
    category.push("Your feed");
  } else {
    articles = [];
  }

  const handleActive = (index: number) => {
    setActiveId(index);
  };

  return (
    <div className="home">
      <div className="home-banner">
        <h1>conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
      <div className="home-container">
        <div className="category">
          {category.map((item: string, index: number) => {
            return (
              <p
                className={
                  activeId === index ? "category-item active" : "category-item"
                }
                key={index}
                onClick={() => handleActive(index)}
              >
                {item}
              </p>
            );
          })}
        </div>
        <div className="articles">
          <ul className="articles-list">
            {activeId === 0 &&
              (articles ? (
                articles.map((item: any, index: number) => {
                  return (
                    <li key={index} className="articles-list__item">
                      <Link to={`article/` + convertUrl(item.title)}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })
              ) : (
                <li>Loading...</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Home;
