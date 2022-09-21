function bitcoinMining(input) {

    let currentDayDig = 0;
    let bitCoinPrice = 11949.16;
    let GoldGR = 67.51;
    let index = 0;
    let day = 0;
    let moneyDig = 0;
    let firstDayBoughtBitcoint = ''
    let totalMoney = 0;
    let boughtBitcoint = 0;


    let length = input.length

    for (let i = 1; i <= length; i++) {

        day++
        currentDayDig = Number(input[index])
        if (day % 3 === 0) {
            currentDayDig = currentDayDig * 0.7;
        }
        index++
        moneyDig = currentDayDig * GoldGR;
        totalMoney += moneyDig;

        if (totalMoney >= bitCoinPrice) {
            if (boughtBitcoint === 0) {
                firstDayBoughtBitcoint = (`Day of the first purchased bitcoin: ${day}`)
            }
            let dayBought = Math.floor(totalMoney / bitCoinPrice);

            boughtBitcoint += dayBought
            totalMoney -= dayBought * bitCoinPrice
        }
    }
    console.log(`Bought bitcoins: ${boughtBitcoint}`)
    if (boughtBitcoint !== 0) {
        console.log(firstDayBoughtBitcoint)
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}

bitcoinMining([`100`, `200`, `300`])