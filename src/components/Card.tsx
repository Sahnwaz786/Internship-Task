import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { useTheme } from "./context/ThemeContext";

const MediaCard: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "light" ? "bg-gray-100" : "bg-gray-900 "}`}>
      <h1
        className={`${
          theme === "light" ? "text-gray-900" : "text-white"
        } text-xl md:text-3xl lg:text-4xl ml-20 mb-5   underline `}
      >
        Sports
      </h1>

      <div className="card flex items-center justify-center gap-4 ">
       
       <Card>
          <div
            className={`${
              theme === "light" ? "bg-white" : "bg-gray-600"
            } w-[16rem]   p-2 `}
          >
            <CardMedia
              sx={{ height: 400 }}
            //   image="../public/images/red shirt.jpeg"
            image="https://s3-alpha-sig.figma.com/img/ceed/8067/dc33760174d3f67737f6e318d0f118ff?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R2IDtoTWwq630UlH0sKNg~PU50LNXExnhu5Lby1e1aLdOkwydkRY~HXB-V6cSPffJGRhDXSNxxlK-fhzp6oCJw4AMxMfrGYV7h4Ab12AafygPq3SNS7OE3WojSpsi6bD5ExlN-8qRgly1WcKMHSBoEw3u3FniJkrJ0w2ImgmjNYHWah-pXfm~a9T48AtxmKebamaJpr2xn36RUYW78500AjVkEPB6zySkuRUXbT3H98tztlw6dsNDkPqQlf15BAyQy9kSllufmh3lJ1feLC8QlXTwq4hqY~A9xr4tQBa3bN7Dy1OVBs-yFpo3a-qV2hwLo72kDN2Wsbn5ZDyANVrIQ__"
            
              title="green iguana"
            />
           

            <CardContent>
              <h2
                className={`${
                  theme === "light" ? "text-gray-900" : "text-white"
                } card font-bold text-lg -ml-4  `}
              >
                Sacramento River Cats
              </h2>
            </CardContent>

            <div
              className={`${
                theme === "light" ? "bg-gray-200" : "bg-neutral-800"
              } `}
            >
              <CardActions
                className={`${
                  theme === "light" ? "text-zinc-700" : "text-gray-300"
                } flex items-center justify-between `}
              >
                <h5  className="text-sm">Total Events</h5>
                <h5  className="text-sm">Sport</h5>
              </CardActions>
              <CardActions
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } flex items-center justify-between text-xl`}
              >
                <h3 className="text-lg" >
                  48 Events
                </h3>
                <h3  className="text-lg">Baseball</h3>
              </CardActions>
            </div>
          </div>
        </Card>
          <Card>
          <div
            className={`${
              theme === "light" ? "bg-white" : "bg-gray-600"
            } w-[16rem]   p-2 `}
          >
            <CardMedia
              sx={{ height: 400 }}
              image="../public/images/blue shirt.jpeg"
              title="green iguana"
            />
            <CardContent>
              <h2
                className={`${
                  theme === "light" ? "text-gray-900" : "text-white"
                } card font-bold text-lg -ml-4  `}
              >
                Las Vegas Avlators
              </h2>
            </CardContent>

            <div
              className={`${
                theme === "light" ? "bg-gray-200" : "bg-neutral-800"
              } `}
            >
              <CardActions
                className={`${
                  theme === "light" ? "text-zinc-700" : "text-gray-300"
                } flex items-center justify-between `}
              >
                <h5  className="text-sm">Total Events</h5>
                <h5 className="text-sm">Sport</h5>
              </CardActions>
              <CardActions
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } flex items-center justify-between text-xl`}
              >
                <h3  className="text-lg">
                  28 Events
                </h3>
                <h3  className="text-lg">Baseball</h3>
              </CardActions>
            </div>
          </div>
        </Card>
        <Card>
          <div
            className={`${
              theme === "light" ? "bg-white" : "bg-gray-600"
            } w-[16rem]   p-2 `}
          >
            <CardMedia
              sx={{ height: 400 }}
              image="../public/images/helmate boy.jpeg"
              title="green iguana"
            />
            <CardContent>
              <h2
                className={`${
                  theme === "light" ? "text-gray-900" : "text-white"
                } card font-bold text-lg -ml-4  `}
              >
                New Jersey Devils
              </h2>
            </CardContent>
            <div
              className={`${
                theme === "light" ? "bg-gray-200" : "bg-neutral-800"
              } `}
            >
              <CardActions
                className={`${
                  theme === "light" ? "text-zinc-700" : "text-gray-300"
                } flex items-center justify-between `}
              >
                <h5  className="text-sm">Total Events</h5>
                <h5  className="text-sm">Sport</h5>
              </CardActions>
              <CardActions
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } flex items-center justify-between text-xl`}
              >
                <h3  className="text-lg">
                  15 Events
                </h3>
                <h3 className="text-lg">Ice Hockey</h3>
              </CardActions>
            </div>
          </div>
        </Card>
       
        <Card>
          <div
            className={`${
              theme === "light" ? "bg-white" : "bg-gray-600"
            } w-[16rem]   p-2 `}
          >
            <CardMedia
              sx={{ height: 400 }}
              image="../public/images/blue shirt.jpeg"
              title="green iguana"
            />
            <CardContent>
              <h2
                className={`${
                  theme === "light" ? "text-gray-900" : "text-white"
                } card font-bold text-lg -ml-4  `}
              >
                Sacramento River Cats
              </h2>
            </CardContent>

            <div
              className={`${
                theme === "light" ? "bg-gray-200" : "bg-neutral-800"
              } `}
            >
              <CardActions
                className={`${
                  theme === "light" ? "text-zinc-700" : "text-gray-300"
                } flex items-center justify-between `}
              >
                <h5  className="text-sm">Total Events</h5>
                <h5  className="text-sm">Sport</h5>
              </CardActions>
              <CardActions
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } flex items-center justify-between text-xl`}
              >
                <h3  className="text-lhg">
                  28 Events
                </h3>
                <h3 className="text-lg">Baseball</h3>
              </CardActions>
            </div>
          </div>
        </Card>
        <Card>
          <div
            className={`${
              theme === "light" ? "bg-white" : "bg-gray-600"
            } w-[16rem]   p-2`}
          >
            <CardMedia
              sx={{ height: 263 }}
              image="../public/images/Dicks.jpeg"
              title="green iguana"
            />
            <CardContent>
              <h2
                className={`${
                  theme === "light" ? "text-gray-900" : "text-white"
                } card font-bold text-lg -ml-4`}
              >
                Advertisement title
              </h2>
            </CardContent>

            <CardActions className="flex items-center justify-between  text-sm pb-0 mb-11">
              <p
                className={
                  theme === "light" ? "text-zinc-800" : "text-gray-100"
                }
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                magnam, odit esse sequi, mollitia consequuntur dolores, aliquid
                saepe quam nisi voluptas nostrum. Placeat natus temporibus ipsam
                eaque nulla, dolore doloremque reiciendis pariatur animi autem .
                .
              </p>
            </CardActions>
          </div>
        </Card>

        {/* Remaining Cards */}
      </div>
      <button className="px-8 py-3 bg-blue-500 ml-[42rem] mt-10 text-white rounded-sm mb-4">
        See More
      </button>
    </div>
  );
}

export default MediaCard;
