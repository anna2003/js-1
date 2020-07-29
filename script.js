"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже помотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
let i = 1;
while (i <= 2) {
    let q1 = prompt('Один из последних просмотренных файлов?', ''),
        q2 = prompt('На сколько оцените его?', '');
    if (q1 == null || q2 == null || q1 == '' || q2 == '' || q1.length > 50) {
        continue;
    }
    personalMovieDB.movies[q1] = q2;
    i++;
}

console.log(personalMovieDB);