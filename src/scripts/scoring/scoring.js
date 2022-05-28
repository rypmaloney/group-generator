const createUniqueFishyPairs = (fishies) => {
  // returns object of unique pairings from array with a score key
  const result = fishies.flatMap((v, i) =>
    fishies.slice(i + 1).map((w) => ({ pair: [v, w], score: 0 }))
  );
  return result;
};

const scoreGroups = (groups, prevPairScore) => {
  // create a deep copy of the array
  const updatedScore = prevPairScore.map((a) => ({ ...a }));
  for (let i = 0; i < groups.length; i++) {
    for (let j = 0; j < updatedScore.length; j++) {
      if (
        groups[i].includes(updatedScore[j].pair[0]) &&
        groups[i].includes(updatedScore[j].pair[1])
      ) {
        updatedScore[j].score += 1;
      }
    }
  }
  return updatedScore;
};

const findScore = (fishyOne, fishyTwo, currentPairScore) => {
  const pair = currentPairScore.find(
    (obj) =>
      (obj.pair[0] === fishyOne && obj.pair[1] === fishyTwo) ||
      (obj.pair[0] === fishyTwo && obj.pair[1] === fishyOne)
  );
  return pair.score;
};

// Finds the average score for one specific individual for every member currently in a given group
const findAverageScore = (group, individual, currentPairScore) => {
  let allScores = 0;
  for (let i = 0; i < group.length; i++) {
    allScores += findScore(group[i], individual, currentPairScore);
  }

  return allScores / group.length;
};

export { createUniqueFishyPairs, scoreGroups, findScore, findAverageScore };
