import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackGround from "./components/BackGround";
import SearchArea from "./components/SearchArea";
import { getAnswers } from "./services/api-helper";

class App extends React.Component {
  state = {
    answer: "",
    question: ""
  };

  componentDidMount = async () => {
    const answer = await getAnswers();
    this.setState({
      answer
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchArea answer={this.state.answer} />
        <BackGround />
        <Footer />
      </div>
    );
  }
}

export default App;
