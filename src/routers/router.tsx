import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Article from "../pages/article/article";
import Home from "../pages/home/home";
import Setting from "../pages/setting/setting";
import SignIn from "../pages/sign_in/sign-in";
import SignUp from "../pages/sign_up/sign-up";
import User from "../pages/user/user";

const RouterPage: React.FC = () => {
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
    </Switch>
  );
};

export default RouterPage;
