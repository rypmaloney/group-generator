import { randomizeList, createRandomizedGroups } from './randomize';
import { testGroups, fishiesTeamList } from '../testGroups';

test('does randomize list to return list create a list that is not the same', () => {
    const randomList = randomizeList(fishiesTeamList);
    expect(fishiesTeamList).not.toBe(randomList);
});
