import React from "react";
import { HeaderNavItem } from "./HeaderNavItem.js";
import { HeaderNavToggle } from "./HeaderNavToggle.js";
import "./HeaderBar.css";
import gtLogo from "../../assets/icons/gt.svg";

export const HeaderBar = () => {
  return (
    <header className="menu__header" id="header">
      <nav className="nav container">
        <a href="https://gileadedev.web.app/" className="nav__logo">
          <img src={gtLogo} alt="gt-logo" id="gt-logo" aria-label="logo" />
          <span>GILEADE TEIXEIRA</span>
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list" id="nav-list">
            <HeaderNavItem href={"home"} label={"Início"} active={true}/>
            <HeaderNavItem href={"about"} label={"Sobre mim"}/>
            <HeaderNavItem href={"qualification"} label={"Qualificação"}/>
            <HeaderNavItem href={"projects"} label={"Principais Projetos"}/>
            <HeaderNavItem href={"techs"} label={"Tecnologias"}/>
            <HeaderNavItem href={"contact"} label={"Contato"}/>
          </ul>
        </div>
        <HeaderNavToggle /> 
      </nav>
    </header>
  );
};
