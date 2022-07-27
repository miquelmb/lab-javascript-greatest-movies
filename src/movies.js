const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const rawList = moviesArray.map((movie) => movie.director); 
    const cleanList = rawList.filter(
        (director, index) => rawList.indexOf(director) === index);
    return cleanList;
}

//modernizado la función
const getAllDirectors2 = ((moviesArray) => {
    const rawList = moviesArray.map((movie) => movie.director); 
    const cleanList = rawList.filter(
        (director, index) => rawList.indexOf(director) === index);
    return cleanList;
})
//console.log(getAllDirectors2(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = ((moviesArray) => {
    const steven = moviesArray.filter((movie) => movie.director === "Steven Spielberg");
    const stevenDrama = steven.filter((movie) => movie.genre.includes("Drama"));
    return stevenDrama;
});

console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(moviesArray) {}
const scoresAverage2 = ((moviesArray) = {})

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = ((moviesArray) => {})

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear= ((moviesArray) => {})

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = ((moviesArray) => {})

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = ((moviesArray) => {})

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
const bestYearAvg = ((moviesArray) => {})
