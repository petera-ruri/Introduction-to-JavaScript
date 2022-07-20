# Introduction-to-JavaScript
In this challenge you will learn the fundamentals of JavaScript!

Setting up your page with JavaScript:

- Create a file called script.js
- Add `<script></script>` tags inside the body tags in your index.html file.
- Inside the first script tag add `src='script.js'`
- In your script.js file write `console.log('hello')` 
- Open your webpage in the browser and view your console log by right clicking your webpage and selecting inspect.
- Congratulations, you have linked some JavaScript to your webpage!
GOOD LUCK! 😃
## Challenge #1: BMI Calculator 

The challenge is a chance for you to practise the Javascript you have learned so far. It is meant to be a little bit challenging, but we know you can do it if you persevere. 

Some of the big tech firms in Auckland are setting up a social basketball league. So far there are Datacom, Rush, Xero, Spark, and Air New Zealand. Take2 has decided to enter a team of students and teachers.

Sione and Tualele are doing some pre-season training and want to calculate and compare their Body Mass Index. 💪

This is calculated by using the formula:

`BMI = mass/ height **2 `

or 

`BMI = mass/ (height x height)`

1. Store Sione and Tualele's mass and height in variables (use the test data to help fill this in).

TEST DATA 1: Sione weighs 78kg and is 1.69 m tall. Tualele weighs 62kg and is 1.55m tall.

TEST DATA 2: Sione weighs 95kg and is 1.88m tall. Tualele Weighs 85kg and is 1.66m tall.

Then using these variables calculate their BMI's, and log these results to the console. 

2. Calculate both their BMI's using the formula above. You can use either one. To make sure this is working log it into the console. 

3. Next, make a boolean variable called 'sioneHigherBMI' to see whether Sione has a higher BMI than Tualele.

4. Use an if/else statement to improve the BMI example by printing a statement to the console which says who has the higher BMI. You should also try to use ternary operators here to include the actual values of Sione and Tualele's BMI's.

## Challenge #2: Who Wins the Trophy??

Take2 and RUSH are competing against each other 3 times. The winner with the highest average score wins the trophy! 🏀🏆

1. Calculate the average score for each team, using the test data below.

2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple if-else blocks.

4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater than or equal to 100 points. Otherwise, no team wins the trophy.

TEST DATA: Take2 scores 96, 108 and 89. RUSH scores 88, 91 and 110.

TEST DATA BONUS 1: Take2 scores 97, 112 and 101. RUSH scores 109, 95 and 123.

TEST DATA BONUS 2: Take2 scores 97, 112 and 101. RUSH scores 109, 95 and 106.

## Challenge #3: Tip Calculator

After the tournament everyone is ready to relax and enjoy some time eating good food at some tumeke restaurants. 

They won some money in the tournament so want to tip everywhere they go 💰💰💰

Your challenge is to make their lives easier by building a tip calculator.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. They will tip 15% on any dinners that are between $50-$300, anything else they will tip 20%.

IMPORTANT - Try not to use if/else statements, instead try to use a ternary operator.

** Credit to Jonas Schmedtmann for helping design these challenges!

## Challenge #4: Season 2

A new season has begun for the tech league. 

This time around 

1. Create an arrow function 'CalcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams. 
3. Create a function 'CheckWinner' that takes teh average score of each team as parameters ('avgTake2', 'avgRush'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Take2 win (30 vs 13)".
4. use the 'checkWinner' function to determine the winner for both Data 1 and Data 2.
5. Ignore draws this time.

TEST DATA 1: TAKE2 SCORE 44, 23, AND 71. RUSH SCORE 65, 54, AND 49

TEST DATA 2: TAKE2 SCORE 85, 54, 41. RUSH SCORE 23, 34, 27.


