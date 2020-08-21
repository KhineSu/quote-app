import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./App.css";

const QUOTES = [
  {
    text:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },
  {
    text: "You can observe a lot just by watching.",
    author: "Yogi Berra",
  },
  {
    text: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln",
  },
  {
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer",
  },
  {
    text: "Be the chief but never the lord.",
    author: "Lao Tzu",
  },
  {
    text: "Nothing happens unless first we dream.",
    author: "Carl Sandburg",
  },
  {
    text: "Well begun is half done.",
    author: "Aristotle",
  },
  {
    text: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra",
  },
  {
    text: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster",
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha",
  },
  {
    text: "What you give is what you get.",
    author: "Byron Pulsifer",
  },
  {
    text: "We can only learn to love by loving.",
    author: "Iris Murdoch",
  },
  {
    text: "Life is change. Growth is optional. Choose wisely.",
    author: "Karen Clark",
  },
  {
    text: "You'll see it when you believe it.",
    author: "Wayne Dyer",
  },
  {
    text: "Today is the tomorrow we worried about yesterday.",
    author: null,
  },
  {
    text: "It's easier to see the mistakes on someone else's paper.",
    author: null,
  },
  {
    text: "Every man dies. Not every man really lives.",
    author: null,
  },
  {
    text: "To lead people walk behind them.",
    author: "Lao Tzu",
  },
  {
    text: "Having nothing, nothing can he lose.",
    author: "William Shakespeare",
  },
  {
    text: "Trouble is only opportunity in work clothes.",
    author: "Henry J. Kaiser",
  },
  {
    text: "A rolling stone gathers no moss.",
    author: "Publilius Syrus",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      authorName: "",
    };
    this.loadQuote = this.loadQuote.bind(this);
  }
  componentDidMount() {
    this.loadQuote();
  }
  loadQuote() {
    var randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    console.log(randomQuote);
    this.setState({
      quote: randomQuote.text,
      authorName: randomQuote.author,
    });
  }
  render() {
    return (
      <div className="container col-md-6 align-middle">
        <div className="card">
          <div id="quote-box" className="card-body quote-body">
            <p id="text">{this.state.quote}</p>
            <p id="author">{this.state.authorName}</p>
            <div className="row">
              <a
                id="tweet-quote"
                className="col-xs-1 "
                href="twitter.com/intent/tweet"
              >
                <FontAwesomeIcon icon={faHome} />
              </a>
              <button
                className="btn btn-primary col-xs-2 align-right"
                id="new-quote"
                onClick={this.loadQuote}
              >
                New quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
