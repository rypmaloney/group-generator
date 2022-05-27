import { sum, randomizeList } from './scripts';

const fishiesTeamList = [
    'Anne',
    'Alliyah',
    'Faith',
    'Griffin',
    'Shawn',
    'Zach',
    'Ryan',
    'Ebony',
    'Claire',
    'Maggie',
    'Sarah',
    'Chelsea',
    'Sam',
    'Christopher',
    'Caroline',
    'Jami',
];

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('does randomize list to return list create a list', () => {
    let randomizeLength = randomizeList(fishiesTeamList).length;
    let listLength = fishiesTeamList.length;
    expect(randomizeLength).toBe(listLength);
});

// create low score groups
// Create the number of groups specified in the function call

// groups are of equal size (thereabouts)

// specific people who should not be put together
