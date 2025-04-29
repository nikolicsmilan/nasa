// locales/navigationData.js
import { FaHome } from "react-icons/fa";
import { GiEnergyArrow } from "react-icons/gi";
import { MdOutlineAutoGraph, MdDashboardCustomize, } from "react-icons/md";
import { TbTestPipe2Filled } from "react-icons/tb";
// Importáld a panel tartalom komponenseket (hozd létre ezeket a fájlokat, ha még nem léteznek)
import HomePanelContent from "../components/navbarsimple/HomePanelContent ";
/*import AsteroidePanelContent from "../components/navbarsimpleAsteroidePanelContent"; // Placeholder
import GraphPanelContent from "../components/navbarsimple/GraphPanelContent";
import TestPanelContent from "../components/navbarsimple/TestPanelContent"; // Placeholder (vagy TextOnlyPanelContent)
import AdminPanelContent from "../components/navbarsimple/AdminPanelContent"; // Placeholder*/

export const navigationData = [
  {
    title: "Home",
    icon: FaHome,
    route: "/",
    // Panel specifikus adatok:
    panelComponent: HomePanelContent,
    panelData: {
      title:"Főoldal",
      description:
        "Az alkalmazás fő áttekintő oldala, amely az aktuális aszteroida veszélyességi szintet mutatja.",
      imageUrl: "images/home_panel_earth.JPG", // Adj meg egy releváns kép elérési utat az public/images mappából
      submenus: [
        { title: "Részletes Státusz", route: "/status-details" },
        { title: "Korábbi Események", route: "/history" },
      ],
    },
  },
  {
    title: "Asteroide",
    icon: GiEnergyArrow, // Az eredeti ikon
    route: "/asteroide", // Az eredeti route
    // Panel specifikus adatok:
    panelComponent: HomePanelContent, // Használj egyedi vagy általános komponenst
    panelData: {
      title:"Aszteorida",
      description:
        "Információk a Föld-közeli objektumokról, listázás és keresési lehetőségek.",
      imageUrl: "/images/asteroid_red_with_sun.JPG", // Adj meg egy releváns kép elérési utat
      submenus: [
        { title: "Objektum Lista", route: "/asteroide/list" },
        { title: "Keresés", route: "/asteroide/search" },
        { title: "Top Veszélyesek", route: "/asteroide/top-threats" },
      ],
    },
  },
  {
    title: "Graph",
    icon: MdOutlineAutoGraph,
    route: "/graph",
    // Panel specifikus adatok:
    panelComponent: HomePanelContent,
    panelData: {
      title:"Grafikonok",
      mainChartInfo:
        "Interaktív diagramok az aszteroida adatok vizualizálásához.",
      availableCharts: ["Area", "Bar", "Pie", "Radar", "..."], // Lista a diagramokról
      docsLink: "/graph-docs", // Link a diagramok leírásához
      imageUrl: "/images/graph_panel_charts.JPG",
    },
  },
  {
    title: "Test",
    icon: TbTestPipe2Filled,
    route: "/test",
    // Panel specifikus adatok:
    panelComponent: HomePanelContent, // Használj egyedi vagy általános komponenst
    panelData: {
      title:"Teszt",
      description:
        "Fejlesztési és tesztelési oldal különböző komponensek és funkciók kipróbálásához.",
      // Nincs kép vagy almenü ebben a példában
      testScenarios: ["API kapcsolat", "UI Elemek", "Animációk"],
      imageUrl: "/images/test.JPG",
    },
  },
  {
    title: "Admin",
    icon: MdDashboardCustomize,
    route: "/admin",
    // Panel specifikus adatok:
    panelComponent: HomePanelContent, // Használj egyedi vagy általános komponenst
    panelData: {
      title:"Admin felület",
      description:
        "Adminisztrációs felület a rendszer beállításainak és felhasználóinak kezelésére.",
      imageUrl: "/images/dashboard.JPG",
      adminLinks: [
        { title: "Felhasználók", route: "/admin/users" },
        { title: "Beállítások", route: "/admin/settings" },
        { title: "Logok", route: "/admin/logs" },
      ],
    },
  },
];
/*
export const navigationData = [
  {
    title: "Home",
    icon: FaHome,
    description: "General information",
    animations: "yes",
    route: "/"
  },
  {
    title: "Asteroide",
    icon: GiEnergyArrow,
    description: "General information",
    animations: "yes",
    route: "/asteroide"
  },
  {
    title: "Graph",
    icon: MdOutlineAutoGraph,
    description: "Graphs",
    animations: "yes",
    route: "/graph"
  },
  {
    title: "Test",
    icon: TbTestPipe2Filled,
    description: "Test",
    animations: "yes",
    route: "/test"
  },
  {
    title: "Admin",
    icon: MdDashboardCustomize,
    description: "Admin",
    animations: "yes",
    route: "/admin"
  },
];*/
