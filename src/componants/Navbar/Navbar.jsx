import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { IconButton } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const handleLogout = () => {
    logout()
      .then(async (res) => {
        await axios(`${import.meta.env.VITE_API_URL}/logout`, {
          withCredentials: true,
        });
        Swal.fire({
          title: "Success",
          text: "Logout successfully!",
          icon: "success",
        });
      })
      .catch((err) => console.log(err));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/assignments">Assignments</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/create-assignment">Create Assignment</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/my-pending-assignments">Pending Assignment</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white dark:bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="text-xl">
            <Logo />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <IconButton aria-label="" onClick={handleThemeToggle}>
            {darkMode ? (
              <LightModeOutlinedIcon className="dark:text-white" />
            ) : (
              <DarkModeOutlinedIcon className="dark:text-white" />
            )}
          </IconButton>
          {user && (
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className="m-1">
                <div
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user.displayName}
                  data-tooltip-place="right"
                  className=" h-[48px] w-[48px] rounded-full bg-transparent cursor-pointer overflow-hidden"
                >
                  <img
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://static.thenounproject.com/png/363639-200.png"
                    }
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-30 border border-gray-300 menu shadow-2xl bg-white  dark:bg-base-100 rounded-box w-36 -left-16"
              >
                <li className="border-b border-gray-400">
                  <Link
                    className="dark:text-white"
                    to="/my-submited-assignments"
                  >
                    Submited Assignments
                  </Link>
                </li>
                <li>
                  <a onClick={handleLogout} className="dark:text-white">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}

          {!user && (
            <Link to="/login" className="btn">
              Login/Signup
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
