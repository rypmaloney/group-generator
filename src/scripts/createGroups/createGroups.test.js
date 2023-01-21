import {
  testGroups,
  fishiesTeamList,
  smallGroups,
  fishiesTeamList_attr,
  attributes
} from '../testGroups';

import createLowScoreGroups from './createGroups.js';
import { createUniqueFishyPairs, scoreGroups, scoreGroupAttributes } from '../scoring/scoring';

// create low score groups

// Create the number of groups specified in the function call
test('creates correct number of groups', () => {
  const fishyPairs = createUniqueFishyPairs(fishiesTeamList_attr);

  const score = scoreGroups(smallGroups, fishyPairs);
  //console.log(score);
  const attr_score = scoreGroupAttributes(score, fishiesTeamList_attr, attributes);
  console.log(attr_score);
  const lowScoreGroups5 = createLowScoreGroups(fishiesTeamList_attr, 3, score);
  // const lowScoreGroups3 = createLowScoreGroups(fishiesTeamList, 3, score);
  // const lowScoreGroups9 = createLowScoreGroups(fishiesTeamList, 9, score);
  // const lowScoreGroups4 = createLowScoreGroups(fishiesTeamList, 4, score);

  //expect(lowScoreGroups5.length).toBe(5);
  //expect(lowScoreGroups3.length).toBe(3);
  //expect(lowScoreGroups9.length).toBe(9);
  // expect(lowScoreGroups4.length).toBe(4);
});
/*
// groups are correct size
test('groups are the correct size with 5 groups', () => {
  const fishyPairs = createUniqueFishyPairs(fishiesTeamList);
  const score = scoreGroups(testGroups, fishyPairs);
  const groupNum = 5;

  const lowScoreGroups = createLowScoreGroups(fishiesTeamList, 5, score);
  const expectedGroupSize = Math.floor(fishiesTeamList.length / groupNum);

  for (let i = 0; i < groupNum; i++) {
    expect([expectedGroupSize, expectedGroupSize + 1]).toContain(lowScoreGroups[i].length);
  }
});

// specific people who should not be put together
test('low score groups avoids unfavorable pairings based on score', () => {
  const fishyPairs = createUniqueFishyPairs(fishiesTeamList);
  const scores = scoreGroups(smallGroups, fishyPairs);
  const lowScoreGroups = createLowScoreGroups(fishiesTeamList, 3, scores);

  /* Find the worst pairs to update
    const sortedPairScore = scores
        .map((a) => ({ ...a }))
        .sort((a, b) => b.score - a.score);
    console.log(sortedPairScore);
    ****** */
/*

  // Pairs with a score of 4 or 3
  const unfavorablePairsArray = [
    { one: 'Ryan', two: 'Sarah' },
    { one: 'Anne', two: 'Shawn' },
    { one: 'Shawn', two: 'Sarah' },
    { one: 'Ryan', two: 'Ebony' },
    { one: 'Chelsea', two: 'Jami' },
    { one: 'Christopher', two: 'Caroline' },
    { one: 'Christopher', two: 'Jami' }
  ];

  let unfavorablePairsCount = 0;
  for (let i = 0; i < unfavorablePairsArray.length; i++) {
    const unfavorableOne = unfavorablePairsArray[i].one;
    const unfavorableTwo = unfavorablePairsArray[i].two;

    for (let j = 0; j < lowScoreGroups.length; j++) {
      if (
        lowScoreGroups[j].includes(unfavorableOne) &&
        lowScoreGroups[j].includes(unfavorableTwo)
      ) {
        unfavorablePairsCount += 1;
      }
    }
  }
  expect(unfavorablePairsCount).toBe(0);
});
*/
