const randomizeList = (list) => {
  const randomList = list
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return randomList;
};

export { randomizeList };
