// check nesting level for nested arrays

const checkNestingLevel = (arrays) => {
  return arrays.reduce(
    (accumulator, current) =>
      accumulator + (Array.isArray(current) ? checkNestingLevel(current) : 0),
    1
  );
};

const array = [0, 1, [2, [3, [4, 5]]]];
console.log(array.flat(checkNestingLevel(array)));
