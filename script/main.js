// Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

function isLeapYear(year) {
    if (year % 4 === 0) { 
        if (year % 100 === 0) { 
            if (year % 400 === 0) {
                return true; 
            } else {
                return false; 
            }
        } else {
            return true;    
        }
            }
        }

        // console.log(isLeapYear(2000));

        // Develop a program that asks the user for the current temperature and whether it is raining or not. Based on this information, advise the user on what clothing to wear.

        const temperature = prompt("What is the current temperature?"); 
        const isRaining = confirm("Is it raining?"); 

        if (isRaining) {
            if (temperature < 0) {
                console.log("Wear a jacket");
            } else {
                console.log("Wear a t-shirt");
            }
        } else {
            if (temperature < 0) {
                console.log("Wear shorts");
            } else {
                console.log("Wear a t-shirt");
            } 
        }
        