import React from "react";
import { scrollOnClick } from "../../functions/scrollFunctions.js";

export const HeaderNavItem = ({href, label, active=false}) => {
  const aditionalClass = active ? " active__link" : "";
  return (
    <li className="nav__item">
      <a href={`#${href}`} className={`nav__link${aditionalClass}`} onClick={scrollOnClick}>{label}</a>
    </li>
  );
};
