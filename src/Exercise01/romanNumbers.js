function romanNumeralsDecoder(roman){

    const romanNumeralsMap = new Map([
        ['I',1],
        ['V',5],
        ['X',10],
        ['L',50],
        ['C',100],
        ['D',500],
        ['M',1000],
    ])

    let matchedNumerals =  [...roman].map((romanSingleCharacter) => {
        return romanNumeralsMap.get(romanSingleCharacter)
    })

    /*
        After converting the roman to numeral. 
        sum up the numerals using reducer function
    */
    let combinedNumerals = matchedNumerals.reduce((accumulator, current, index, array) => {
        if(index < array.length -1 && current < array[index + 1]  ){
            return accumulator + current
        } 
        return current - accumulator
    }, 0)

    return combinedNumerals
}