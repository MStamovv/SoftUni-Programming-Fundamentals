function solve(str) {

    let i = 0;
    let password = ``;
    let username = str[0];
    let count = 0;

    for (let index = username.length - 1; index >= 0; index--) {

        password += username[index];
    }
    while (str[i] !== password) {
        if (str[i + 1] === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else if (count >= 3) {
            console.log(`User ${user} blocked!`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
        }
        i++
    }
}
solve(['Acer', 'login', 'go', 'let me in', 'recA'])