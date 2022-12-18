import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import ButtonContact from "./ButtonContact";

export default function Hero() {
  return (
    <div className="h-80 items-center  text-wh flex flex-col  lg:flex-row  px-3 ">
      <div className="flex flex-col items-center  basis-2/4 ">
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
          I'm a FullStack web developer Programming is my passion I can build attractive websites
          using some of the trending technologies like TailwindCss, React JS, Laravel, Node JS,
          Express.js if you need my skills please contact me
        </p>
        <div className="flex space-x-2">
          <ButtonContact title="Instagram" />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
