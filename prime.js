const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

const input = require("fs").readFileSync(0, "utf8").trim();
const number = parseInt(input, 10);

const name = words[number] !== undefined ? words[number] : number;

if (isPrime(number)) {
    console.log(name + " is prime");
} else {
    console.log(name + " is not prime");
}
