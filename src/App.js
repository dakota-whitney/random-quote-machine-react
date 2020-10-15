import React from "react";
import "./App.css";
import { CSSTransitionGroup } from 'react-transition-group';

const quotes = [
  "\"We never defeat our demons, we simply learn to live above them.\"",
  "\"I love you 3,000.\"",
  "\"The price of freedom is high, and it's a price I'm willing to pay.\"",
  "\"I'm always angry.\"",
  "\"You're wrong, and you think you're right. That makes you dangerous.\"",
  "\"Excelsior!\"",
  "\"The hardest choices require the strongest wills.\"",
  "\"Dormammu, I've come to Bargain.\"",
  "\"Oh...yeah...\"",
  "\"I can't control their fear, only my own.\""
];
const authors = [
"- The Ancient One",
"- Tony Stark",
"- Steve Rogers",
"- Bruce Banner",
"- Peter Parker",
"- Stan Lee",
"- Thanos",
"- Steven Strange",
"- Rocket Raccoon",
"- Wanda Maximoff"
];

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quotes: "",
      authors: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    const fccScript = document.createElement("script");
    fccScript.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    fccScript.async = true;
    document.body.appendChild(fccScript);

    const randomIndex = Math.floor(Math.random() * 10)
    const rndQuote = quotes[randomIndex]
    const rndAuthor = authors[randomIndex]
    this.setState({
      quotes: rndQuote,
      authors: rndAuthor
    });
  }
  handleClick(){
    const randomIndex = Math.floor(Math.random() * 10)
    const rndQuote = quotes[randomIndex]
    const rndAuthor = authors[randomIndex]
    this.setState({
      quotes: rndQuote,
      authors: rndAuthor
    })};
  render() {
    const quote = <h1 key={this.state.quotes}>{this.state.quotes}</h1>;
    const author = <h3 key={this.state.authors}>{this.state.authors}</h3>;
  return (
      <div id="quote-box">
        <div id="text">
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1}>
        {quote}
        </CSSTransitionGroup>
          <div id="author">
          <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1}>
          {author}
          </CSSTransitionGroup>
          </div>
         </div>
      <div id="button-area">
      <a
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
        className="btn btn-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet This
      </a>
      <button id="new-quote" className="btn btn-primary" onClick={this.handleClick}>
        New Quote
      </button>
      </div>
      </div>
  );
  };
};

export default App;