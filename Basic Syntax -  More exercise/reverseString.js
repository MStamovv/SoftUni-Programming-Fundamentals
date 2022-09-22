function reverseString(string) {

    let res = " "
    for (let i = string.length - 1; i >= 0; i--) {
        let currentChar = string[i]
        res += currentChar
    }
    console.log(res)
}
reverseString(`SoftUni`)