import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import AddUser from "./AddUser";
import axios from "axios";
import { nanoid } from "nanoid";

let keyid = nanoid();

const UserList = ({ loading, userData, setUserData }) => {
  const navigate = useNavigate();

  const viewClickHandle = (user) => {
    navigate(`/${user.id}/details`, { state: { user } });
  };

  const editClickHandle = (user) => {
    navigate(`/${user.id}/edit`, { state: { user } });
  };

  const deleteClickHandle = (user) => {
    setUserData(userData.filter((u) => u.id !== user.id));
  };

  const onUserAdd = async (newUser) => {
    const { id, name, email, phone } = newUser;

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        Headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          id,
          name,
          email,
          phone,
        }),
      })
      .then((response) => {
        if (response.status !== 201) {
          console.error("Error in creating user");
          return;
        } else {
          return response;
        }
      })
      .then((data) => {
        setUserData([...userData, newUser]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex w-full h-fit items-center justify-center p-12">
      {loading ? (
        <div className="flex gap-3">
          <span className="animate-spin p-3 border-blue-500 border-b-4 rounded-full"></span>
          <p className="text-2xl font-semibold">Loading...</p>
        </div>
      ) : (
        <div className="flex justify-center gap-3 flex-col">
          <AddUser length={userData.length} onUserAdd={onUserAdd} />
          <table className="table border-collapse border-2 w-full border-slate-300">
            <thead>
              <tr className="bg-purple-400">
                <th className="border-2 p-3 border-slate-300">Name</th>
                <th className="border-2 p-3 border-slate-300">Email</th>
                <th className="border-2 p-3 border-slate-300">Phone</th>
                <th className="border-2 p-3 border-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => {
                return (
                  <tr key={user.id + keyid}>
                    <td className="p-2 border-2 border-slate-300">{user.name}</td>
                    <td className="p-2 border-2 border-slate-300">{user.email}</td>
                    <td className="p-2 border-2 border-slate-300">{user.phone}</td>
                    <td className="p-2 border-2 border-slate-300 ">
                      <span className="w-full flex gap-2 items-center">
                        <Button bgColor="bg-green-500" text="View" onClickAction={() => viewClickHandle(user)} />
                        <Button bgColor="bg-blue-500" text="Edit" onClickAction={() => editClickHandle(user)} />
                        <Button bgColor="bg-red-500" text="Delete" onClickAction={() => deleteClickHandle(user)} />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserList;
