import { findScore, findAverageScore } from '../scoring/scoring';

const createLowScoreGroups = (teamList, numberOfGroups, currentPairScore) => {
    // create groups
    const createdGroupsArray = [];
    let groupsTeamList = [...teamList];

    let groupIterator = numberOfGroups;
    while (groupIterator--) {
        createdGroupsArray.push([]);
    }
    // Find pairs wiht the highest score
    // copy and sort lowest score to highest
    const sortedPairScore = currentPairScore
        .map((a) => ({ ...a }))
        .sort((a, b) => a.score - b.score);

    // split up and place into groups
    // For each person not in the group, find the average pair score with the entire group
    // put the person with the lowest average group pair score in the group
    // repeat
    // need:
    // function that takes individual and individual and score and returns the score - goes in-> findScore()
    // function that takes array of people currently in group, an individual that could be added to the group, and current score => findAverageScore()
    // returns the average score
};

export default createLowScoreGroups;
