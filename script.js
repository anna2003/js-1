"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже помотрели?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(numberOfFilms)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже помотрели?", "");
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPeronallevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Киноман");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYouGengres: function () {
        for (let i = 1; i <= 2;) {
            let genres = prompt(`Введите любимые жанры через запятую`, '').toLowerCase();
            if (genres === '' || genres == null) {
                console.log("Введите корректные данные");
                continue;
            }
            i++;
            personalMovieDB.genres = genres.split(', ');
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Жанр №${i+1}: ${item}`);
        });
        personalMovieDB.genres.sort();
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.private = !personalMovieDB.private;
    }
};