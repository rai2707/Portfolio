import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white block">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Enthusiastic Front-End developer with two years of experience working
            with JavaScript, HTML, CSS, React JS to deliver exceptional customer
            experience
            <br /> Currently I love to work on web application using
            technologies like React JS, Tailwind, and Material UI.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img
            
            src="https://media.tenor.com/C9qukZqPPS4AAAAC/coding-typing.gif"
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full bg-white"
          />
          
          
        </div>
      </div>
    </div>
  );
};

export default Home;


