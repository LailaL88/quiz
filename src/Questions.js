import React from "react";
import Results from "./Results.js";
import Button from "./Button.js";

let count = 1;
let score = 0;
let answerClicked = false;
let itemSelected = false;

class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      answers: [
        "Get and receive",
        "Get and post",
        "Post and receive",
        "Post and take",
      ],
      question: "What are the two methods of forms transfer?",
      resultsClicked: false,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleclick = this.handleclick.bind(this);
    this.toggleResultsVisibility = this.toggleResultsVisibility.bind(this);
    this.answers = [];
  }

  nextQuestion() {
    count++;
    this.answers.map(function (answer) {
      return (answer.className = "answer");
    });

    itemSelected = false;

    if (count == 2) {
      this.setState({
        question: "What should be the very last thing in an HTML document?",
        answers: ["The heading", "Title", "Body", "Doc type"],
      });
    }
    if (count == 3) {
      this.setState({
        question: "Which of the following is not an HTML tag?",
        answers: ["Doctype", "P", "Table", "Style"],
      });
    }

    if (count == 4) {
      this.setState({
        question: "How can you clear a floated element?",
        answers: [
          "Clear:both",
          "Press the delete key",
          "Del tag",
          "Strike tag",
        ],
      });
    }

    if (count == 5) {
      this.setState({
        question:
          "Which of the following is described as a collection of images put in a single image?",
        answers: ["Float", "Align", "Sprite", "Image"],
      });
    }

    if (count == 6) {
      this.setState({
        question:
          "Which of the following is an instruction to the web browser about what version of the markup language the page is written in?",
        answers: ["Markup", "Meta tag", "DSS", "Doctype"],
      });
    }

    if (count == 7) {
      this.setState({
        question: "Select the correct HTML tag to make a text bold",
        answers: ["b", "bold", "bb", "bo"],
      });
    }

    if (count == 8) {
      this.setState({
        question:
          "In CSS, Select the appropriate option to style an element so that the next element would appear right next to it not underneath it if both elements widths were collectively smaller than the container element?",
        answers: [
          "display:left",
          "display:inline",
          "display:horizontal",
          "None",
        ],
      });
    }

    if (count == 9) {
      this.setState({
        question:
          "What is the function of Array object that runs through each element of the array?",
        answers: ["every()", "concat()", "filter()", "forEach()"],
      });
    }

    if (count == 10) {
      this.setState({
        question:
          "Which of the following function of String object would compare a regular expression with a string?",
        answers: ["concat()", "match()", "search()", "replace()"],
      });
    }
  }

  increaseScore(e, answer, firstBoolean, secondBoolean) {
    if (e.innerText == answer && answerClicked == firstBoolean) {
      score++;
      answerClicked = secondBoolean;
    }

    if (itemSelected == false) {
      e.className = "color";
      itemSelected = true;
    }
  }

  handleclick(e) {
    this.increaseScore(e.target, "Get and post", false, true);
    this.increaseScore(e.target, "Body", true, false);
    this.increaseScore(e.target, "Style", false, true);
    this.increaseScore(e.target, "Clear:both", true, false);
    this.increaseScore(e.target, "Sprite", false, true);
    this.increaseScore(e.target, "Doctype", true, false);
    this.increaseScore(e.target, "b", false, true);
    this.increaseScore(e.target, "display:inline", true, false);
    this.increaseScore(e.target, "forEach()", false, true);
    this.increaseScore(e.target, "match()", true, false);
  }

  toggleResultsVisibility() {
    if (this.state.resultsClicked == false) {
      this.setState({ resultsClicked: true });
    } else {
      this.setState({ resultsClicked: false });
    }
  }

  render() {
    let answers = this.state.answers.map(function (answer, i) {
      return (
        <div
          key={i}
          onClick={this.handleclick}
          className="answer"
          ref={(answers) => (this.answers[i] = answers)}
        >
          {answer}
        </div>
      );
    }, this);

   /* const myButton = () => {
      if (count >= 10) {
        return (
          <button onClick={this.toggleResultsVisibility}>See Results</button>
        );
      } else {
        return <button onClick={this.nextQuestion}>Next question</button>;
      }
    };*/

    return (
      <div>
        <p>{this.state.question}</p>
        {answers}
        <Button toggle = {this.toggleResultsVisibility} next = {this.nextQuestion} count = {count}/>
        <Results results = {this.state.resultsClicked} score = {score}/>
      </div>
    );
  }
}

export default Questions;