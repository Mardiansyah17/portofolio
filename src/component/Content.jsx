import React from "react";
import Card from "./Card";
import SkillSection from "./SkillSection";

export default function Content() {
  return (
    <div className="my-7">
      <SkillSection />
      <h1 className="mb-5 text-center text-sky-600 text-2xl ">My Projects</h1>
      <div className="">
        <Card />
      </div>
    </div>
  );
}
