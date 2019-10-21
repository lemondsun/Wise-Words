import React from "react";


const AnswerPage = props => {
  return (
    
    <div>
      <h2 id="printed-answer">{props.answer}</h2>
      {props.play}
    </div>
  );
};

export default AnswerPage;
