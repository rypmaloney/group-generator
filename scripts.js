/* eslint-disable no-plusplus */
console.log('working');

const createUniqueFishyPairs = (fishies) => {
    // returns object of unique pairings from array with a score key
    const result = fishies.flatMap((v, i) =>
        fishies.slice(i + 1).map((w) => ({ one: v, two: w, score: 0 }))
    );
    return result;
};

const randomizeList = (list) => {
    const randomList = list
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    return randomList;
};

const createRandomizedGroups = (teamList, numberOfGroups) => {
    const randomizedFishies = randomizeList(teamList);

    const createdGroupsArray = [];
    let groupIterator = numberOfGroups;
    while (groupIterator--) {
        createdGroupsArray.push([]);
    }

    const groupSize = Math.floor(randomizedFishies.length / numberOfGroups);
    const remainder = randomizedFishies.length % numberOfGroups;
    let bottomBound = 0;
    let topBound = groupSize;

    for (let i = 0; i < numberOfGroups; i++) {
        createdGroupsArray[i] = randomizedFishies.slice(bottomBound, topBound);
        bottomBound += groupSize;
        topBound += groupSize;

        // Add remainder to last group
        if (i === numberOfGroups - 1 && remainder > 0) {
            console.log('there is a remainder');
            createdGroupsArray[i] = createdGroupsArray[i].concat(
                randomizedFishies.slice(-remainder)
            );
        }
    }

    return createdGroupsArray;
};

const createLowScoreGroups = (teamList, numberOfGroups, currentPairScore) => {
    // Takes list of members, number of groups, and the current pairing score and returns groups with the fewest repeat pairs
    const createdGroupsArray = [];
    let groupsTeamList = [...teamList];

    let groupIterator = numberOfGroups;
    while (groupIterator--) {
        createdGroupsArray.push([]);
    }

    // copy and sort lowest score to highest
    const sortedPairScore = currentPairScore
        .map((a) => ({ ...a }))
        .sort((a, b) => a.score - b.score);

    let groupNum = 0;
    while (groupsTeamList) {
        // check if either exist in current group
        // add to current group
        let one = sortedPairScore[0].one;
        let two = sortedPairScore[0].two;

        console.log(groupsTeamList);
        console.log(createdGroupsArray);

        let includesOne = createdGroupsArray[groupNum].includes(one);
        let includesTwo = createdGroupsArray[groupNum].includes(two);
        console.log(includesOne);

        if (!includesOne && groupsTeamList.includes(one)) {
            // add to current group
            createdGroupsArray[groupNum].push(sortedPairScore[0].one);
            // remove from team list
            groupsTeamList = groupsTeamList.filter(
                (e) => e !== sortedPairScore[0].one
            );
        }
        if (!includesTwo && groupsTeamList.includes(two)) {
            // add to current group
            createdGroupsArray[groupNum].push(sortedPairScore[0].two);
            // remove from team list
            groupsTeamList = groupsTeamList.filter(
                (e) => e !== sortedPairScore[0].two
            );
            // remove from score list
        }

        if (groupsTeamList.length < 1) {
            groupsTeamList = false;
        }

        sortedPairScore.shift();

        // change current group
        if (groupNum < numberOfGroups - 1) {
            groupNum += 1;
        } else {
            groupNum = 0;
        }
    }

    return createdGroupsArray;
};

const scoreGroups = (groups, prevPairScore) => {
    // create a deep copy of the array
    const updatedScore = prevPairScore.map((a) => ({ ...a }));
    for (let i = 0; i < groups.length; i++) {
        for (let j = 0; j < updatedScore.length; j++) {
            if (
                groups[i].includes(updatedScore[j].one) &&
                groups[i].includes(updatedScore[j].two)
            ) {
                updatedScore[j].score += 1;
            }
        }
    }
    return updatedScore;
};

/* TESTING */

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

const fishyPairs = createUniqueFishyPairs(fishiesTeamList);
const sampleRandom = createRandomizedGroups(fishiesTeamList, 3);

const firstScore = scoreGroups(
    testGroups,
    createUniqueFishyPairs(fishiesTeamList)
);

const secondScore = scoreGroups(sampleRandom, firstScore);
let thirdScore = secondScore
    .map((a) => ({ ...a }))
    .sort((a, b) => a.score - b.score);
console.log(firstScore);
console.log(sampleRandom);
console.log(secondScore);

function sum(a, b) {
    return a + b;
}

export { sum, randomizeList };
