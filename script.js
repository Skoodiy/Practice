const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','19');

const personlMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
};

let movieRate = function() {
    let movie = prompt('Напишите название одного из недавно просмотренных фильмов','Titanic');
    let rate = prompt('На сколько из 10 можете его оценить?','7.7');
    personlMovieDB.movies[movie] = rate;
};

for (let i = 0; i < 2; i++) {
    movieRate();
}

console.log(personlMovieDB);