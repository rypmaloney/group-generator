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

export { randomizeList, createRandomizedGroups };
