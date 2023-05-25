import Layout from "../pages/Components/Layout";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Ssg = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fatchdata = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(data);
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fatchdata();
  }, []);
  return (
    <>
      <Layout title={"Static Side Rendering"}>
        <h1>Static Side Generation</h1>
        <ul>
          {loading
            ? null
            : users?.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      </Layout>
    </>
  );
};
export default Ssg;
