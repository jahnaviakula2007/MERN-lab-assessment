function diss<T>(value: T): T {
    return value;
}

console.log(diss<number>(100));
console.log(diss<string>("Hello"));