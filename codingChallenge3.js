function avg(p1, p2, p3){
    return (p1 + p2 + p3)/3;
}

var Dolphins = avg(96,108,89);
console.log(Dolphins);
var Koalas = avg(88, 91, 110);
console.log(Koalas);

if (Dolphins > Koalas)
    console.log("Dolphins win");
else if (Dolphins < Koalas)
    console.log("Koalas win")
else console.log("Draw");


console.log("Bonus 1");

function res(){
    if (Dolphins > Koalas && Dolphins >=100)
        console.log("Dolphins win");
    else if (Dolphins < Koalas && Koalas >=100)
        console.log("Koalas win")
    else if (Dolphins == Koalas && Dolphins >=100 && Koalas >=100)
        console.log("Draw");
    else console.log("There is no winning team");
}

var Dolphins = avg(97,112,101);
console.log(Dolphins);
var Koalas = avg(109, 95, 123);
console.log(Koalas);
res();

console.log("Bonus 2");

var Dolphins = avg(97,112,101);
console.log(Dolphins);
var Koalas = avg(109, 95, 106);
console.log(Koalas);
res();