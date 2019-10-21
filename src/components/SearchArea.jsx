import React from "react";

const SearchArea = props => {
  return (
    <div id="question-section">
      <form onSubmit={props.handleSubmit}>
        <h1>ASK HERE</h1>
        <input
          type="text"
          placeholder="What would you like to know?"
          onChange={props.handleChange}
        ></input>
        <input type="submit" value="Ask" />
      </form>
    </div>
  );
};

export default SearchArea;
