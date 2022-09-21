function vacation(grouptCount, type, day) {


    let roomPrice = 0;
    switch (type) {
        case `Students`:
            if (day === `Friday`) {
                roomPrice = 8.45;
            } else if (day === `Saturday`) {
                roomPrice = 9.80;
            } else if (day === `Sunday`) {
                roomPrice = 10.46;
            } break;
        case `Business`:
            if (day === `Friday`) {
                roomPrice = 10.90
            } else if (day === `Saturday`) {
                roomPrice = 15.60
            } else if (day === `Sunday`) {
                roomPrice = 16
            } break;
        case `Regular`:
            if (day === `Friday`) {
                roomPrice = 15
            } else if (day === `Saturday`) {
                roomPrice = 20
            } else if (day === `Sunday`) {
                roomPrice = 22.50
            } break;
    }
    let totalPrice = grouptCount * roomPrice;


    if (type === `Students` && grouptCount >= 30) {
        totalPrice = totalPrice * 0.85;
    }
    if (type === `Business` && grouptCount >= 100) {
        let discount = 10 * roomPrice;
        totalPrice = totalPrice - discount;
    }
    if (type === `Regular` && grouptCount >= 10 && grouptCount <= 20) {
        totalPrice = totalPrice * 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(40, "Regular",
    "Saturday")