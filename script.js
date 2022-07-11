const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','19');

const personlMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
};

let movieRate = function() {
    let movie;
    let rate;
    
    do {
        movie = prompt('Напишите название одного из недавно просмотренных фильмов','Titanic');
    } while (!movie || movie.length > 50);
        
    do {
        rate = prompt('На сколько из 10 можете его оценить?','7.7');
    } while (!rate || rate.length > 50);

    personlMovieDB.movies[movie] = rate;
};

for (let i = 0; i < 2; i++) {
    movieRate();
}

if (personlMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personlMovieDB.count >=10 && personlMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personlMovieDB.count >= 30) {
    alert('Вы киноман!');
} else {
    alert ('Произошла ошибка');
}

console.log(personlMovieDB.movies);