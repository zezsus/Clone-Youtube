import React, { useState } from "react";
import "./Categoriesbar.scss";

const keywords = [
  "All",
  "Reactjs",
  "Angularjs",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
];

const Categoriesbar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const handelClick = (values) => {
    setActiveElement(values);
  };

  return (
    <div className="categoriesbar ">
      {keywords.map((values, index) => {
        return (
          <span
            key={index}
            onClick={() => handelClick(values)}
            className={activeElement === values ? "active" : ""}>
            {values}
          </span>
        );
      })}
    </div>
  );
};

export default Categoriesbar;
