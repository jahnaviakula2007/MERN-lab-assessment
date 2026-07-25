// Generate Prime Numbers in a Range

function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

let start: number = 1;
let end: number = 50;

console.log(`Prime numbers between ${start} and ${end}:`);

for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}