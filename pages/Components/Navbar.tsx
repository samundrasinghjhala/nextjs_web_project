// components/Navbar.tsx
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
type Props = {
  /**
   * Allows the parent component to modify the state when the
   * menu button is clicked.
   */
  onMenuButtonClick(): void;
};
const Navbar = (props: Props) => {
  return (
    <nav
      className={classNames({
        "bg-white text-zinc-500 shadow-md": true, // colors
        "flex items-center": true, // layout
        "w-screen md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0 ": true, //positioning & styling
      })}
    >
      <div className="flex w-full items-end font-bold text-lg ">Admin Panel</div>

      <div>
        <a
          href="/Components/SignUp/SignUp#"
          className="px-6 py-4 text-xs font-bold  text-white uppercase bg-blue-400  hover:bg-orange-500 p-3  rounded-full tracking-wide shadow-lg cursor-pointer transition ease-in duration-400"
        >
          Register
        </a>
      </div>
      <div className="flex-grow"></div>
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
  );
};
export default Navbar;
