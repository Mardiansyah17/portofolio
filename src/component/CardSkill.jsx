import React from "react";

export default function CardSkill({ img, title, fade, delay }) {
  return (
    <div
      data-aos={`fade-${fade}`}
      data-aos-delay={delay}
      className="bg-white dark:bg-slate-800 flex flex-col items-center justify-center space-y-3 mb-3 text-slate-900 dark:text-slate-200 border border-gray-300 dark:border-gray-700  shadow-2xl  rounded-lg p-4 w-36"
    >
      <img src={img} alt="" className="w-20 h-20" />
      <span>{title}</span>
    </div>
  );
}
