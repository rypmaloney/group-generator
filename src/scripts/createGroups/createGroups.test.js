import { testGroups, smallGroups, fishiesTeamList_attr, attributes } from '../testGroups';

import createLowScoreGroups from './createGroups.js';
import { createUniqueFishyPairs, scoreGroups, scoreGroupAttributes } from '../scoring/scoring';

// create low score groups

// Create the number of groups specified in the function call
test('creates correct number of groups', () => {
  const fishyPairs = createUniqueFishyPairs(fishiesTeamList_attr);

  const score = scoreGroups(smallGroups, fishyPairs);

  const attr_score = scoreGroupAttributes(score, fishiesTeamList_attr, attributes);

  const lowScoreGroups5 = createLowScoreGroups(fishiesTeamList_attr, 5, attr_score);

  const lowScoreGroups3 = createLowScoreGroups(fishiesTeamList_attr, 3, attr_score);
  const lowScoreGroups9 = createLowScoreGroups(fishiesTeamList_attr, 9, score);
  const lowScoreGroups4 = createLowScoreGroups(fishiesTeamList_attr, 4, score);

  expect(lowScoreGroups5.length).toBe(5);
  expect(lowScoreGroups3.length).toBe(3);
  expect(lowScoreGroups9.length).toBe(9);
  expect(lowScoreGroups4.length).toBe(4);
});

// groups are correct size
test('groups are the correct size with 5 groups', () => {
  const fishyPairs = createUniqueFishyPairs(fishiesTeamList_attr);
  const score = scoreGroups(testGroups, fishyPairs);
  const groupNum = 5;

  const lowScoreGroups = createLowScoreGroups(fishiesTeamList_attr, 5, score);
  const expectedGroupSize = Math.floor(fishiesTeamList_attr.length / groupNum);

  for (let i = 0; i < groupNum; i++) {
    expect([expectedGroupSize, expectedGroupSize + 1]).toContain(lowScoreGroups[i].length);
  }
});

// specific people who should not be put together
test('low score groups avoids unfavorable pairings based on score and attribute modifier', () => {
  const fishyPairs = createUniqueFishyPairs(fishiesTeamList_attr);
  const scores = scoreGroups(smallGroups, fishyPairs);
  const attr_score = scoreGroupAttributes(scores, fishiesTeamList_attr, attributes);
  const lowScoreGroups = createLowScoreGroups(fishiesTeamList_attr, 3, attr_score);

  //Find the worst pairs to update
  const sortedPairScore = attr_score.map((a) => ({ ...a })).sort((a, b) => b.score - a.score);

  // Pairs with a high score
  const unfavorablePairsArray = sortedPairScore.slice(0, 5).map((obj) => {
    return { one: obj.pair[0], two: obj.pair[1] };
  });

  let unfavorablePairsCount = 0;
  for (let i = 0; i < unfavorablePairsArray.length; i++) {
    const unfavorableOne = unfavorablePairsArray[i].one;
    const unfavorableTwo = unfavorablePairsArray[i].two;

    for (let j = 0; j < lowScoreGroups.length; j++) {
      if (
        lowScoreGroups[j].includes(unfavorableOne) &&
        lowScoreGroups[j].includes(unfavorableTwo)
      ) {
        console.log(`pair: ${unfavorableOne}, ${unfavorableTwo}`);

        unfavorablePairsCount += 1;
      }
    }
  }
  expect(unfavorablePairsCount).toBeLessThan(2);
});
