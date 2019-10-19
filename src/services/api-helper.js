import axios from "axios";

export const getAnswers = async () => {
  let apiKey = "AXYUUQ-GEAEA7JUEX";
  let response = await axios.get(
    `https://api.wolframalpha.com/v1/result?i=How+tall+is+the+empire+state+building%3F&appid=${apiKey}`
  );
  
  return response.data;
};

// export const
// export const readAnswers = async () => {
//   let apiKry = "5e30cab1b95e43feb93cfdca250ccb71";
//   let response =
// }
