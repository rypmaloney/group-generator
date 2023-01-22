import { createUniqueFishyPairs, scoreGroups, findScore, findAverageScore } from './scoring';
import { testGroups, fishiesTeamList_attr, smallGroups } from '../testGroups';

// create unique fishy pairs
test('creates correct number of pairs', () => {
  const numOfFishies = fishiesTeamList_attr.length;
  const pairsLength = createUniqueFishyPairs(fishiesTeamList_attr).length;
  const uniqueCombos = (numOfFishies * (numOfFishies - 1)) / 2; // n(n-1)/2 for unique pairs
  expect(pairsLength).toBe(uniqueCombos);
});
