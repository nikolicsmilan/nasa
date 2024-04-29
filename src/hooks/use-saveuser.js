import { useEffect } from "react";
import { MyDataContext } from "../context/GeneralContext";
export const useSave = () => {
  const { users, setUsers } = MyDataContext();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUsers(storedData);
    }
  }, [users]);

  //IDE KELL A LOCALSTORAGE MENTÉS LOGIKA
  const saveUser = (key,value) => {
    setUsers(prevObjektum => ({
      ...prevObjektum,
      [key]: value
    }));
  };

  return { saveUser };
};
