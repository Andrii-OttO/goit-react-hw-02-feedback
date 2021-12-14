import React from 'react';
import Controls from './controls';
import List from './feedbackList';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodClick = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutralClick = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handleBadClick = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  totalVoutes = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positiveFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return Math.ceil((this.state.good * 100) / total);
  };

  render() {
    return (
      <div>
        <Controls
          handleGoodClick={this.handleGoodClick}
          handleNeutralClick={this.handleNeutralClick}
          handleBadClick={this.handleBadClick}
        />

        {this.totalVoutes() !== 0 ? (
          <List
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            totalVoutes={this.totalVoutes(this.state)}
            positiveFeedback={this.positiveFeedback(this.state)}
          />
        ) : (
          <h3> No Feedback given</h3>
        )}
      </div>
    );
  }
}

// goit-react-hw-02-feedback
export default Feedback;
