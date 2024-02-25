import React from "react";
import { NavLink } from "react-router-dom";
/*import saw from "../assets/saw2.png";
import avatar from "../assets/avatar.png";
import menu from "../assets/menu.png";*/
const MainNavigation = () => {
  return (
    <nav className="bg-black py-1">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-2">
        <div className="flex items-center">
          <NavLink to="/" className="text-white font-semibold text-lg">
            <img
              src={saw}
              className="w-20  border-lime-800 mr-4 cursor-pointer"
              alt="fűrész"
              title="soproni és márk fűrész logó"
            />
          </NavLink>

          <NavLink to="/" className="text-white font-semibold text-lg">
            SOPRONI ÉS MÁRK
          </NavLink>
          <div className="m-4 ">
            <div className="text-red-600 hidden  lg:block">lg</div>
            <div className="text-red-600 hidden md:block lg:hidden">md</div>
            <div className="text-red-600 sm:block md:hidden lg:hidden">sm</div>
          </div>
        </div>
        <div className="hidden  md:flex items-center border-0 w-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-red-600" : "text-white"
              }  mr-4  hover:text-red-600`
            }
          >
            {" "}
            Főoldal
          </NavLink>
          <NavLink
            to="/galery"
            className={({ isActive }) =>
              `${
                isActive ? "text-red-600" : "text-white"
              }  mr-4  hover:text-red-600`
            }
          >
            {" "}
            Galéria
          </NavLink>

          <button className="hidden lg:block px-5 py-2 bg-red-600 text-white uppercase font-bold rounded-full">
            időpontfoglalás
          </button>
        </div>
        <div className="hidden  md:flex border-0 w-auto">
          <img
            src={avatar}
            alt="Bejelentkezés ikon avatar"
            title="Bejelentkezés ikon avatar"
            className="w-8 filter invert mr-4 cursor-pointer"
          />
        </div>
        <div className="md:hidden">
          <img
            src={menu}
            alt="avatar"
            title="Bejelentkezés ikon"
            className="w-8 filter invert mr-4 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
