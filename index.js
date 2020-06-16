import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
function findData(arr, year, stage, item){ // this finds any data as long as you give it the year, stage, and respected item you are looking for
for(let i = 0; i < arr.length; i++){
    if(arr[i]["Year"] === year && arr[i]["Stage"] === stage){
          return arr[i][item];
    }
}
}
console.log(findData(fifaData, 2014, "Final", "Home Team Name"));

 function winner(arr, year, stage){ // Finds the winner in whatever match you put in as parameters
     for(let i = 0; i < arr.length; i++){
    if(arr[i]["Year"] === year && arr[i]["Stage"] === stage && arr[i]["Home Team Goals"] + arr[i]["Half-time Home Goals"] > arr[i]["Away Team Goals"] + arr[i]["Half-time Away Goals"]){
        return `${arr[i]["Home Team Name"]} is the winner`;
    }
    else if(arr[i]["Year"] === year && arr[i]["Stage"] === stage && arr[i]["Home Team Goals"] + arr[i]["Half-time Home Goals"] < arr[i]["Away Team Goals"] + arr[i]["Half-time Away Goals"]){
        return `${arr[i]["Away Team Name"]} is the winner`;
    }
}
}
console.log(winner(fifaData, 2014, "Final"));

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
function getFinals(data) {
    // const finalData = [];
    // for(let i = 0; i < data.length; i++){  
    //     if(data[i]["Stage"] === "Final"){
    //         finalData.push(data[i]);
    //     }
    // }
    // return finalData;
// did it using filter array method as well
    const finalsArray = data.filter(function(item){
        return item["Stage"] === "Final";
    });
return finalsArray;
};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback){
const finalYears = callback.map(function(item){
    return item["Year"];
});
return finalYears;
}
console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
//     const winners = [];
//     for(let i = 0; i < callback.length; i++){
//         if(callback[i]["Home Team Goals"] > callback[i]["Away Team Goals"]{
//              winners.push(callback[i]["Home Team Name"]);
//         }
//         else{
//             winners.push(callback[i]["Away Team Name"]);
//             }
// }
// return winners;
// }
    const winnersArray = []; // did it using forEach as well.
    callback.forEach(function(item){
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            winnersArray.push(item["Home Team Name"]);
       }
       else{
           winnersArray.push(item["Away Team Name"]);
           }
    });
    return winnersArray;
}

console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(country, year) {
    for(let i = 0; i < country.length; i++){
        console.log(`In ${year[i]} ${country[i]} won the world cup!`);
    }
};
getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)));
/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const averageHome = data.reduce(function(acc, item){
        return acc + item["Home Team Goals"];
    }, 0)
    const averageAway = data.reduce(function(acc, item){
        return acc + item["Away Team Goals"];
    }, 0)
    return `Average goals for Home: ${(averageHome / data.length).toFixed(0)} and the average goals for Away: ${(averageAway / data.length).toFixed(0)}`;
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

// If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file
