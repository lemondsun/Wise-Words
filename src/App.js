import React from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackGround from "./components/BackGround";
import SearchArea from "./components/SearchArea";
import { getAnswers } from "./services/api-helper";
import AnswerPage from "./components/AnswerPage";



class App extends React.Component {
 
  state = {
    answer: "",
    userQuestion: "",
    errorMessage: "",
  };
  
  handleSubmit = async event => {
    event.preventDefault();
    this.props.history.push("/loading");
    const answer = await getAnswers(this.state.userQuestion);
    if (answer.error) {
      this.setState({
        errorMessage: answer.error
      });
      this.props.history.push("/answer");
    } else {
      console.log(this.state.userQuestion);
      this.setState({
        answer,
        errorMessage: ""
      });
      console.log(answer);
      this.props.history.push("/answer");
    }
  };

  handleChange = event => {
    let userQuestion = event.target.value;

    this.setState({
      userQuestion
    });
  };
  
  
 
 
   
  
  
  render() {
    return (
      <div className="App">
        <Header />
        <div>
        
          <BackGround />
          <Route path="/loading" render={() => "Thinking..." } />
          <Route
            path="/answer"
            render={props =>
              <AnswerPage answer={this.state.answer}
                errorMessage={this.state.errorMessage}
              />}
          />
          <Route
            exact
            path="/"
            render={props => (
              
              <SearchArea
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
                
              
            )}
          />
          
            
          
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);