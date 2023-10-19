const romanNumeralsMap = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

function romanNumeralsDecoder(roman) {
  /*
        After converting the roman to numeral. 
        sum up the numerals using reducer function
    */
  return [...roman]
    .map((romanSingleCharacter) => romanNumeralsMap.get(romanSingleCharacter))
    .reduce(
      (accumulator, current, index, array) =>
        index < array.length - 1 && current < array[index + 1]
          ? accumulator + current
          : current - accumulator,
      0
    );
}

const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" },
];

const romanNumeralsEncoder = (number) => {
  let combinedRomans = "";
  romanNumerals.forEach(({ value, numeral }) => {
    while (number >= value) {
      combinedRomans += numeral;
      number -= value;
    }
  });

  return combinedRomans;
};
