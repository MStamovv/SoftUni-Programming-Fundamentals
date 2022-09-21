function Rounding(numb1, numb2) {

    if (numb2 > 15) {
        numb2 = 15;
    }
    console.log(parseFloat(numb1.toFixed(numb2)))
}
Rounding(10.566666, 3)