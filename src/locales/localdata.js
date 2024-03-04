import React from "react";
import { FaProjectDiagram, FaPalette, FaVolumeUp, FaLanguage, FaDatabase } from "react-icons/fa";
import { FaHome, FaShieldAlt, FaSpaceShuttle, FaImages, FaSignInAlt } from "react-icons/fa";

export const homemenu = [
  {
    title: "Home",
    icon: FaHome ,
    link:"/",
    description: "Kezdőlap",
  },
  {
    title: "Asteroide",
    icon: FaShieldAlt,
    link:"/asteroide",
    description: "Asteroide",
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

export const spaceKnowledgeMenu = [
  {
    title: "Vissza",
    icon: FaProjectDiagram,
    link:"/"
  },
  {
    title: "SolarSystem",
    icon: FaProjectDiagram,
    link:"spaceknowledge/solarSystem"
  },
  {
    title: "Quiz",
    icon: FaPalette,
    link:"spaceknowledge/quiz"
  },
 
];

export const returnMenu = [
  {
    title: "Vissza",
    icon: FaProjectDiagram,
    link:"/"
  },
  {
    title: "SolarSystem",
    icon: FaProjectDiagram,
    link:"spaceknowledge/solarSystem"
  },
  {
    title: "Quiz",
    icon: FaPalette,
    link:"spaceknowledge/quiz"
  },
 
];

export const settingshome = [
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



//  { path: "spaceknowledge", element: <SpaceKnowledge /> },