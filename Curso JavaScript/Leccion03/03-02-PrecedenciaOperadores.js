let a = 3, b = 2, c = 1, d = 4;
let z = a * b + c;
console.log(z); // Output: 7 (because 3 * 2 + 1 = 6 + 1 = 7)

z = c + a * b / d;
console.log(z); // Output: 2.5 (because 1 + (3 * 2) / 4 = 1 + 6 / 4 = 1 + 1.5 = 2.5)

z = (a + b) * (c + d);
console.log(z); // Output: 20 (because (3 + 2) * (1 + 4) = 5 * 5 = 25)