import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className=" h-[38rem] text-wh flex flex-col justify-center items-center px-3">
      <h1 className=" text-2xl text-sky-700 dark:text-sky-400 font-bold">
        <TypeAnimation
          sequence={[
            "Muhammad Mardiansyah ", // Types 'One'
            1000, // Waits 1s
            "Fullstack Web developer ", // Deletes 'One' and types 'Two'
            1000, // Waits 2s
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
        />
      </h1>

      <p className="text-center mt-5 text-slate-900 dark:text-slate-100">
        I'm a FullStack web developer Programming is my passion I can build
        attractive websites using some of the trending technologies like
        TailwindCss, React JS, Laravel, Node JS, Express.js if you need my
        skills please contact me
      </p>
      <button className="px-3 mt-3 py-2 text-white rounded-lg bg-gradient-to-br from-blue-700 via-sky-600 to-green-500 hover:from-green-500 hover:to-yellow-500">
        Contact me
      </button>
    </div>
  );
}
