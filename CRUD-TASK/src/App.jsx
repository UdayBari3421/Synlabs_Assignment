import axios from "axios";
import React, { useEffect, useState } from "react";
import UserList from "./Components/UserList";
import { useLocation } from "react-router-dom";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const state = location?.state;

  const fetchUserData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");

      delete state?.formData?.id;

      const updateData = state?.formData ? [...response.data, state.formData] : response.data;

      setUserData(updateData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (state?.formData) {
      setUserData((prev) => {
        return prev.filter((user) => user.id !== state.formData.id);
      });
    }
  }, [state?.formData]);

  return <UserList loading={loading} userData={userData} setUserData={setUserData} />;
};

export default App;
