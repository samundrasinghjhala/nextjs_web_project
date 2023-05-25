import React from "react";
import Layout from "../pages/Components/Layout";
import axios from "axios";

const Ssr = ({ users }) => {
  return (
    <div>
      <Layout title={"Static Side Rendering"}>
        <h1 className="font-bold ">Server Side Rendering</h1>

        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </Layout>
    </div>
  );
};

export default Ssr;

export async function getStaticProps() {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return {
      props: {
        users: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
