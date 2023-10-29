
const romanNumeralsMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanNumeralsDecoder(roman) {
  /*
        After converting the roman to numeral. 
        sum up the numerals using reducer function
        */
   console.log('roman ' +
  [...roman].reduce((accumulator, current, index, array) => {
    romanNumeralsMap[current] < romanNumeralsMap[array[index + 1]]
      ?  accumulator - romanNumeralsMap[current]
      : accumulator + romanNumeralsMap[current]
  }
  ))
}

console.log(romanNumeralsDecoder('M'));

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

function romanNumeralsEncoder(number) {
  let combinedRomans = "";
  for (const { value, numeral } of romanNumerals) {
    while (number >= value) {
      combinedRomans += numeral;
      number -= value;
    }
  }

  return combinedRomans;
};
