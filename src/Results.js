import React from "react";

class Results extends React.Component {
    render(){
        const results = () => {
            if (this.props.score >= 7 && this.props.results == true) {
              return (
                <div className="results">
                  <h6>You scored {this.props.score} points out of 10</h6>
                  <p>Awsome result!</p>
                </div>
              );
            } else if (this.props.score < 7 && this.props.score > 4 && this.props.results == true) {
              return (
                <div className="results">
                  <h6>You scored {this.props.score} points out of 10</h6>
                  <p>Good result!</p>
                </div>
              );
            } else if (this.props.results == true) {
              return (
                <div className="results">
                  <h6>You scored {this.props.score} points out of 10</h6>
                  <p>Don't give up. Keep learning and try again later!</p>
                </div>
              );
            }}
        return(
            <>
            {results()}
            </>
        )
    }
}

export default Results