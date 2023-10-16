# Code Quality and Coding Best Practices
## Exercise 01

### Exercise : ES6 string addition
#### Description
It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string.

### Exercise : Roman Numerals Decoder
#### Description
1. Decoder

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

    "MM"      -> 2000
    "MDCLXVI" -> 1666
    "M"       -> 1000
    "CD"      ->  400
    "XC"      ->   90
    "XL"      ->   40
    "I"       ->    1

Help:
```
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
``````

2. Encoder

Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

    Symbol    Value
    I          1
    V          5
    X          10
    L          50
    C          100
    D          500
    M          1,000
Remember that there can't be more than 3 identical symbols in a row.

### Exercise : Number Formatting
#### DESCRIPTION:
Format any integer provided into a string with "," (commas) in the correct places.

Example:

    For n = 100000 the function should return '100,000';
    For n = 5678545 the function should return '5,678,545';
    for n = -420902 the function should return '-420,902'.