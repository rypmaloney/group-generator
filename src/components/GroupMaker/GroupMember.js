import { useState } from 'react';
import HoverBox from './HoverBox';
import {
  findScore,
  createUniqueFishyPairs,
  scoreGroups,
  scoreGroupAttributes
} from '../../scripts/scoring/scoring';

import uniqid from 'uniqid';

const GroupMember = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const { member, team, group, prevGroups, allowHoverbox, attributes } = props;
  const [groupPairScores, setGroupPairScores] = useState(false);
  const [attribubtePairScores, setAttribubtePairScores] = useState(false);

  const findPairScores = () => {
    let currentScore = scoreGroups(prevGroups, createUniqueFishyPairs(team));
    let attributeScore = scoreGroupAttributes(currentScore, team, attributes);
    let pairScores = [];
    let attributePairs = [];

    for (let i = 0; i < group.length; i++) {
      if (member !== group[i]) {
        let score = findScore(member, group[i], currentScore);
        let attScore = findScore(member, group[i], attributeScore);
        pairScores.push({ pairee: group[i], score: score });
        attributePairs.push({ pairee: group[i], score: attScore });
      }
    }
    setGroupPairScores(pairScores);
    setAttribubtePairScores(attributePairs);
  };

  const handleMouseOver = () => {
    if (allowHoverbox) {
      setIsHovering(true);
      findPairScores();
    }
  };

  return (
    <>
      <div
        className="team-member"
        onMouseEnter={handleMouseOver}
        onMouseLeave={() => setIsHovering(false)}>
        {isHovering && allowHoverbox && (
          <HoverBox
            member={member}
            groupPairScores={groupPairScores}
            attribubtePairScores={attribubtePairScores}
            key={uniqid()}
          />
        )}
        <p>{member}</p>
      </div>
    </>
  );
};

export default GroupMember;
