import React from "react";
import "./home.scss";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../../actions/user";

const Home: React.FC = () => {
  const [activeId, setActiveId] = React.useState(0);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  let category: string[] = ["Global Feed"];

  if (localStorage.getItem("token")) {
    category.push("Your feed");
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
      </div>
    </div>
  );
};
export default Home;
