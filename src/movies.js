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
});
//console.log(getAllDirectors2(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = ((moviesArray) => {
    const steven = moviesArray.filter((movie) => movie.director === "Steven Spielberg");
    const stevenDrama = steven.filter((movie) => movie.genre.includes("Drama"));
    return stevenDrama;
});

//console.log(howManyMovies(movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(moviesArray) {}
const scoresAverage = ((moviesArray) => {
    const totalScore = moviesArray.reduce((acumulador, movie) => {
        return acumulador + movie.score;
    }, 0);
    return totalScore / moviesArray.length;
});

//console.log(`The average score of all movies is: ${scoresAverage(movies).toFixed(2)}`);

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = ((moviesArray) => {
    const dramas = moviesArray.filter((movie) => movie.genre.includes("Drama"));
    const averageDramas = dramas.reduce((acumulador, movie) => {
        return acumulador + movie.score;
    }, 0);
    return averageDramas / dramas.length;
})

//console.log(`The averages score of all drama movies is: ${dramaMoviesScore(movies).toFixed(2)}`)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear= ((moviesArray) => {
    const sortedByYear = moviesArray.sort((a, b) => {
        //explicacion, si a es mayor que b, que devuelva un numero negativo, pondrá a A por delante de B,
        //si es alrevés, con un numero, B se pondrá por delante de A
        //si son iguales, el 0 representa que no se moverán.
        // if (a.year < b.year){
        //     return -1;
        // }
        // if (a.year > b.year){
        //     return 1;
        // }
        // return 0
        return a.year - b.year;
    });
    //falta hacer iteración para que dos o más movies del mismo año, se ordenen alfabéticamente.
    return sortedByYear;
});

console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = ((moviesArray) => {})

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = ((moviesArray) => {})

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
const bestYearAvg = ((moviesArray) => {})
