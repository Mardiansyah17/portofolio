import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function Nav() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList[0] == "dark"
      ? setDark(true)
      : setDark(false);
  }, [dark]);
  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    document.documentElement.classList[0] == "dark"
      ? setDark(true)
      : setDark(false);
  }
  return (
    <div className=" flex justify-end px-4 py-3 items-center">
      <span onClick={toggleDarkMode} className="mr-3 cursor-pointer">
        {dark ? (
          <FontAwesomeIcon
            icon={faMoon}
            size={"xl"}
            color={dark ? "white" : "black"}
          />
        ) : (
          <FontAwesomeIcon
            icon={faSun}
            size={"xl"}
            color={dark ? "white" : "black"}
          />
        )}
      </span>
    </div>
  );
}
