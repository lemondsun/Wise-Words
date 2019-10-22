import axios from "axios";
import qs from "query-string";
// import VoiceRSSWebApi from './voice-rss-api';

export const getAnswers = async userQuestion => {
  try {
    let apiKey = "AXYUUQ-GEAEA7JUEX";
    let params = { i: `${userQuestion}` };
    let question = qs.stringify(params);
    let response = await axios.get(
      `https://api.wolframalpha.com/v1/result?${question}&appid=${apiKey}`
    );

    return response.data;
  } catch (error) {
    return { error: "We could not find an answer for that" };
  }
};

// const VoiceRSS = new VoiceRSSWebApi();
// VoiceRSS.setApiKey('b1dc733a7f9d423abd17e41787a63188');

// export const read = async () => {
//   const audio = await VoiceRSS.getAudio('Hello World');
  
//   // play the audio
//   new Audio(audio).play();
  
//   // OR console log the audio (base64 encoding)
//   console.log(audio);
// };
// export const readAnswer = async () => {
//   const VoiceRSS = new VoiceRSSWebApi();
//   VoiceRSS.setApiKey('b1dc733a7f9d423abd17e41787a63188');
//   const audio = await VoiceRSS.getAudio('Hello World');
//   new Audio(audio).play();
// }









// export const readAnswer = async (answer) => {
//   let apiKey = 'b1dc733a7f9d423abd17e41787a63188';
  
//   // let theAnswer = qs.stringify(params);
//   let response = await axios.get(`http://api.voicerss.org/?key=${apiKey}&hl=en-us&src=${answer}`)
//   let audio = response.config.url
//   return audio
// }

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
