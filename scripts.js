/* eslint-disable no-plusplus */
console.log("working");

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

const createUniqueFishyPairs = (fishies) => {
  let fishyPairArray = [];
  // for each fishy create a pair
  for (let i = 0; i < fishies.length; i++) {
    fishyPairArray.push([]);

    for (let j = 0; j < fishies.length; j++) {
      // Dont include fishy paired with themselves
      if (fishies[i] !== fishies[j]) {
        fishyPairArray[i].push([fishies[i], fishies[j]]);
      }
    }
  }
  return fishyPairArray;
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

const groupsOne = [
  ["Zach", "Ebony", "Jami", "Chelsea", "Christopher"],
  ["Shawn", "Maggie", "Ryan", "Sam", "Griffin"],
  ["Alliyah", "Sarah", "Faith", "Caroline", "Claire", "Anne"],
];

const groupsTwo = [
  ["Faith", "Maggie", "Jami", "Chelsea", "Christopher"],
  ["Shawn", "Ebony", "Ryan", "Sam", "Claire"],
  ["Alliyah", "Sarah", "Zach", "Caroline", "Griffin", "Anne"],
];

let sampleShuffledGroups = createRandomizedGroups(fishiesTeamList, 3);
let sampleFishyPairs = createUniqueFishyPairs(fishiesTeamList);
console.log(sampleFishyPairs);
