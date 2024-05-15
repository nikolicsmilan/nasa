import React, { useEffect, useContext } from "react";
import { MyDataContext } from "../context/DataContext";
import UAParser from "ua-parser-js";
export const useInfo = () => {
  const { users, setUsers, setChoosenStyle, choosenStyle } = MyDataContext();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUsers(storedData);
      setChoosenStyle(storedData.style || "sky");
    }
  }, []); // üres dependency array, hogy csak a komponens mountolásakor fusson le ez az useEffect

  const saveUser = (key, value) => {
    setUsers((prevObject) => {
      const updatedUsers = {
        ...prevObject,
        [key]: value,
      };
      localStorage.setItem("userData", JSON.stringify(updatedUsers)); // a változások mentése localStorage-be
      return updatedUsers;
    });
  };

  return { saveUser, users };
};