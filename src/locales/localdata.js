import React from "react";
import { FaProjectDiagram, FaPalette, FaVolumeUp, FaLanguage, FaDatabase } from "react-icons/fa";
import { FaHome, FaShieldAlt, FaSpaceShuttle, FaImages, FaSignInAlt } from "react-icons/fa";

export const menu = [
  {
    title: "Home",
    icon: FaHome ,
    link:"/",
    description: "Kezdőlap",
  },
  {
    title: "Sentry",
    icon: FaShieldAlt,
    link:"/sentry",
    description: "Őrszem",
  },
  {
    title: "Space Know",
    icon: FaSpaceShuttle,
    link:"/spaceknowledge",
    description: "Űrtudás",
  },
  {
    title: "Gallery",
    icon: FaImages,
    link:"/gallery",
    description: "Galéria",
  },
  {
    title: "Login",
    icon: FaSignInAlt,
    link:"/login",
    description: "Bejelentkezés",
  },
];



export const settings = [
  {
    title: "Navigation",
    icon: FaProjectDiagram,
  },
  {
    title: "Style",
    icon: FaPalette,
  },
  {
    title: "Sound",
    icon: FaVolumeUp,
  },
  {
    title: "Language",
    icon: FaLanguage,
  },
  {
    title: "Data",
    icon: FaDatabase,
  },
];

