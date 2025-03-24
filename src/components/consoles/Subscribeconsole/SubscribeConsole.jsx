import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // A navigációhoz
import { motion } from "framer-motion";
import { subcribeAnimation } from "../../../utils/motion";

const SubscribeConsole = ({subscribeToggle, setSubscribeToggle}) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/subscribe", {
        username,
        email,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };
  const handleClose = () => {
    setSubscribeToggle(false);
  };

  return (
    <motion.div
    variants={subcribeAnimation("right")}
    initial="exit"
    animate={subscribeToggle ? "animate" : "exit"}
    exit="exit"
    className="flex  flex-col items-center justify-center h-full
     absolute top-0 left-0 w-full   md:relative md:w-96 md:h-full md:z-0
   border-0 border-orange-400 "
  >
    {/* A tartalom a hátterezett konténerbe kerül */}
    <div className="z-50 bg-sky-950/70 rounded-lg p-8 w-96 max-w-md 
    shadow-lg border border-sky-600">
      <h1 className="text-2xl font-bold text-sky-200 mb-4">Feliratkozás</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="username"
            className="block text-sky-200 text-sm font-bold mb-2"
          >
            Felhasználónév:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sky-200 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Feliratkozás
        </button>
        {message && <div className="text-sky-200">{message}</div>}
      </form>
      {/* Vissza gomb */}
      <button
          onClick={handleClose}
          className="mt-4 inline-block align-baseline font-bold text-sm text-sky-200 hover:text-sky-200/80"
        >
          Mégsem
        </button>
    </div>
  </motion.div>
  );
};

export default SubscribeConsole;
