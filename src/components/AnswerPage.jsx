import React from "react";
import { Link } from "react-router-dom";

const AnswerPage = props => {
  return (
    <div id="answer-box">
      <h2 id="printed-answer">{props.answer}</h2>
      <h2 id="errorMessage">{props.errorMessage}</h2>
      <Link to="/">&lt; Back</Link>
    </div>
  );
};

export default AnswerPage;