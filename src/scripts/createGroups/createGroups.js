import { findAverageScore } from '../scoring/scoring';
import { randomizeList } from '../randomize/randomize';

const createGroups = (numberOfGroups) => {
  const groupsArray = [];
  let groupIterator = numberOfGroups;
  while (groupIterator--) {
    groupsArray.push([]);
  }
  return groupsArray;
};

/**
 * Generates groups with a low number of repeat compositions.
 * @param  {[object, object]} teamList array of team member objects.
 * @param  {number} numberOfGroups amount of groups to be generated.
 * @param  {[object, object]} currentPairScore array of score objects.
 * @return {[array, array... array]} array of group arrays -- names only.
 */
const createLowScoreGroups = (teamList, numberOfGroups, currentPairScore) => {
  // create groups
  const groupsArray = createGroups(numberOfGroups);

  let groupsTeamList = [...teamList];

  // Find pairs with the highest score
  // copy and sort lowest score to highest
  // const sortedPairScore = currentPairScore.map((a) => ({ ...a })).sort((a, b) => a.score - b.score);

  // create randomized list of team members - use this list to track
  let randomizedTeamList = randomizeList(groupsTeamList);
  // place first two
  groupsArray.forEach((group) => {
    // random first members
    group.push(randomizedTeamList[0].name);
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
          avgScore: findAverageScore(groupsArray[i], randomizedTeamList[k].name, currentPairScore)
        });
      }
      // preventing error on last loop through groups once the last team member has been placed
      if (avgScoreArray.length > 0) {
        //sort lowest to highest}
        let sortedAvgScoreArray = avgScoreArray
          .map((a) => ({ ...a }))
          .sort((a, b) => a.avgScore - b.avgScore);

        // put first in the group
        groupsArray[i].push(sortedAvgScoreArray[0].fish.name);

        // remove chosen fish from team list
        randomizedTeamList = randomizedTeamList.filter((e) => e !== sortedAvgScoreArray[0].fish);
      }
    }
  }
  return groupsArray;
};

export default createLowScoreGroups;
