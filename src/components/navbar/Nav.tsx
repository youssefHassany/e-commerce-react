import Link from "next/link";
import React from "react";
import SearchBox from "../search/SearchBox";
import Cart from "../cart/Cart";
import CategoryDropDown from "../category dropdown/CategoryDropDown";

const Nav = () => {
  return (
    <nav className="fixed top-0 w-screen p-4 px-6 bg-zinc-900 bg-opacity-90 shadow flex justify-between items-center text-secondary">
      <Link href="/" className="text-xl font-bold">
        Store
      </Link>
      <div className="flex items-center gap-5">
        <CategoryDropDown />
        <SearchBox />
        <Cart />
      </div>
    </nav>
  );
};

export default Nav;
