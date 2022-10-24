import React from "react";

export default function Project({ title, img, description, link }) {
  return (
    <div className="flex flex-col items-center px-5 mb-3">
      <img src={img} alt="" className="w-[50%]" />
      <a href={link} className="text-xl text-center text-sky-700">
        {title}
      </a>
      <p className="text-center text-slate-800">{description}</p>
    </div>
  );
}
