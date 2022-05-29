import './index.scss';
import { useState } from 'react';

const Controls = (props) => {
  let { groupCount, setGroupCount, createGroups, team, currentGroups } = props;

  const incrementCount = () => {
    if (groupCount < team.length / 2) {
      let count = groupCount + 1;
      setGroupCount(count);
    } else {
      // set message - team members will be alone if you do more than groupCount/2 groups
    }
  };
  const decrementCount = () => {
    if (groupCount > 1) {
      let count = groupCount - 1;
      setGroupCount(count);
    } else {
      //set message - you cant have zero groups
    }
  };

  return (
    <div className="controls">
      <div className="counter">
        <p>Number of Groups:</p>
        <div>{groupCount}</div>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
      <button onClick={createGroups}>
        {currentGroups[0].length > 0 ? 'Run Again' : 'Generate Groups'}
      </button>
      {currentGroups[0].length > 0 ? <button>Use this group</button> : <></>}
    </div>
  );
};

export default Controls;
