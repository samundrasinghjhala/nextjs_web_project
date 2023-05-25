import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className=" bg-slate-200 flex justify-end p-1 space-x-5">
        <Link href={"https://www.facebook.com/"}>
          <BsFacebook />
        </Link>

        <Link href={"https://www.instagram.com/"}>
          <BsInstagram />
        </Link>
        <Link href={"https://www.google.com/gmail/about/"}>
          <SiGmail />
        </Link>
        <Link href={"https://in.linkedin.com/"}>
          <BsLinkedin />
        </Link>
      </div>
    </>
  );
};

export default Header;
