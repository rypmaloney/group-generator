import { createUniqueFishyPairs, scoreGroups, findScore, findAverageScore } from './scoring';
import { testGroups, fishiesTeamList } from '../testGroups';

// create unique fishy pairs
test('creates correct number of pairs', () => {
  const numOfFishies = fishiesTeamList.length;
  const pairsLength = createUniqueFishyPairs(fishiesTeamList).length;
  const uniqueCombos = (numOfFishies * (numOfFishies - 1)) / 2; // n(n-1)/2 for unique pairs
  expect(pairsLength).toBe(uniqueCombos);
});

// pair scoring
test('gives correct score', () => {
  const fishyPairs = createUniqueFishyPairs(fishiesTeamList);
  const score = scoreGroups(testGroups, fishyPairs);
  const pair = score.find(
    (obj) =>
      (obj.pair[0] === 'Shawn' && obj.pair[1] === 'Ryan') ||
      (obj.pair[0] === 'Ryan' && obj.pair[1] === 'Shawn')
  );
  expect(pair.score).toBe(3);
});

// find score
test('gives correct score', () => {
  const fishyPairs = createUniqueFishyPairs(fishiesTeamList);
  const currentPairScore = scoreGroups(testGroups, fishyPairs);
  const score = findScore('Ryan', 'Shawn', currentPairScore);
  expect(score).toBe(3);
});

// find score averages
test('gives correct average score for first individual', () => {
  const fishyPairs = createUniqueFishyPairs(fishiesTeamList);
  let testGroup = ['Ryan'];
  const currentPairScore = scoreGroups(testGroups, fishyPairs);

  const averageScore = findAverageScore(testGroup, 'Shawn', currentPairScore);
  expect(averageScore).toBe(3);
});

test('gives correct average score for two individuals', () => {
  const fishyPairs = createUniqueFishyPairs(fishiesTeamList);
  let testGroup = ['Ryan', 'Ebony'];
  const currentPairScore = scoreGroups(testGroups, fishyPairs);

  const averageScore = findAverageScore(testGroup, 'Shawn', currentPairScore);
  expect(averageScore).toBe(2.5);
});
