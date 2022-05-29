import './index.scss';
import { useEffect, useState } from 'react';
import PrevGroups from './PreviousGroups';
import { smallGroups } from '../../scripts/testGroups';
import Header from '../Header';
import Window from './Window';
import Controls from './Controls';
import { createUniqueFishyPairs } from '../../scripts/scoring/scoring';
import createLowScoreGroups from '../../scripts/createGroups/createGroups';
import { scoreGroups } from '../../scripts/scoring/scoring';

const GroupMaker = (props) => {
  const { team } = props;
  const prevGroups = useState(smallGroups);
  const [currentGroups, setCurrentGroups] = useState([[]]);
  let [groupCount, setGroupCount] = useState(3);
  const [uniquePairs, setUniquePairs] = useState([]);

  useEffect(() => {
    setUniquePairs();
  }, []);

  const createGroups = () => {
    const pairs = createUniqueFishyPairs(team);
    const scores = scoreGroups(smallGroups, pairs);
    const lowScoreGroups = createLowScoreGroups(team, groupCount, scores);
    console.log(lowScoreGroups);
    setCurrentGroups(lowScoreGroups);
    console.log(currentGroups);
  };

  return (
    <div className="group-maker">
      <h2>Group Maker</h2>
      <Header />
      <Window currentGroups={currentGroups} />
      <Controls
        groupCount={groupCount}
        setGroupCount={setGroupCount}
        createGroups={createGroups}
        team={team}
        currentGroups={currentGroups}
      />
      <PrevGroups prevGroups={prevGroups} />
    </div>
  );
};

export default GroupMaker;
