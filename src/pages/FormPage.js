import React from "react";
import formPage from "./formPage.module.css";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { Chatbot } from "../components/Chatbot";
import HomeVector from "../icons/HomeVector.svg";
import FBVector from "../icons/FBVectorWhite.svg";
import IGVector from "../icons/IGVectorWhite.svg";
import EmailVector from "../icons/EmailVectorWhite.svg";
import WhiteLogo from "../icons/WhiteLogo.svg";
import RedMark from "../icons/RedQuestionMark.svg";
import FormOne from "../components/Forms/FormOne.js";

export default function FormPage() {
  return (
    <div class={formPage.CoverDetails1}>
      {/* HEADER BAR JSX */}
      <div class={formPage.NavigationBar}>
        <img class={formPage.image1} src={logo} alt="Turners logo"></img>
        <span class={formPage.Help}>Help</span>
        <img class={formPage.redQuestionMark} src={RedMark} alt=""></img>
      </div>
      {/* NAV BAR JSX */}
      <div class={formPage.Frame88}>
        <span class={formPage.CoverDetails}>Cover Details</span>
        <span class={formPage.YourQuote}>Your Quote</span>
        <span class={formPage.YourDetails}>Your Details</span>
        <span class={formPage.Finalise}>Finalise</span>
      </div>
    

      {/* FORM RENDERING */}
      <FormOne />

      {/* FOOTER BAR JSX */}
      <div class={formPage.Frame14}>
        <NavLink to="/">
          <img
            class={formPage.LogoWhite}
            src={WhiteLogo}
            alt="White Turners Logo"
          ></img>
        </NavLink>
        <div>
          <NavLink to="/">
            <img
              class={formPage.HomeVector}
              src={HomeVector}
              alt="Return to home page"
            ></img>
          </NavLink>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img
              class={formPage.FBVector}
              src={FBVector}
              alt="Got to Facebook"
            ></img>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img
              class={formPage.IGVector}
              src={IGVector}
              alt="Go to Instagram"
            ></img>
          </a>
          <img
            class={formPage.EmailVector}
            src={EmailVector}
            alt="Email Link"
          ></img>
        </div>
      </div>
      <div>
        <Chatbot></Chatbot>
      </div>
    </div>
  );
}
