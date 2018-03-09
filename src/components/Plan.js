import React from 'react';
import Options from './Options';

const plans = ['monthly', 'annual'];

function Plan(props) {
  return (
    <div>
      <h1>Plans</h1>
      <Options
        options={plans}
        onClick={props.onChange}
      />
    </div>
  );
}

Plan.defaultProps = {
  onChange: () => {},
}

export default Plan;
