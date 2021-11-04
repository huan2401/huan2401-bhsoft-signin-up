import React from "react";
import "./user.scss";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../../actions/user";

const User: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  const profile = useSelector((state: any) => state.user.profile);
  return (
    <div className="user-page">
      <h1>{profile ? profile.username : "Loading..."}</h1>
    </div>
  );
};

export default User;
