import React from "react";
import "./ScrollerTop.css";
import { BiChevronsUp } from "react-icons/bi";
import { scrollToTop } from "../../functions/scrollFunctions.js"

export const ScrollerTop = () => {
    const scroller = (
        <a href="#home" className="scroller__top" id="scroller-top">
            <BiChevronsUp className="scroller__top__icon" id="scroller-top-icon"/>
        </a>
    );

    window.addEventListener("scroll", () => {
        scrollToTop(scroller);
    });

    return scroller;
};
