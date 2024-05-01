import React, { useEffect, useContext } from "react";
import { MyDataContext } from "../context/DataContext";

export const useSave = () => {
  const { users, setUsers, setChoosenStyle, choosenSytle } = MyDataContext();
  console.log("useSave: ", users, "choosenSytle: ", choosenSytle);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUsers(storedData);
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
    console.log("Ez lefut?");
    console.log(users);
  };

  const changeStyle = (value) => {
    setChoosenStyle((prevState) => {
      switch (value) {
        case "Blue":
          return "sky";
        case "Green":
          return "lime";
        case "Red":
          return "red";
        case "Empty":
          return "";
        default:
          return "sky";
      }
    });
  };

  useEffect(() => {
    changeStyle(users.style);
  }, [users?.style]);

  return { saveUser, users, changeStyle };
};
