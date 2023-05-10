const NUMS_LIMIT = 10;

export const makeNums = () => {
  const arr = [];

  for (let i = 7; i < NUMS_LIMIT; i++) {
    arr.push(i);
  }

  return [...arr, ...arr.map((el) => el - 3), ...arr.map((el) => el - 6)];
};
