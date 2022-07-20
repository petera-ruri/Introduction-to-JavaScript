/*
let js = 'amazing';

console.log(40 + 8 + 23 - 10);

console.log('Jonas')
let firstName = 'Bob';
console.log(firstName);
console.log(firstName);
console.log(firstName);
let country = 'New Zealand';
let continent = 'NA';
let population = 5000000;
let isIsland = 'New Zealand';

console.log(isIsland);
console.log(country);
console.log(population);
console.log(continent);

let firstName = true;
console.log(firstName)

//console.log(typeof true);
console.log(typeof firstName);
//console.log(typeof 23);
//console.log(typeof 'Poop');

firstName = 'YES!';
console.log(typeof firstName);
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);

// Let variables can be changed later
let firstName = 'Dylan'
firstName = 'Kirsten'
console.log(firstName)
console.log(typeof firstName)
//const variables are constant and can't be changed or re-assigned.
const gender = 'male'
// var is the way variables were declared before , and we do not use it as it is a legacy piece of code.
var height = "6 foot 3 inches"

const now = 2037;
const ageDylan = now - 1989;
const ageKirsten = now - 1994;
console.log(ageDylan, ageKirsten);
console.log(typeof ageDylan, typeof ageKirsten);
// 2 ** 3 meands 2 to the power of 3 which in this case should be 8
console.log(ageDylan * 2, ageDylan / 10, 2 ** 3);

const firstName = 'Dylan';
const lastName = 'Wiggill';

console.log(firstName + ' ' + lastName);
// the equals sign is an assignment operator
let x = 10 + 5;
console.log(x);
// this would mean x = x + 10, so x should be 25
x += 10
console.log(x)
x *= 4
console.log(x)
x /= 2
console.log(x)
x++
// This adds one
console.log(x)
x--
//this subracts one
console.log(x)
x--
// Now it should be 49?
console.log(x)

//Comparison operator greater or less than
console.log(ageDylan > ageKirsten);
console.log(ageDylan < ageKirsten);
// greater than or equal to
console.log(ageKirsten >= 18);
const isFullAge = ageKirsten >= 18;
console.log(now - 1989 > now - 1994)
console.log(now - 1989 < now - 1994)


const now = 2037;
const ageDylan = now - 1989;
const ageKirsten = now - 1994;
console.log(now - 1989 > now - 1994);

let x, y;
x = y = 25 - 10 - 5;// x = y = 10 this is useful as an example of right to left execution as math operators take precedence
console.log(x, y);
const averageAge = (ageDylan + ageKirsten) / 2
console.log(ageDylan, ageKirsten, averageAge)// Prior to this without parenthesis it would divide Kirstens age and then add Dylans age. However, with the parenthesis having a higher order of importance, it will calculate that first and then divide by two.
//assignment below
let nzPopulation = 5000000;
let finlandPopulation = 6000000;
let averageCountryPopulation = 33000000
console.log(nzPopulation / 2);
console.log(++nzPopulation);
console.log(finlandPopulation > nzPopulation);
console.log(nzPopulation < averageCountryPopulation);

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';




// This is the start of the first coding challenge.
// I got this correct, yes! However... He used const instead of let (he says he uses const as default)
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
let markBMI = markWeight / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);
console.log(johnBMI);
console.log(markBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;
console.log(markHigherBMI);
console.log(markBMI, johnBMI);

// it works here as well with the const but in the above example it didn't not sure why? I mean I changed the value of the let variables but it still only recognised the previous values declared... Check with Matthew.
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;
const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI)
console.log(markHigherBMI);

const firstName = 'Dylan';
const job = 'educator';
const birthYear = '1989'
const year = 2021;

const Dylan = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(Dylan)

const dylanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(dylanNew);
// using back ticks allows for multiple lines to be made it is also used for template literals
console.log(`string
multiple
lines`);
//start of assignment for this lecture - template literals (nailed it)
'Portugal is in Europe, and its 11 million people speak portuguese';
const country = 'Portugal'
const continent = 'Europe'
const population = '11 million'
const language = 'Portuguese'
console.log(`${country} is in ${continent}, and its ${population} people speak ${language}`);


const age = 15;
const isOldEnough = age >= 16;

if (age >= 16) { console.log('Sarah can start driving license 🥰') }
else {
    const yearsLeft = 16 - age;
    console.log(`Not yet sucker! 😈 Wait another ${yearsLeft} years muhahaha`)
}

const birthYear = 1999
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//conding challenge number 2

const markWeight = 155;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;
const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);

if (johnBMI > markBMI) {
    console.log(`John's (${johnBMI}) is higher than Mark's (${markBMI}).`)
} else {
    console.log(`Mark's (${markBMI}) is higher than John's (${johnBMI}).`)

}


// My random stuff - want to figure out how to randomise the outcome
const weather = Math.floor(Math.random() * (8))
switch (weather) {
    case 0: console.log('Weather is not clear today, the weather man lied')
    case 1: console.log('It is sunny, go outside and hit the beach'); break;
    case 2: console.log('It is raining, better to get a blanket and sit on the couch'); break;
    case 3: console.log('It is windy, so go outside but wear a jacket'); break;
    case 4: console.log('It is snowing, hit the slopes'); break;
    case 5: console.log('It is cloudy, better take a jacket just in case'); break;
    case 6: console.log('It is hailing, advice is to stay inside'); break;
    case 7: console.log('severe weather warning, time to panic!'); break;
    case 8: console.log('Ice on the roads, wear spiked shoes, and put chains on your tires'); break;
}


//inbuilt Number function will let it know to convert from a string to a number.
const inputYear = '1991'
console.log(Number(inputYear) + 10)
//Otherwise it will just keep it as a string
console.log(inputYear + 18)
// If you try to use the Number function with a type that isn't a number it will log NaN (not a number)
console.log(Number('Dylan'))
// String can be used in the same way, if you see what is console.log below it will have to different colours in the console (one for string, and then one for number)
console.log(String(23), 23)
// What is above here would be how to do it manually, which is not that common because JS will do these type converions automatically often

// Type coercion - This is the automated thing. In the javascript the addition symbol makes it recognise that it should be part of a string (23)

console.log('I am ' + 23 + ' years old')
// Not all ooperators do coercion to strings, it converted strings to numbers. The minus triggers the opposite strings to operators

console.log('23' - '10' - 3)
// This below made the number 23103
console.log('23' + '10' + 3)

console.log('23' * '2')
//here below it converts to number using greater or less than because it knows it should be a number
console.log('23' > '10')


let n = '1' + 1; // the result of this is the string 11
n = n - 1; // here the string 11 the number will - 1
console.log(n);

// Homework on this previous lesson
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17);// 23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2);
// 5 + 6 = 11 adds string '4' gives 114 + (9-4-2) = 3 so final output will be 1143


// Lesson 21 - Truthy and Falsy
// five falsy values in JS = 0 , '', undefined, null, NaN
// Everything else is a truthy value - e.g. any number which isn't zero or a string which isn't empty
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Dylan'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("don't spend it all");
} else {
    console.log("you should get a job!")
}
// In this money case because money has a value of 0 it logs a falsy value (type coersion), and then it will automatically go to the else statement. If money was set to any other number it would register it as a truthy statement and log the first if statement.

let height;

if (height) {
    console.log('Yay, height is defined')
}
else {
    console.log('height is not defined')
}
// In this case because height was not defined, it will convert to a falsy value. Where as if I entered a value for height it would be a truthy value


//Lecture 22 - Equality operators

const age = 18;

if (age === 18) console.log('You just became an adult')

//The equality operator (===) shows a boolean of truth or false if the values are equal on both sides. The three equals is strict does not do type coersion
//The loose equality operator uses 2 equals (==)

console.log('18' == 18) //loose (uses type coercion)
console.log(18 === '18') // strict (will not convert between types)
// a good rule is to use the strict, a general rule of thumb for most JS developers

//Prompt is an interesting function, creates a popup on the webpage
const favourite = Number(prompt('What is your favourite number?'));
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number')
} else if (favourite === 7) {
    console.log('Cool! 7 is also a cool number')
} else if (favourite === 9) {
    console.log('Cool! 9 is also a cool number')
} else {
    console.log('Number is 23, 7, or 9')
}
// See above for 'if' 'else if' 'else'

if (favourite !== 23) console.log('why not 23?')

//lesson 23 Boolean Logic
//True when all is true. False when even 1 isn't true? AND operator
//Or operator in this case only one variable would need to be true.
//Not operator only acts on one boolean value will invert the logic boolean variable. e.g. true becomes false.


const hasDriversLicence = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicence && hasGoodVision); // Result of true AND true should be true




//using the && operator when one variable is fals it is enough for the whole boolean operation to be false. This should log false.

console.log(hasDriversLicence || hasGoodVision); // Using the OR  should provide a true value as only one has to be true.


console.log(!hasDriversLicence); // This should give false as I have used the not operator.

// const shouldDrive = hasDriversLicence && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive!')
// }

const isTired = false // C
console.log(hasDriversLicence && hasGoodVision && isTired)

console.log(hasDriversLicence || hasGoodVision)

const shouldDrive = hasDriversLicence && hasGoodVision;

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive!')
}


//Coding Challenge 3


const dolphinScore = Math.floor((96 + 108 + 89) / 3);
const koalaScore = Math.floor((89 + 91 + 110) / 3);
console.log(dolphinScore);
console.log(koalaScore);
console.log(dolphinScore >= koalaScore);


const dolphinScore = (123 + 108 + 89) / 3;
const koalaScore = (88 + 91 + 110) / 3;

if (dolphinScore > koalaScore && dolphinScore >= 100) {
    console.log("Dolphin's win")
} else if (koalaScore > dolphinScore && koalaScore >= 100) {
    console.log("Koala's win")
} else if (dolphinScore === koalaScore && koalaScore >= 100 && dolphinScore >= 100) {
    console.log("it's a draw")
} else {
    console.log("no team wins")
}
console.log(dolphinScore, koalaScore)



const rimuScore = (12 + 56 + 65) / 3;
const kowhaiScore = (12 + 56 + 65) / 3;
const rataScore = (12 + 56 + 65) / 3;
const kauriScore = (12 + 56 + 65) / 3;

if (rimuScore > rataScore && rimuScore > kowhaiScore && rimuScore > kauriScore && rimuScore >= 100) {
    console.log("Yeah boi Rimu wins!")
}
else if (rataScore > rimuScore && rataScore > kowhaiScore && rimuScore > kauriScore && rataScore >= 100) {
    console.log("Oh yeah! Rata wins!")
}
else if (kowhaiScore > rimuScore && kowhaiScore > rataScore && kowhaiScore > kauriScore && kowhaiScore >= 100) {
    console.log("Whoop Whoop! Kowhai wins!")
}
else if (kauriScore > rataScore && kauriScore > rimuScore && kauriScore > kowhaiScore && kauriScore >= 100) {
    console.log("Holy Moly! Kauri wins baby!")
}
else if (kauriScore === rimuScore && kauriScore === rimuScore && kauriScore === rataScore && kauriScore === kowhaiScore && kauriScore >= 100) {
    console.log("It's a draw!")
}
else console.log("Nobody wins!")



const day = "Sunday";

switch (day) {
    case "Monday":
        console.log("seeing Nanna"); break;
    case "Tuesday":
        console.log("Preparing my classroom"); break;
    case "Wednesday":
        console.log("Teaching Group 'A' "); break;
    case "Thursday":
        console.log("Teaching Group 'B' "); break;
    case "Friday":
        console.log("Learning to code"); break;
    case "Saturday":
        console.log("Seeing friends at the beach"); break;
    case "Sunday":
        console.log("Playing games with K"); break;

}

// The same thing written with else if statements, the reason you would use a switch statement is it allows for cleaner code without having to constantly write "else if (day ===)" But it is personal preferance.


if (day === "Monday") {
    console.log("seeing Nanna")
} else if (day === "Tuesday") {
    console.log("Preparing my classroom")
} else if (day === "Wednesday") {
    console.log("Teaching Group 'A' ")
} else if (day === "Thursday") {
    console.log("Teaching Group 'B' ")
} else if (day === "Friday") {
    console.log("Learning to code")
} else if (day === "Saturday" || "Sunday") {
    console.log("Seeing friends at the beach")
}

//Lecture 27 Values and Statements - Big overview but main idea is:
// expressions produce values, and statements perform actions

//Lecture 28 - Conditional (Ternary) Operator - essentially writing an ifelse statement in one line.

const age = 22;
//age >= 18 ? console.log("I like to drink wine!") : console.log("I like to drink water!");

const drink = age >= 18 ? "wine" : "water"

console.log(drink)

let drink2;
if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}
console.log(drink2)

// ternary operators can be put into a template literal

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`)


const bill = 430;
const tip = bill <= 300 && bill >= 50 ? (bill * 15) / 100 : (bill * 20) / 100

console.log(`The bill was ${bill}, the tip was ${tip} and the total for the evening was ${bill + tip}`);
*/