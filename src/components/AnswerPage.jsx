import React from "react";


const AnswerPage = props => {
  return (
    
    <div onLoad='`{props.playAnswer}`'>
    <h2 id="printed-answer">{props.answer}</h2>
    
      {props.playAnswer}
    </div>
  );
};

export default AnswerPage;
