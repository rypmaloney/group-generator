import { randomizeList } from './randomize';
import { fishiesTeamList } from '../testGroups';

test('does randomize list to return list create a list that is not the same', () => {
  const randomList = randomizeList(fishiesTeamList);
  expect(fishiesTeamList).not.toBe(randomList);
});
