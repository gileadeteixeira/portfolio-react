import React, { useState } from "react";
// import {scrollOnClick} from "../../functions/scrollFunctions.js";
import { BiMenu, BiX } from "react-icons/bi";

export const HeaderNavToggle = () => {
    const [isOpen, changeMenuVisibility] = useState(false);
    const navMenu = document.querySelector("#nav-menu");
    const list = document.querySelector("#nav-list");

    const menuManipulation = (event) => {
        event.preventDefault();
        isOpen ? navMenu.classList.remove("menu__open") : navMenu.classList.add("menu__open");
        changeMenuVisibility(!isOpen);
    }

    if (navMenu) {
        navMenu.addEventListener("click", (event) => menuManipulation(event));
        list.addEventListener("click", (event) => menuManipulation(event));
    }

    return (
        <>
            {isOpen
                ? <BiX className="menu__icon" id="menu-icon" onClick={menuManipulation}/>
                : <BiMenu className="menu__icon" id="menu-icon" onClick={menuManipulation}/>
            }        
            {/* <i className="bx bx-menu" id="menu-icon"></i> */}
        </> 
    );
};
