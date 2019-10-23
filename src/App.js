import React from "react";
import "./App.css";
import { withRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackGround from "./components/BackGround";
import { getAnswers } from "./services/api-helper";




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
        <BackGround
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          userQuestion={this.state.userQuestion}
          answer={this.state.answer}
          errorMessage={this.state.errorMessage}
        />
        <script type="text/javascript" src="js/materialize.min.js"></script>
        
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);