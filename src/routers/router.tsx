import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Article from "../pages/article/article";
import ArticleDetail from "../pages/article/articleDetail";
import Home from "../pages/home/home";
import Setting from "../pages/setting/setting";
import SignIn from "../pages/sign_in/sign-in";
import SignUp from "../pages/sign_up/sign-up";
import User from "../pages/user/user";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../actions/user";

const RouterPage: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  React.useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  let username: string = "user";
  if (user.profile) {
    username = user.profile.username;
  }
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/newarticle">
        <Article />
      </Route>
      <Route path="/setting">
        <Setting />
      </Route>
      <Route path="/user">
        <User />
      </Route>
      <Route path={`/${username}`}>
        <User />
      </Route>
      <Route path="/article/:slug">
        <ArticleDetail />
      </Route>
    </Switch>
  );
};

export default RouterPage;
