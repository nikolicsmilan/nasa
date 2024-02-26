import React, { useState } from "react";
import axios from "axios";
const URL = "https://ssd-api.jpl.nasa.gov/sentry.api";

 export const getData = async () => {
  try {
    const {data:{data}} = await axios.get(URL);
    return data
  } catch (error) {}
};
