/* eslint-disable no-plusplus */
console.log("working");

const createUniqueFishyPairs = (fishies) => {
  // returns object of unique pairings from array with a score key
  const result = fishies.flatMap((v, i) =>
    fishies.slice(i + 1).map((w) => ({ one: v, two: w, score: 0 }))
  );
  return result;
};

const createRandomizedGroups = (arr, numberOfGroups) => {
  const randomizedFishies = arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

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
      console.log("there is a remainder");
      createdGroupsArray[i] = createdGroupsArray[i].concat(
        randomizedFishies.slice(-remainder)
      );
    }
  }

  return createdGroupsArray;
};

const scorePairs = (groups, prevPairScore) => {
  //create a deep copy of the array
  const updatedScore = prevPairScore.map(a => {return {...a}});
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
  "Anne",
  "Alliyah",
  "Faith",
  "Griffin",
  "Shawn",
  "Zach",
  "Ryan",
  "Ebony",
  "Claire",
  "Maggie",
  "Sarah",
  "Chelsea",
  "Sam",
  "Christopher",
  "Caroline",
  "Jami",
];

const testGroups = [
  ["Zach", "Ebony", "Jami", "Chelsea", "Christopher"],
  ["Shawn", "Maggie", "Ryan", "Sam", "Griffin"],
  ["Alliyah", "Sarah", "Faith", "Caroline", "Claire", "Anne"],
  ["Faith", "Maggie", "Jami", "Chelsea", "Christopher"],
  ["Shawn", "Ebony", "Ryan", "Sam", "Claire"],
  ["Alliyah", "Sarah", "Zach", "Caroline", "Griffin", "Anne"],
  ["Faith", "Maggie", "Jami", "Chelsea", "Christopher"],
  ["Shawn", "Ebony", "Ryan", "Sam", "Claire"],
  ["Alliyah", "Sarah", "Zach", "Caroline", "Griffin", "Anne"],
];

const fishyPairs = createUniqueFishyPairs(fishiesTeamList);
const sampleRandom = createRandomizedGroups(fishiesTeamList, 3)


let firstScore = scorePairs(
  testGroups,
  createUniqueFishyPairs(fishiesTeamList)
);

let secondScore = scoreGroupings(sampleRandom, firstScore)
console.log(firstScore);
console.log(sampleRandom);
console.log(secondScore)

