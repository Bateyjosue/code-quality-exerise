const sumElement = (array) => {
  if(array.length === 0) return 0
  return array[0] + sumElement(array.slice(1))
}

const array = [1, 2, 3, 4, 5];
const sum = sumElement(array);
console.log(sum); //