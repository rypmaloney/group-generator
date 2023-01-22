const createUniqueFishyPairs = (fishies) => {
  // returns object of unique pairings from array with a score key
  // Just names, no attributes
  const result = fishies.flatMap((v, i) =>
    fishies.slice(i + 1).map((w) => ({ pair: [v.name, w.name], score: 0 }))
  );
  return result;
};

/**
 * Takes array of previous groups and array of score objects, and returns updated score object.
 * @param  {[array]} groups array of previous group arrays. List of names.
 * @param  {[object]} prevPairScore array of score objects. ex [{ pair: [ 'Anne', 'Alliyah' ], score: 0 },]
 * @return {[object]} array of score objects with updated scores based on previous groups.
 */
const scoreGroups = (groups, prevPairScore) => {
  // create a deep copy of the array
  const updatedScore = prevPairScore.map((a) => ({ ...a }));

  for (let i = 0; i < groups.length; i++) {
    for (let j = 0; j < updatedScore.length; j++) {
      // Extract names into list
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

/**
 * Applies attribute weight to pair scores.
 * @param  {[object, object,]} prevPairScore array of score objects.
 * @param  {[object, object,]}  attributes array of attribute data and selected weight
 * @param  {[object, object]} teamList array of team member objects with attribute data.
 * @return {[object, object]} array of score objects with updated scores based on attribute weight.
 */
const scoreGroupAttributes = (prevPairScore, teamList, attributes) => {
  const updatedScore = prevPairScore.map((a) => ({ ...a }));
  for (let i = 0; i < updatedScore.length; i++) {
    let scoreAddition = 0;
    for (let a = 0; a < attributes.length; a++) {
      let iAttribute = findMemberAttributes(updatedScore[i].pair[0], attributes[a].title, teamList);
      let jAttribute = findMemberAttributes(updatedScore[i].pair[1], attributes[a].title, teamList);

      if (iAttribute === jAttribute) {
        scoreAddition === 0 ? (scoreAddition = 1) : null;
        // members' attribute values for this attribute match
        scoreAddition *= attributes[a].weight;
      }
    }
    updatedScore[i].score += scoreAddition;
  }
  return updatedScore;
};

/**
 * Takes two members and  a score list, finds that pairs score.
 * @param  {string} member team member name.
 * @param  {string} attribute title of attribute
 * @param  {[object, object]} teamList array of team member objects with attribute data.
 * @return {number} score number for given pair
 */
const findMemberAttributes = (member, attribute, teamList) => {
  const teamListMember = teamList.find((obj) => obj.name == member);
  const attributeValue = teamListMember.attributes[attribute];
  return attributeValue;
};

/**
 * Takes two members and  a score list, finds that pairs score.
 * @param  {string} fishyOne team member name.
 * @param  {string} fishyTwo team member name.
 * @param  {[object]} currentPairScore array of score objects.
 * @return {number} score number for given pair
 */
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

export { createUniqueFishyPairs, scoreGroups, findScore, findAverageScore, scoreGroupAttributes };
