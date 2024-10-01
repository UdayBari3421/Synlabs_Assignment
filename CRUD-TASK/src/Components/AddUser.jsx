import React from "react";
import Button from "./Button";

const AddUser = ({ length, onUserAdd }) => {
  const handleOnAdd = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newUser = {
      id: formData.get("id"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };

    onUserAdd(newUser);

    e.target.reset();
  };

  return (
    <form onSubmit={handleOnAdd} className=" flex gap-2 text-black">
      <input type="hidden" placeholder="id" name="id" value={length + 1} />
      <input required className="rounded-md p-2 outline-none" name="name" type="text" placeholder="Name" />
      <input required className="rounded-md p-2 outline-none" name="email" type="email" placeholder="Email" />
      <input required className="rounded-md p-2 outline-none" name="phone" type="tel" placeholder="Phone" />
      <Button type="submit" bgColor="bg-blue-700 text-white" text="Add User" />
    </form>
  );
};

export default AddUser;
