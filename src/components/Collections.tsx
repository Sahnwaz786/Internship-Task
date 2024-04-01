import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { FaChevronLeft } from "react-icons/fa";
import { useTheme } from "./context/ThemeContext";
import { FaChevronRight } from "react-icons/fa";

const Collections: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "light"
          ? "bg-gray-100"
          : "bg-gradient-to-b from-green-950/100 to-rose-950/80"
      } Card min-h-screen py-5 `}
    >
      <div className=" text-center  font-bold">
        <h1
          className={`${
            theme === "light" ? "text-gray-900" : "text-white"
          } text-6xl mb-5`}
        >
          Collection Spotlight
        </h1>
        <h5
          className={`${
            theme === "light" ? "text-gray-700" : "text-zinc-400"
          } mb-10 `}
        >
          Discover extraordinary moments with our Spotlight Collection
          metatickets-excutive access to prmium events for unforgettable <br />{" "}
          experience Grab yours today!
        </h5>
      </div>
      <div className="flex items-center justify-center gap-10">
        <button className="border border-blue-600 px-2 py-4 text-blue-700 text-3xl mr-10">
          <FaChevronLeft />
        </button>

        <Card>
          <div
            className={`${
              theme === "light" ? "bg-white" : "bg-zinc-700"
            } w-[16rem] p-3`}
          >
            <CardMedia
              sx={{ height: 400 }}
              image="../public/images/w.jpeg"
              title="green iguana"
            />
            <div className="text-zinc-400 ... mt-5 ml-1">
              {" "}
              - - - - - - - - - - - - - - - - - - - - -
            </div>

            <CardContent
              className={theme === "light" ? "text-gray-900" : "text-white"}
            >
              <h2 className="card text-center text-xl font-bold">
                Las Vegas Aviators{" "}
              </h2>
            </CardContent>
            <div className="">
              <CardActions className="flex items-center ">
                <h6
                  className={`${
                    theme === "light" ? "text-black" : "text-white"
                  } text-center -mt-4" size="small" `}
                >
                  <span
                    className={`${
                      theme === "light" ? "text-black" : "text-white"
                    } text-m`}
                  >
                    OCT 15 | SUN | 4:30 PM
                  </span>
                  <br />
                  <p
                    className={
                      theme === "light" ? "text-gray-700" : "text-zinc-300"
                    }
                  >
                    Las Vegas Ballpark, las Vegas,
                    <br /> Nevada
                  </p>
                </h6>
                <h5  className="text-sm"></h5>
              </CardActions>
              <button className="px-8 py-2 bg-black text-white text-center ml-2 mt-3 ">
                Take Flight Collection
              </button>
            </div>
          </div>
        </Card>

        <Card>
          <div
            className={`${
              theme === "light" ? "bg-white" : "bg-zinc-700"
            } w-[16rem] p-3`}
          >
            <CardMedia
              sx={{ height: 400 }}
              image="../public/images/RC.jpeg"
              title="green iguana"
            />
            <div className="text-zinc-400 ... mt-5 ml-1">
              {" "}
              - - - - - - - - - - - - - - - - - - - - -
            </div>

            <CardContent
              className={theme === "light" ? "text-gray-900" : "text-white"}
            >
              <h2 className="card text-center text-xl font-bold">
                Sacramento River{" "}
              </h2>
            </CardContent>
            <div className="">
              <CardActions className="flex items-center ">
                <h6
                  className={`${
                    theme === "light" ? "text-black" : "text-white"
                  } text-center -mt-4" size="small" `}
                >
                  <span
                    className={`${
                      theme === "light" ? "text-black" : "text-white"
                    } text-m`}
                  >
                    OCT 15 | SUN | 4:30 PM
                  </span>
                  <br />
                  <p
                    className={
                      theme === "light" ? "text-gray-700" : "text-zinc-300"
                    }
                  >
                    Las Vegas Ballpark, las Vegas,
                    <br /> Nevada
                  </p>
                </h6>
                <h5  className="text-sm"></h5>
              </CardActions>
              <button className="px-8 py-2 bg-black text-white text-center ml-2 mt-3 ">
                Take Flight Collection
              </button>
            </div>
          </div>
        </Card>

        <Card>
          <div
            className={`${
              theme === "light" ? "bg-white" : "bg-zinc-700"
            } w-[16rem] p-3`}
          >
            <CardMedia
              sx={{ height: 400 }}
              image="../public/images/w.jpeg"
              title="green iguana"
            />
            <div className="text-zinc-400 ... mt-5 ml-1">
              {" "}
              - - - - - - - - - - - - - - - - - - - - -
            </div>

            <CardContent
              className={theme === "light" ? "text-gray-900" : "text-white"}
            >
              <h2 className="card text-center text-xl font-bold">
                Las Vegas Aviators{" "}
              </h2>
            </CardContent>
            <div className="">
              <CardActions className="flex items-center ">
                <h6
                  className={`${
                    theme === "light" ? "text-black" : "text-white"
                  } text-center -mt-4" size="small" `}
                >
                  <span
                    className={`${
                      theme === "light" ? "text-black" : "text-white"
                    } text-m`}
                  >
                    OCT 15 | SUN | 4:30 PM
                  </span>
                  <br />
                  <p
                    className={
                      theme === "light" ? "text-gray-700" : "text-zinc-300"
                    }
                  >
                    Las Vegas Ballpark, las Vegas,
                    <br /> Nevada
                  </p>
                </h6>
                <h5  className="text-sm"></h5>
              </CardActions>
              <button className="px-8 py-2 bg-black text-white text-center ml-2 mt-3 ">
                Take Flight Collection
              </button>
            </div>
          </div>
        </Card>
        <button className="border border-blue-600 px-2 py-4 text-blue-700 text-3xl ml-10">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Collections;
