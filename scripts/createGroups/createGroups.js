import { findScore, findAverageScore } from '../scoring/scoring';
import { randomizeList } from '../randomize/randomize';

const createGroups = (numberOfGroups) => {
    const groupsArray = [];
    let groupIterator = numberOfGroups;
    while (groupIterator--) {
        groupsArray.push([]);
    }
    return groupsArray;
};

const createRandomizedGroups = (teamList, numberOfGroups) => {
    const randomizedFishies = randomizeList(teamList);

    const groupsArray = createGroups(numberOfGroups);

    const groupSize = Math.floor(randomizedFishies.length / numberOfGroups);
    const remainder = randomizedFishies.length % numberOfGroups;
    let bottomBound = 0;
    let topBound = groupSize;

    for (let i = 0; i < numberOfGroups; i++) {
        groupsArray[i] = randomizedFishies.slice(bottomBound, topBound);
        bottomBound += groupSize;
        topBound += groupSize;

        // Add remainder to last group
        if (i === numberOfGroups - 1 && remainder > 0) {
            console.log('there is a remainder');
            groupsArray[i] = groupsArray[i].concat(
                randomizedFishies.slice(-remainder)
            );
        }
    }

    return groupsArray;
};

const createLowScoreGroups = (teamList, numberOfGroups, currentPairScore) => {
    // create groups
    const groupsArray = createGroups(numberOfGroups);

    let groupsTeamList = [...teamList];

    // Find pairs wiht the highest score
    // copy and sort lowest score to highest
    const sortedPairScore = currentPairScore
        .map((a) => ({ ...a }))
        .sort((a, b) => a.score - b.score);

    // create randomized list of team members - use this list to track
    let randomizedTeamList = randomizeList(groupsTeamList);
    //place first two
    groupsArray.forEach((group) => {
        // random first members
        group.push(randomizedTeamList[0]);
        randomizedTeamList.shift();
    });

    // While there are stil unassigned fish
    while (randomizedTeamList.length > 0) {
        // for each group
        for (let i = 0; i < groupsArray.length; i++) {
            let avgScoreArray = [];
            //
            for (let k = 0; k < randomizedTeamList.length; k++) {
                avgScoreArray.push({
                    fish: randomizedTeamList[k],
                    avgScore: findAverageScore(
                        groupsArray[i],
                        randomizedTeamList[k],
                        currentPairScore
                    ),
                });
            }
            //preventing error on last loop through groups once the last team member has been placed
            if (avgScoreArray.length > 0) {
                //sort lowest to highest}
                let sortedAvgScoreArray = avgScoreArray
                    .map((a) => ({ ...a }))
                    .sort((a, b) => a.avgScore - b.avgScore);

                // put first in the group
                groupsArray[i].push(sortedAvgScoreArray[0].fish);

                // remove chosen fish from team list
                randomizedTeamList = randomizedTeamList.filter(
                    (e) => e !== sortedAvgScoreArray[0].fish
                );
            }
        }
    }
    return groupsArray;
};

export default createLowScoreGroups;
