import PropTypes from 'prop-types';
import React from 'react';

const controls = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {/* {Object.keys(options).map(option => { */}
      {options.map(option => {
        return (
          <button
            key={option}
            value={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

controls.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default controls;
