import { sum, randomizeList, createLowScoreGroups } from './scripts';

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
const testGroups = [
    ['Zach', 'Ebony', 'Jami', 'Chelsea', 'Christopher'],
    ['Shawn', 'Maggie', 'Ryan', 'Sam', 'Griffin'],
    ['Alliyah', 'Sarah', 'Faith', 'Caroline', 'Claire', 'Anne'],
    ['Faith', 'Maggie', 'Jami', 'Chelsea', 'Christopher'],
    ['Shawn', 'Ebony', 'Ryan', 'Sam', 'Claire'],
    ['Alliyah', 'Sarah', 'Zach', 'Caroline', 'Griffin', 'Anne'],
    ['Faith', 'Maggie', 'Jami', 'Chelsea', 'Christopher'],
    ['Shawn', 'Ebony', 'Ryan', 'Sam', 'Claire'],
    ['Alliyah', 'Sarah', 'Zach', 'Caroline', 'Griffin', 'Anne'],
];

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('does randomize list to return list create a list that is not the same', () => {
    let randomList = randomizeList(fishiesTeamList);
    expect(fishiesTeamList).not.toBe(randomList);
});

/*
//create unique fishy pairs 
test('creates correct number of pairs', () => {

    expect(randomizeLength).toBe(listLength);
});


// pair scoring
test('gives correct score', () => {

    expect(randomizeLength).toBe(listLength);
});

// create low score groups
// Create the number of groups specified in the function call
test('creates correct number of groups', () => {
    let testPairScore = 
    let groups = createLowScoreGroups(fishiesTeamList, 3,);
    let listLength = fishiesTeamList.length;
    expect(randomizeLength).toBe(listLength);
});
// groups are of equal size (thereabouts)

// specific people who should not be put together
*/
