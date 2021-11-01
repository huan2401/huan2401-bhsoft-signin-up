import React from "react";
import { useHistory } from "react-router";
import { logout, updateProfile } from "../../actions/user";
import { useDispatch } from "react-redux";
import "./setting.scss";

const Setting: React.FC = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [picture, setPicture] = React.useState("");
  const [name, setName] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handlePicture = (e: any) => {
    setPicture(e.target.value);
  };

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handleBio = (e: any) => {
    setBio(e.target.value);
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleUpdateProfile = () => {
    dispatch(updateProfile(picture, name, bio, email, password));
  };

  const handleLogout = () => {
    dispatch(logout());
    history.push("/signin");
    localStorage.removeItem("token");
    localStorage.setItem("activeId", "1");
  };

  return (
    <div className="setting">
      <h1>Your Setting</h1>
      <div className="form-group">
        <input
          type="text"
          name="profile-img"
          placeholder="URL of profile picture"
          onChange={handlePicture}
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleName}
        />
        <textarea
          name="bio"
          placeholder="Short bio about you"
          onChange={handleBio}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePassword}
        />
        <div className="button">
          <button onClick={handleLogout}>Or click here to logout</button>
          <button onClick={handleUpdateProfile}>Update Setting</button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
