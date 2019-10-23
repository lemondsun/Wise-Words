import React from "react";

const SearchArea = props => {
  return (
    <div id="question-section">
      <form onSubmit={props.handleSubmit}>
        <h1>ASK HERE</h1>
        <input
          type="text"
          placeholder="Any Questions"
          onChange={props.handleChange}>
        </input>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SearchArea;
