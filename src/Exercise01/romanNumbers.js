function romanNumeralsDecoder(roman){

    const ROMAN_NUMERALS_MAP = new Map([
        ['I',1],
        ['V',5],
        ['X',10],
        ['L',50],
        ['C',100],
        ['D',500],
        ['M',1000],
    ])

    let matchedNumerals =  [...roman].map((romanSingleCharacter) => {
        return ROMAN_NUMERALS_MAP.get(romanSingleCharacter)
    })

    /*
        After converting the roman to numeral. 
        sum up the numerals using reducer function
    */
    return matchedNumerals.reduce((accumulator, current, index, array) => {
        if(index < array.length -1 && current < array[index + 1]  ){
            return accumulator + current
        } 
        return current - accumulator
    }, 0);
}


function romanNumeralsEconder(number){
    const ROMAN_NUMERALS = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];
    
    let combinedRomans = '';

    for (const { value, numeral } of ROMAN_NUMERALS) {
        while (number >= value) {
            combinedRomans += numeral;
            number -= value;
        }
    }

    return combinedRomans;
}
