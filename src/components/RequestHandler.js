import axios from "axios";

export const urlHappyPotterApi = "https://62d31ff881cb1ecafa6a742a.mockapi.io";


export const getStudents = async () => {
    const res = await axios.get(urlHappyPotterApi + "/studentss");
    return res.data;
   
  };
  export const getStaff = async () => {
    const res = await axios.get(urlHappyPotterApi + "/staff");
    return res.data;
   
  };

  export const postCharacter = async (character,characterType) => {
    const res = await axios.post(urlHappyPotterApi + "/"+characterType,character);
    console.log(res)
    return res.data;
   
  };


  