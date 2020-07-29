"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже помотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже помотрели?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
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
}
function detectPeronallevel(){
    if(personalMovieDB.count<10){
        console.log("Мало фильмов");
    }else if(personalMovieDB.count>=10 && personalMovieDB.count<=30){
        console.log("Классический зритель");
    }else if(personalMovieDB.count>30){
        console.log("Киноман");
    }
}

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

function writeYouGengres(){
    for(let i=1;i<=3;i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`,'');
    }
}