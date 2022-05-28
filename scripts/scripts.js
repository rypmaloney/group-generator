/* eslint-disable no-plusplus */
console.log('working');

const createLowScoreGroupsV1 = (teamList, numberOfGroups, currentPairScore) => {
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
        let one = sortedPairScore[0].pair[0];
        let two = sortedPairScore[0].pair[1];

        let includesOne = createdGroupsArray[groupNum].includes(one);
        let includesTwo = createdGroupsArray[groupNum].includes(two);

        // Only go through logic of adding to groups if the size is less than the expected group size
        if (
            createdGroupsArray[groupNum].length <
                Math.floor(teamList.length / numberOfGroups) ||
            (groupsTeamList.length <= teamList.length % numberOfGroups &&
                groupsTeamList.length > 0)
        ) {
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
        }

        // remove from score list
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
