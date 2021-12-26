import React from 'react';
import Controls from './controls';
import List from './feedbackList';

class Feedback extends React.Component {
  state = { good: 0, neutral: 0, bad: 0 };

  // handleGoodClick = () => {
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  // };
  optionsArr() {
    const options = Object.keys(this.state);
    return options;
  }

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
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
        <h2>Please leave feedback</h2>

        <Controls
          options={this.optionsArr()}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <h3>Statistics</h3>
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
