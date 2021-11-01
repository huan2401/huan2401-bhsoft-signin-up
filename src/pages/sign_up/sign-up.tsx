import React from "react";
import "./sign-up.scss";
import { Link } from "react-router-dom";
import { register } from "../../actions/user";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

const SignUp: React.FC = () => {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const login = useSelector((state: any) => state.user);

  if (login.login) {
    history.push("/");
  }

  const handleUsername = (e: any) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleRegister = () => {
    dispatch(register(username, email, password));
  };

  return (
    <div className="register">
      <div className="title">
        <h1>Sign Up</h1>
        <Link to="/signin">Have an account ?</Link>
      </div>
      <div className="form-group">
        <input type="text" onChange={handleUsername} placeholder="Username" />
        <input
          type="password"
          onChange={handlePassword}
          placeholder="Password"
        />
        <input
          type="text"
          name="email"
          onChange={handleEmail}
          placeholder="Email"
        />
        <button onClick={handleRegister}>Sign Up</button>
      </div>
    </div>
  );
};
export default SignUp;
