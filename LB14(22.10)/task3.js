let car1 = {
    brand: "Toyota",
    model: "Supra",
    year: 1997
};
let car2 = {
    brand: "Chevrolet",
    model: "Impala",
    owner: 1967
};
let car3 = {...car1, ...car2
};
console.log(car3);