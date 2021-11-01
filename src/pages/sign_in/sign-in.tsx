import React from "react";
import "./sign-in.scss";
import { Link } from "react-router-dom";
import { loadProfile } from "../../actions/user";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

const SignIn: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const login = useSelector((state: any) => state.user);

  const history = useHistory();
  if (login.login) {
    history.push("/");
    localStorage.setItem("activeId", "0");
  }
  const dispatch = useDispatch();

  const handleUsername = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    dispatch(loadProfile(email, password));
  };

  return (
    <div className="register">
      <div className="title">
        <h1>Sign In</h1>
        <Link to="/signup">Need an account ?</Link>
      </div>
      <div className="form-group">
        <input type="text" onChange={handleUsername} placeholder="Email" />
        <input
          type="password"
          onChange={handlePassword}
          placeholder="Password"
        />
        <button onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
};
export default SignIn;
