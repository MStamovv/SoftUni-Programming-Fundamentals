function ages(numb) {

    if (0 <= numb && numb <= 2) {
        console.log(`baby`)
    }
    else if (3 <= numb && numb <= 13) {
        console.log(`child`)
    } else if (14 <= numb && numb <= 19) {
        console.log(`teenager`)
    } else if (20 <= numb && numb <= 65) {
        console.log(`adult`)
    } else if (numb >= 66) {
        console.log(`elder`)
    } else if (numb < 0) {
        console.log(`out of bounds`)
    }
}
ages(0)