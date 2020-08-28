import React from "react";

class Button extends React.Component {
  constructor() {
    super();
    this.toggleResults = this.toggleResults.bind(this);
    this.nextQ = this.nextQ.bind(this);
  }

  toggleResults() {
    this.props.toggle();
  }

  nextQ() {
    this.props.next();
  }
  
  render() {
    const myButton = () => {
      if (this.props.count >= 10) {
        return <button onClick={this.toggleResults}>See Results</button>;
      } else {
        return <button onClick={this.nextQ}>Next question</button>;
      }
    };
    return <>{myButton()}</>;
  }
}

export default Button;
