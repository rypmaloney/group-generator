import './index.scss';
import { useState } from 'react';
import PrevGroups from './PreviousGroups';
import { smallGroups } from '../../scripts/testGroups';

const GroupMaker = () => {
  const prevGroups = useState(smallGroups);

  return (
    <div className="group-maker">
      <h2>Group Maker</h2>
      <p>groups</p>
      <PrevGroups prevGroups={prevGroups} />
    </div>
  );
};

export default GroupMaker;