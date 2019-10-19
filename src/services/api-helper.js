import axios from "axios";

export const getAnswers = async () => {
  let apiKey = "AXYUUQ-GEAEA7JUEX";
  let response = await axios.get(
    `https://api.wolframalpha.com/v1/result?i=How+tall+is+the+empire+state+building%3F&appid=${apiKey}`
  );
  console.log(response);
  return response;
};

// export const
