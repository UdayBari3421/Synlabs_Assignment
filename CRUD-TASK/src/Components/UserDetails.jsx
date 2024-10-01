import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

const UserDetails = () => {
  const location = useLocation();
  const userData = location.state;

  const navigate = useNavigate();

  console.log(userData);
  return (
    <div className="w-full h-screen flex justify-center gap-3 items-center flex-col text-2xl">
      <h1 className="text-4xl font-bold">User Details</h1>
      <p>Email: {userData.user.email}</p>
      <p>Name: {userData.user.name}</p>
      <p>Phone: {userData.user.phone}</p>
      <span>
        <Button
          bgColor="bg-gray-500 border-2 border-blue-500"
          onClickAction={() => {
            navigate(-1);
          }}
          text="Back"
        />
      </span>
    </div>
  );
};

export default UserDetails;
