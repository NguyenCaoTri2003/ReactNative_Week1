// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
console.log("Data 1:");
var mass_Mark1 = 78;
var height_Mark1 = 1.69;
var mass_John1 = 92;
var height_John1 = 1.95;

var BMI_Mark1 = mass_Mark1 / (height_Mark1 * height_Mark1);
var BMI_John1 = mass_John1 / (height_John1 * height_John1);

let markHigherBMI1 = BMI_Mark1 > BMI_John1;

console.log(`BMI của Mark: ${BMI_Mark1.toFixed(2)}`);
console.log(`BMI của John: ${BMI_John1.toFixed(2)}`);
console.log(`Mark có chỉ số BMI cao hơn John không? \n${markHigherBMI1 ? 'Có' : 'Không'}`);

console.log("Data 2:");
var mass_Mark2 = 95;
var height_Mark2 = 1.88;
var mass_John2 = 85;
var height_John2 = 1.76;

var BMI_Mark2 = mass_Mark2 / (height_Mark2 * height_Mark2);
var BMI_John2 = mass_John2 / (height_John2 * height_John2);

let markHigherBMI2 = BMI_Mark2 > BMI_John2;

console.log(`BMI của Mark: ${BMI_Mark2.toFixed(2)}`);
console.log(`BMI của John: ${BMI_John2.toFixed(2)}`);
console.log(`Mark có chỉ số BMI cao hơn John không? \n${markHigherBMI2 ? 'Có' : 'Không'}`);