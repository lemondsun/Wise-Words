import React from 'react';
import { Route } from 'react-router-dom'
import AnswerPage from './AnswerPage';
import SearchArea from './SearchArea';

const BackGround = (props) => {
  return (
    <div id="background">
      <div id="text-display">
        <Route path="/loading" render={() => 
          "thinking..."
        } />
        <Route
          path="/answer"
          render={() =>
            <AnswerPage answer={props.answer}
          
              errorMessage={props.errorMessage}
            />}
        />
        <Route 
          exact 
          path="/"
          render={() => (
            <SearchArea
              handleChange={props.handleChange}
              handleSubmit={props.handleSubmit}
            />
          )
          }
        />
        
      </div>
    </div>
  )
}
export default BackGround;