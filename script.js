console.log('Hello')
//Challenge #4
const bill = 150;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${bill + tip}.`);



const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// TEST DATA 1
const avgTake2 = calcAverage(44, 23, 71);
const avgRUSH = calcAverage(65, 54, 49);

const checkWinner = function (avgTake2, avgRUSH) {
  if (avgTake2 > avgRUSH) {
    console.log(`Take2 win (${avgTake2} vs ${avgRUSH})`);
  } else {
    console.log(`RUSH win (${avgRUSH} vs ${avgTake2})`);
  }
};
checkWinner(avgTake2, avgRUSH); // RUSH win (56 vs 46)

// TEST DATA 2
const avgTake2_2 = calcAverage(85, 54, 41);
const avgRUSH_2 = calcAverage(23, 34, 27);
checkWinner(avgTake2_2, avgRUSH_2); // Take2 win (60 vs 28)