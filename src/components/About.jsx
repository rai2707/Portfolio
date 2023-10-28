import React from "react";

const About = () => {
  
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Welcome to my portfolio! I'm a 2016 Mechanical Engineering graduate
          from Dr. Abdul Kalam Technical University, and I've embarked on a journey into
          the world of MERN Stack Web Development. With a strong foundation in
          problem-solving and analytical thinking, my engineering background
          equips me with a keen eye for detail and the ability to tackle complex
          challenges with innovative solutions. Driven by my passion for
          learning and staying ahead of technological advancements, I recently
          completed training in MERN Stack web development. This comprehensive
          training has equipped me with the skills to develop dynamic and
          user-friendly web applications.
        </p>
        <br />
        <p className="text-xl">
          Collaboration is at the heart of my work style, and I thrive in
          diverse teams. I possess a constant thirst for knowledge, enabling me
          to adapt quickly to new technologies and contribute effectively to
          projects. My ultimate goal is to leverage my multidisciplinary
          background and technical expertise to create innovative digital
          experiences that not only meet but exceed client expectations. I am
          committed to making a meaningful impact through my problem-solving
          abilities. Thank you for visiting my portfolio. I'm excited to connect
          with like-minded professionals and explore new opportunities in web
          development. Let's collaborate and create something remarkable
          together!"
        </p>
      </div>
    </div>
  );
};

export default About;
