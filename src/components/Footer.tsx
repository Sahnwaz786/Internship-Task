import React from 'react';
import { useTheme } from "./context/ThemeContext";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <footer
      className={`${theme === "light" ? "bg-gray-50" : "bg-gray-800"} py-8`}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h2
              className={`${
                theme === "light" ? "text-gray-900" : "text-white"
              } text-xl font-bold mb-4`}
            >
              Popular Sports
            </h2>
            <ul
              className={theme === "light" ? "text-gray-600" : "text-gray-400"}
            >
              <li className="mb-2">
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-white"
                  } inline-block w-16 `}
                >
                  Football:
                </span>{" "}
                English Premier League
              </li>
              <li className="mb-2">
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-white"
                  } inline-block w-16 `}
                >
                  Basketbal:
                </span>{" "}
                NBA
              </li>
              <li className="mb-2">
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-white"
                  } inline-block w-16 `}
                >
                  Tennis:
                </span>{" "}
                ATP Tour
              </li>
              <li className="mb-2">
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-white"
                  } inline-block w-16 `}
                >
                  Cricket:
                </span>{" "}
                IPL
              </li>
              <li className="mb-2">
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-white"
                  } inline-block w-16 `}
                >
                  Baseball:
                </span>{" "}
                MLB
              </li>
              {/* Add more sports as needed */}
            </ul>
          </div>
          <div className="col-span-1">
            <h2
              className={`${
                theme === "light" ? "text-gray-900" : "text-white"
              } text-xl font-bold mb-4`}
            >
              Popular Leagues
            </h2>
            <ul
              className={theme === "light" ? "text-gray-600" : "text-gray-400"}
            >
              <li className="mb-2">
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-white"
                  } inline-block w-16 `}
                >
                  EPL :
                </span>{" "}
                Football
              </li>
              <li className="mb-2">
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-white"
                  } inline-block w-16 `}
                >
                  NBA :
                </span>{" "}
                Basketball
              </li>
              <li className="mb-2">
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-white"
                  } inline-block w-16 `}
                >
                  ATP :
                </span>{" "}
                Tennis
              </li>
              <li className="mb-2">
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-white"
                  } inline-block w-16 `}
                >
                  IPL :
                </span>{" "}
                Cricket
              </li>
              <li className="mb-2">
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-white"
                  } inline-block w-16 `}
                >
                  MLB:
                </span>{" "}
                Baseball
              </li>
              {/* Add more leagues as needed */}
            </ul>
          </div>
          <div className="col-span-1 flex justify-center md:justify-end items-center">
            <div
              className={`${
                theme === "light" ? "text-gray-900" : "text-white"
              } flex space-x-4 `}
            >
              <a href="#" className=" hover:text-white">
                <FaFacebook />
              </a>
              <a href="#" className=" hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className=" hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div
          className={`${
            theme === "light" ? "text-gray-900" : "text-gray-500"
          } mt-8 border-t  pt-8 flex justify-center`}
        >
          <p
            className={`${
              theme === "light" ? "text-gray-900" : "text-white"
            }  text-sm`}
          >
            &copy; {new Date().getFullYear()} Sports Website. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
