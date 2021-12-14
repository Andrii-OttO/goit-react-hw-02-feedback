import React from 'react';
const controls = ({ handleGoodClick, handleNeutralClick, handleBadClick }) => (
  <div>
    <h2>Please leave feedback</h2>
    <button type="button" onClick={handleGoodClick}>
      Good
    </button>
    <button type="button" onClick={handleNeutralClick}>
      Neutral
    </button>
    <button type="button" onClick={handleBadClick}>
      Bad
    </button>
    <h3>Statistics</h3>

    {/* <ul>
      <li>Good:{this.state.good}</li>   
      <li>Neutral:{this.state.neutral}</li>
      <li>Bad:{this.state.bad}</li>
      <li>Total:{}</li>
      <li>Positive Feedback:{}%</li>
      </ul> */}
  </div>
);

export default controls;
