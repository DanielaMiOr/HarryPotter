import React from "react";
import axios from "axios";

export const urlHappyPotterApi = "https://62d31ff881cb1ecafa6a742a.mockapi.io";


export const getStudents = async () => {
    const res = await axios.get(urlHappyPotterApi + "/studentss");
    return res.data;
   
  };

  