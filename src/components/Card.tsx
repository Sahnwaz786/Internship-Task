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
              image="https://s3-alpha-sig.figma.com/img/ceed/8067/dc33760174d3f67737f6e318d0f118ff?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gRi10t64DHbb7CKAQ32uZ8r5GgEveA16AhaoyJEq5xxP-SI1b7CiBLkszXQXdS713LL7XKUWF8lKLmJUBIHFgNwgoxU7Q9nUnTlunB5FYP~lcjUv94Cz3te24QyiQnWAXIYz8fW7GX3EBT4Fm9fCAf3N4UG9T9VBZmPdj48aJydkpc4ghL1a~Vxl2ffVb60sIf7aGozJWUMLb19ldALA1PIcnDhX4fLianO0lSzhCaZqBocge45saoIJsWh-Namu5euhcgWNzj4jjaLFrh40McHoPYSz2FJkcgSqcfGTQhpa9-5YidZ0H6j-Uo2C~uB2DgFW5uPwJWNq~9Ow~j12qQ__"
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
              image="https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkp1Is~dcRKVSVj8GNhxNLMJ7gTEzNDkf8VtD-OryJ0sykh1lwmV-ewiigHPS4njhKjcfYNYHzNtka9sa6DQdjxPUZR6L9ziTFWXse30L5RapCCt5H7T5jsZsMoP09PSNj4-HiVCjoqXwVAVEAhZm~f924bZogIfzfxFc0gC3OPjXnfM2b3~W2jRmsFQJYQxHVAHE2c0YUjzBlbFgDwCD5VY6C~tF71RtERjrsoOZMrojXSQzoPhqcCyNZY5lTX7IFlGbpi-1d4QbKSqih3hrizl6afTuUEfMU-y2fpz3lLyQ3EWMCMLQ8RwiBLAvOcsMkDiPhzFhKCJR0~L6GgGBQ__"
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
              image="https://s3-alpha-sig.figma.com/img/b290/2f7a/b2fcf21c696811f745109da24a740d73?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XtF-TuNcma0-HNbqtENI51868JjNd38EzT5jARpBJ7hvmYBWokB-dZmajh5EMHlo2vJzQl9gymCpvrM7j-OLsXKViFlh7n7qb~M8onQwwDoSvBvPrbH~d1~5N3rn6XxrGb742E~ZWxs83gLMTv8QsQ202LGEzCght4GGoLiPW7Y3aC4ADsJjQGWCoFD-TiRG8PQxSAnlgncjQAWThvQLxl695HYHxq4VShwiSl5CBfH-20XVdVi0W6gEt71vHHuQTSgOcG5eir2lvYRIvY3qLXixYYJZvT72XXJklWzu19p515wWV0QI5LTKLnfRvpPI1s9D5dRrk4tAFZGTC2J3fw__"
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
              image="https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkp1Is~dcRKVSVj8GNhxNLMJ7gTEzNDkf8VtD-OryJ0sykh1lwmV-ewiigHPS4njhKjcfYNYHzNtka9sa6DQdjxPUZR6L9ziTFWXse30L5RapCCt5H7T5jsZsMoP09PSNj4-HiVCjoqXwVAVEAhZm~f924bZogIfzfxFc0gC3OPjXnfM2b3~W2jRmsFQJYQxHVAHE2c0YUjzBlbFgDwCD5VY6C~tF71RtERjrsoOZMrojXSQzoPhqcCyNZY5lTX7IFlGbpi-1d4QbKSqih3hrizl6afTuUEfMU-y2fpz3lLyQ3EWMCMLQ8RwiBLAvOcsMkDiPhzFhKCJR0~L6GgGBQ__"
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
              image="https://wallpaperaccess.com/full/5255765.jpg"
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
