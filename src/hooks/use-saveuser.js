import { useEffect} from "react";
import { MyDataContext } from "../context/DataContext";

export const useSave = () => {
  const { users, setUsers, setChoosenStyle, /*choosenStyle*/ } = MyDataContext();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUsers(storedData);
      setChoosenStyle(storedData.style || "sky");
    }
  }, [setUsers, setChoosenStyle]); 

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
