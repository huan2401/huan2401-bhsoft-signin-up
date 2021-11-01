import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./header.scss";

const Header: React.FC = () => {
  const [activeNav, setActiveNav] = React.useState(0);
  let nav = ["Home", "Sign In", "Sign Up"];
  const username = useSelector((state: any) => state.user);

  if (localStorage.getItem("token")) {
    nav = ["Home", "New Article", "Setting", `${username.username}`];
  }

  const location = useLocation();
  const path = location.pathname.replace("/", "");

  const handleActiveNav = (index: number) => {
    setActiveNav(index);
    localStorage.setItem("activeId", String(index));
  };

  return (
    <div className="header">
      <Link to="/" className="header-logo">
        conduit
      </Link>
      <nav>
        <ul className="nav-list">
          {nav.map((item: string, index: number) => {
            return (
              <li key={index} className="nav-list__item">
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : item.replace(/\s/g, "").toLowerCase() ===
                        `${username.username}`
                      ? "/user"
                      : item.replace(/\s/g, "").toLowerCase()
                  }
                  onClick={() => handleActiveNav(index)}
                  className={
                    Number(localStorage.getItem("activeId")) === index
                      ? "active"
                      : ""
                  }
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
