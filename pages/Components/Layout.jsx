import Head from "next/head";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import React from "react";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
