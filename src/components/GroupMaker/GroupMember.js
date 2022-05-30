import { useEffect, useState } from 'react';
import HoverBox from './HoverBox';
import { findScore, createUniqueFishyPairs, scoreGroups } from '../../scripts/scoring/scoring';

import uniqid from 'uniqid';

const GroupMember = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const { member, team, group, prevGroups } = props;
  const [groupPairScores, setGroupPairScores] = useState(false);

  const findPairScores = () => {
    let currentScore = scoreGroups(prevGroups, createUniqueFishyPairs(team));
    let pairScores = [];

    for (let i = 0; i < group.length; i++) {
      if (member !== group[i]) {
        let score = findScore(member, group[i], currentScore);
        pairScores.push({ pairee: group[i], score: score });
      }
    }
    setGroupPairScores(pairScores);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
    findPairScores();
  };

  return (
    <>
      <div
        className="team-member"
        onMouseEnter={handleMouseOver}
        onMouseLeave={() => setIsHovering(false)}>
        {isHovering && (
          <HoverBox member={member} groupPairScores={groupPairScores} key={uniqid()} />
        )}
        <p>{member}</p>
      </div>
    </>
  );
};

export default GroupMember;
