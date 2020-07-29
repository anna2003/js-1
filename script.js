"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже помотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let q1 = prompt('Один из последних просмотренных файлов?', ''),
    q2 = prompt('На сколько оцените его?', ''),
    q12 = prompt('Один из последних просмотренных файлов?', ''),    
    q22 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[q1]=q2;
personalMovieDB.movies[q12]=q22;

console.log(personalMovieDB);
