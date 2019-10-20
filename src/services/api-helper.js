import axios from "axios";
import qs from 'query-string';

export const getAnswers = async (userQuestion) => {
  let apiKey = "AXYUUQ-GEAEA7JUEX";
  let params = {i: `${userQuestion}`}
  let question = qs.stringify(params)
  let response = await axios.get(
    `https://api.wolframalpha.com/v1/result?${question}&appid=${apiKey}`
  );
  
  return response.data;
};

// export const
// export const readAnswers = async () => {
//   let apiKry = "5e30cab1b95e43feb93cfdca250ccb71";
//   let response =
// }

// import qs from 'query-string'

// let params = {i: 'how fast can sharks swim',appID: 'adfsaf'}
// let params = {i: 'how fast can sharks swim'}
// let a = qs.stringify(params)

// const url = `api.wolframalpha.com/v1/results?${a}`

// console.log(url);
