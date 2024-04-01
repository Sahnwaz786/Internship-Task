// Header.tsx
import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import PropTypes from "prop-types";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

// const drawerWidth = 240;

const navItems = ["Home", "About", "Contact"];

interface DrawerAppBarProps {
  window?: () => Window;
}

const DrawerAppBar: React.FC<DrawerAppBarProps> = ({window} ) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <div onClick={handleDrawerToggle} className="text-center  bg-gray-200">
      <hr className="my-2" />
      <ul>
        {navItems.map((item) => (
          <li key={item} className="py-2">
            <button className="text-blue-600 ">{item}</button>
          </li>
        ))}
      </ul>
    </div>
  );

   window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="flex ">
      <div className="flex flex-col w-full mt-16 ">
        <header
          className={`${
            theme === "light" ? "bg-white" : "bg-gray-800"
          } fixed top-0 z-10 w-full `}
        >
          <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-3 ">
            <div className="flex items-center justify-between h-16 ">
              <div className="flex gap-8">
                <button
                  className={`${
                    theme === "light" ? "text-gray-800" : "text-white"
                  } `}
                  aria-label="Open drawer"
                  onClick={handleDrawerToggle}
                >
                  <svg
                    className="h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
                {/* <img
                  src="https://th.bing.com/th/id/R.10d51f1719e0f0fc083f5c6b1d7d3e0d?rik=33muZP8BE03%2bfA&riu=http%3a%2f%2fclipart-library.com%2fnewimages%2fsoccer-ball-clip-art-4.png&ehk=e%2bYXlbz%2fhzwbuX%2bFJTrcj04lnLE9rEjFU6JwBxpfIuE%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                  className="w-8 h-8 rounded-full "
                /> */}
                <img
                  src="https://sixsports.in/wp-content/uploads/2022/02/sixsports.png"
                  className="w-18 h-10"
                  alt=""
                />
              </div>

              <nav className="hidden md:flex space-x-4 text-lg ">
                {navItems.map((item) => (
                  <button
                    key={item}
                    className={`${
                      theme === "light" ? "text-gray" : "text-white"
                    }  hover:text-gray-300 `}
                  >
                    {item}
                  </button>
                ))}
                <div
                  className={theme === "light" ? "text-black" : "text-white"}
                >
                  <button className="" onClick={toggleTheme}>
                    {theme === "light" ? (
                      <FiSun className="" size={30} />
                    ) : "dark" ? (
                      <BsFillCloudSunFill size={30} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* <div className="py-6">Your main content goes here</div> */}
          </div>
        </main>
      </div>
      <nav className="md:hidden">
        {/* Mobile Drawer */}
        <div
          className={` fixed inset-0 z-10 ${mobileOpen ? "block" : "hidden"}`}
          onClick={handleDrawerToggle}
        >
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
        <div
          className={`fixed inset-y-0 left-0 max-w-xs w-full bg-white z-20 ${
            mobileOpen ? "block" : "hidden"
          }`}
        >
          {drawer}
        </div>
      </nav>
    </div>
  );
};

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
