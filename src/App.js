import React from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackGround from "./components/BackGround";
import SearchArea from "./components/SearchArea";
import { getAnswers, readAnswer } from "./services/api-helper";
import AnswerPage from "./components/AnswerPage";

class App extends React.Component {
  state = {
    answer: "",
    userQuestion: "",
    errorMessage: "",
    playAnswer: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.props.history.push("/loading");
    const answer = await getAnswers(this.state.userQuestion);
    if (answer.error) {
      this.setState({
        errorMessage: answer.error
      });
      this.props.history.push("/");
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
  playAnswer = async () => {
    let audio = await new Audio(readAnswer(this.state.answer))
    audio.type = 'audio/mp3';
    var playPromise = audio.play();

  if (playPromise !== undefined) {
      playPromise.then(function () {
          console.log('Playing....');
      }).catch(function (error) {
          console.log('Failed to play....' + error);
      });
  }
    this.setState({
      playAnswer:audio
    })

  }
  render() {
    return (
      <div className="App">
        <Header />

        <BackGround />
        <div>
          <Route path="/loading" render={() => <iframe src="https://giphy.com/embed/u2Prjtt7QYD0A" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>} />
          <Route
            path="/answer"
            render={props =>
              <AnswerPage answer={this.state.answer}
                playAnswer={this.state.playAnswer}
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
          <h5 id="error-message">{this.state.errorMessage}</h5>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
