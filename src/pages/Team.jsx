import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import TeamMembers from "../components/TeamMembers";

const Team = () => {
  return (
    <>
      <div className="bg-linear-to-b from-[#c0fc5f54] to-white">
        <div className="container mx-auto">
          <div className="py-20">
            <div className="flex">
              <Link to="/">
                {" "}
                <p className=" font-semibold hover:underline">Home</p>
              </Link>
              <FaAngleRight className=" mt-1" />
              <Link to="/team">
                <p className="text-[#0c0f3b] font-semibold  hover:underline">
                  Team
                </p>
              </Link>
            </div>
          </div>
          <div className="py-5">
            <h1 className="text-center text-3xl lg:text-6xl text-[#0c0f3b]">
              The Members of the{" "}
              <span className="text-[#8be001] ">“Dreamers Valley” </span>
            </h1>
            <p className="text-center py-4 px-20">
              Our team's full of undiscovered Da Vincis, aspiring master chefs,
              budding triathlon finishers, IMDB top 250 encyclopedias, and more.
              But what they do in the office is even better. Thanks to them, as
              of today, we're one of Bangladesh's hottest startups.
            </p>
          </div>
        </div>
<TeamMembers/>
      </div>
    </>
  );
};

export default Team;
