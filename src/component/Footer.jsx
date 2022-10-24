import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="bg-white  border-t border-gray-300 shadow-xl flex flex-col items-center">
      <h1>©2022 Copyright: Muhammad Mardiansyah</h1>
      <div className="mt-3 flex justify-around w-full pb-6">
        <a href="https://www.instagram.com/m_mardi173/">
          <FontAwesomeIcon icon={faInstagram} size="2xl" />
        </a>
        <a href="https://github.com/Mardiansyah17">
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-mardiansyah-b8b787231/">
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
      </div>
    </div>
  );
}
