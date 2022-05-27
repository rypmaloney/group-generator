/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import {
  randomizeList,
  createUniqueFishyPairs,
  scoreGroups,
  createLowScoreGroups,
} from "./scripts";

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

test("does randomize list to return list create a list that is not the same", () => {
  const randomList = randomizeList(fishiesTeamList);
  expect(fishiesTeamList).not.toBe(randomList);
});

// create unique fishy pairs
test("creates correct number of pairs", () => {
  const numOfFishies = fishiesTeamList.length;
  const pairsLength = createUniqueFishyPairs(fishiesTeamList).length;
  const uniqueCombos = (numOfFishies * (numOfFishies - 1)) / 2; // n(n-1)/2 for unique pairs
  expect(pairsLength).toBe(uniqueCombos);
});
/*
test("does not repeat team combos", () => {
    const uniqueFishyPairs = createUniqueFishyPairs(fishiesTeamList)
    const firstPerson = Math.floor(Math.random() * 10)
    let secondPerson = Math.floor(Math.random() * 10)
    if (firstPerson === secondPerson){
        secondPerson = Math.floor(Math.random() * 10)
    }


    expect(pairsLength).toBe(uniqueCombos);
  });
*/

// pair scoring
test("gives correct score", () => {
  const fishyPairs = createUniqueFishyPairs(fishiesTeamList);
  const score = scoreGroups(testGroups, fishyPairs);
  const pair = score.find(
    (obj) =>
      (obj.one === "Shawn" && obj.two === "Ryan") ||
      (obj.one === "Ryan" && obj.two === "Shawn")
  );
  expect(pair.score).toBe(3);
});

// create low score groups
// Create the number of groups specified in the function call
test("creates correct number of groups", () => {
  const fishyPairs = createUniqueFishyPairs(fishiesTeamList);
  const score = scoreGroups(testGroups, fishyPairs);
  const lowScoreGroups5 = createLowScoreGroups(fishiesTeamList, 5, score);
  const lowScoreGroups3 = createLowScoreGroups(fishiesTeamList, 3, score);
  const lowScoreGroups9 = createLowScoreGroups(fishiesTeamList, 9, score);
  const lowScoreGroups4 = createLowScoreGroups(fishiesTeamList, 4, score);

  expect(lowScoreGroups5.length).toBe(5);
  expect(lowScoreGroups3.length).toBe(3);
  expect(lowScoreGroups9.length).toBe(9);
  expect(lowScoreGroups4.length).toBe(4);
});

// groups are correct size
test("groups are the correct size with 5 groups", () => {
  const fishyPairs = createUniqueFishyPairs(fishiesTeamList);
  const score = scoreGroups(testGroups, fishyPairs);
  const groupNum = 5;

  const lowScoreGroups = createLowScoreGroups(fishiesTeamList, 5, score);
  const expectedGroupSize = Math.floor(fishiesTeamList.length / groupNum);

  for (let i = 0; i < groupNum; i++) {
    expect([expectedGroupSize, expectedGroupSize + 1]).toContain(
      lowScoreGroups[i].length
    );
  }
});

// specific people who should not be put together
test("low score groups avoids unfavorable pairings based on score", () => {
  const fishyPairs = createUniqueFishyPairs(fishiesTeamList);
  const score = scoreGroups(testGroups, fishyPairs);
  const lowScoreGroups = createLowScoreGroups(fishiesTeamList, 3, score);

  const unfavorablePairsArray = [
    { one: "Anne", two: "Alliyah" },
    { one: "Anne", two: "Caroline" },
    { one: "Alliyah", two: "Sarah" },
    { one: "Alliyah", two: "Caroline" },
    { one: "Shawn", two: "Ryan" },
    { one: "Ryan", two: "Sam" },
    { one: "Shawn", two: "Sam" },
  ];

  let unfavorablePairsCount = 0;
  for (let i = 0; i < unfavorablePairsArray.length; i++) {
    const unfavorableOne = unfavorablePairsArray[i].one;
    const unfavorableTwo = unfavorablePairsArray[i].two;

    for (let j = 0; j < lowScoreGroups.length; j++) {
      if (
        lowScoreGroups[j].includes(unfavorableOne) &&
        lowScoreGroups[j].includes(unfavorableTwo)
      ) {
        unfavorablePairsCount += 1;
      }
    }
  }
  expect(unfavorablePairsCount).toBe(0);
});
