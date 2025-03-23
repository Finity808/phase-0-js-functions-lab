
//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

// Temperatures in Fahrenheit and Celsius
// Temperatures in Fahrenheit and Celsius
let day1TempF = 32; // Fahrenheit
let day2TempC = 25; // Celsius
let day3TempF = 70; // Fahrenheit
let day4TempC = 18; // Celsius
let day5TempF = 80; // Fahrenheit
let day6TempC = 15; // Celsius
let day7TempF = 72; // Fahrenheit
let day8TempC = 28; // Celsius
let day9TempF = 68; // Fahrenheit
let day10TempC = 20; // Celsius
let day11TempF = 75; // Fahrenheit
let day12TempC = 23; // Celsius
let day13TempF = 82; // Fahrenheit
let day14TempC = 30; // Celsius
let day15TempF = 65; // Fahrenheit
let day16TempC = 22; // Celsius
let day17TempF = 77; // Fahrenheit
let day18TempC = 26; // Celsius
let day19TempF = 78; // Fahrenheit
let day20TempC = 24; // Celsius
let day21TempF = 73; // Fahrenheit
let day22TempC = 21; // Celsius
let day23TempF = 79; // Fahrenheit
let day24TempC = 27; // Celsius
let day25TempF = 71; // Fahrenheit
let day26TempC = 19; // Celsius
let day27TempF = 74; // Fahrenheit
let day28TempC = 17; // Celsius
let day29TempF = 76; // Fahrenheit
let day30TempC = 29; // Celsius

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Convert all Celsius temperatures to Fahrenheit
let celsiusTemps = [
    day2TempC, day4TempC, day6TempC, day8TempC, day10TempC, 
    day12TempC, day14TempC, day16TempC, day18TempC, day20TempC, 
    day22TempC, day24TempC, day26TempC, day28TempC, day30TempC
];

let fahrenheitTemps = [
    day1TempF, day3TempF, day5TempF, day7TempF, day9TempF, 
    day11TempF, day13TempF, day15TempF, day17TempF, day19TempF, 
    day21TempF, day23TempF, day25TempF, day27TempF, day29TempF
];

// Convert Celsius to Fahrenheit and add to the Fahrenheit temps list
celsiusTemps.forEach(celsius => {
    fahrenheitTemps.push(celsiusToFahrenheit(celsius));
});

// Calculate total Fahrenheit temperature
let tot_temperature_in_fahrenheit = fahrenheitTemps.reduce((acc, temp) => acc + temp, 0);

// Calculate the average Fahrenheit temperature
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / fahrenheitTemps.length;

// Convert the Fahrenheit temperatures back to Celsius for total Celsius calculation
let fahrenheitTempsInCelsius = fahrenheitTemps.map(fahrenheit => fahrenheitToCelsius(fahrenheit));

// Calculate total Celsius temperature
let tot_temperature_in_celsius = fahrenheitTempsInCelsius.reduce((acc, temp) => acc + temp, 0);

// Calculate the average Celsius temperature
let avg_temperature_in_celsius = tot_temperature_in_celsius / fahrenheitTempsInCelsius.length;

// Console log the results

console.log(`The average temperature in Fahrenheit is: ${avg_temperature_in_fahrenheit.toFixed(2)}°F`);
console.log(`The average temperature in Celsius is: ${avg_temperature_in_celsius.toFixed(2)}°C`);





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
