// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
console.log("Data 1:");
var mass_Mark1 = 78;
var height_Mark1 = 1.69;
var mass_John1 = 92;
var height_John1 = 1.95;

var BMI_Mark1 = mass_Mark1 / (height_Mark1 * height_Mark1);
var BMI_John1 = mass_John1 / (height_John1 * height_John1);

if (BMI_John1 > BMI_Mark1) {
    console.log(`Mark's BMI (${BMI_Mark1.toFixed(2)}) is higher than John's (${BMI_John1.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${BMI_John1.toFixed(2)}) is higher than Mark's (${BMI_Mark1.toFixed(2)})!`);
}

console.log("Data 2:");
var mass_Mark2 = 95;
var height_Mark2 = 1.88;
var mass_John2 = 85;
var height_John2 = 1.76;

var BMI_Mark2 = mass_Mark2 / (height_Mark2 * height_Mark2);
var BMI_John2 = mass_John2 / (height_John2 * height_John2);

if (BMI_John2 > BMI_Mark2) {
    console.log(`Mark's BMI (${BMI_Mark2.toFixed(2)}) is higher than John's (${BMI_John2.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${BMI_John2.toFixed(2)}) is higher than Mark's (${BMI_Mark2.toFixed(2)})!`);
}