function englishNameOfTheLastDigit(num) {

    let name = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    console.log(name[Number(String(num).slice(-1))])
}

englishNameOfTheLastDigit(512)
englishNameOfTheLastDigit(51)