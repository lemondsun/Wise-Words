import React from "react";


const AnswerPage = props => {
  return (

    <div id="answer-box">
    <h2 id="printed-answer">{props.answer}</h2>
      <h2 id="errorMessage">{props.errorMessage}</h2> 
    </div>
  );
};

export default AnswerPage;