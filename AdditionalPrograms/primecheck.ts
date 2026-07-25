// Check Prime Number

function checkPrime(value: number): boolean {
    if (value <= 1) {
        return false;
    }

    for (let index = 2; index <= Math.sqrt(value); index++) {
        if (value % index === 0) {
            return false;
        }
    }

    return true;
}

let input: number = 29;

if (checkPrime(input)) {
    console.log(input + " is a Prime Number.");
} else {
    console.log(input + " is Not a Prime Number.");
}