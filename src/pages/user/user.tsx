import React from "react";
import "./user.scss";
import { useSelector } from "react-redux";

const User: React.FC = () => {
  const profile = useSelector((state: any) => state.user);
  return (
    <>
      <h1>{profile.username}</h1>
    </>
  );
};

export default User;
