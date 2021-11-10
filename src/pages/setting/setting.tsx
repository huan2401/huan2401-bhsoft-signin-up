import React from "react";
import { useHistory } from "react-router";
import { getUserProfile, updateProfile } from "../../actions/user";
import { useSelector, useDispatch } from "react-redux";
import "./setting.scss";

const Setting: React.FC = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  const profile = useSelector((state: any) => state.user.profile);

  const [picture, setPicture] = React.useState("");
  const [name, setName] = React.useState(profile ? profile.username : "");
  const [bio, setBio] = React.useState(profile ? profile.bio : "");
  const [email, setEmail] = React.useState(profile ? profile.email : "");
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
    if (name === "" || email === "") {
      setName(profile.username);
      setEmail(profile.email);
    }
    dispatch(updateProfile(picture, name, bio, email, password));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/signin");
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
          value={
            profile
              ? name
                ? name
                : profile.username + name.replace(profile.username, "")
              : ""
          }
        />
        <textarea
          name="bio"
          placeholder="Short bio about you"
          onChange={handleBio}
          value={
            profile
              ? bio
                ? bio
                : profile.bio + bio.replace(profile.bio, "")
              : ""
          }
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleEmail}
          value={
            profile
              ? email
                ? email
                : profile.email + email.replace(profile.email, "")
              : ""
          }
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
