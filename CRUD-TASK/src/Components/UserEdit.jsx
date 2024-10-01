import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

const UserEdit = () => {
  const location = useLocation();
  const userData = location.state;

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: userData.user.id,
    email: userData.user.email,
    name: userData.user.name,
    phone: userData.user.phone,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/`, {
      state: {
        formData,
        userData,
      },
    });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <form onSubmit={handleSubmit} className="text-black flex gap-3 flex-col w-4/12">
        <h1 className="text-white text-center text-3xl">User Details</h1>
        <input
          placeholder="id"
          className="p-2 outline-none rounded-lg"
          type="hidden"
          onChange={() => {
            setFormData({ ...formData, id: userData.length + 1 });
          }}
          value={formData.id}
        />
        <input
          placeholder="Email"
          className="p-2 outline-none rounded-lg"
          type="email"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          value={formData.email}
        />
        <input
          placeholder="Name"
          className="p-2 outline-none rounded-lg"
          type="text"
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          value={formData.name}
        />
        <input
          placeholder="Phone"
          className="p-2 outline-none rounded-lg"
          type="tel"
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
          value={formData.phone}
        />
        <Button bgColor="bg-green-400 rounded-xl" text="Update" />
      </form>
    </div>
  );
};

export default UserEdit;
