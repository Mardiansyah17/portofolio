import React from "react";
import Card from "./Card";

import taildiwndLogo from "/public/img/tailwind.svg";
import reactLogo from "/public/img/react.svg";
import javascriptLogo from "/public/img/javascript.svg";
import phpLogo from "/public/img/php.svg";
import laravelLogo from "/public/img/laravel.svg";
import nodeLogo from "/public/img/node.svg";

export default function SkillSection() {
  return (
    <div className="">
      <h1 className="mb-5 text-center text-sky-600 text-2xl ">My Skills</h1>
      <div className=" grid place-items-center grid-cols-2  gap-y-3 ">
        <Card
          img={taildiwndLogo}
          title="TailwindCss"
          fade={"right"}
          delay="100"
        />
        <Card
          img={javascriptLogo}
          title="JavaScript"
          fade={"left"}
          delay="200"
        />
        <Card img={reactLogo} title="ReactJs" fade={"right"} delay="300" />
        <Card img={phpLogo} title="PHP" fade={"left"} delay="400" />
        <Card img={laravelLogo} title="Laravel" fade={"right"} delay="500" />
        <Card img={nodeLogo} title="NodeJs" fade={"left"} delay="600" />
      </div>
    </div>
  );
}
