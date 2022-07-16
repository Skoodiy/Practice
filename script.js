let numberOfFilms;

function start() {
    do {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','19').trim();
    } while (numberOfFilms == false || isNaN(numberOfFilms));
        
    
}

start();

const personlMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    let movie;
    let rate;
    
    do {
        movie = prompt('Напишите название одного из недавно просмотренных фильмов','Titanic').trim();
    } while (!movie || movie.length > 50);
        
    do {
        rate = prompt('На сколько из 10 можете его оценить?','7.7').trim();
    } while (!rate || rate.length > 50);

    personlMovieDB.movies[movie] = rate;
}

for (let i = 0; i < 2; i++) {
    rememberMyFilms();
}

function detectPersonalLevel() {
    if (personlMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personlMovieDB.count >=10 && personlMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personlMovieDB.count >= 30) {
        alert('Вы киноман!');
    } else {
        alert ('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personlMovieDB.privat === true) {
        console.log('Аккаунт приватный');
    } else {
        console.log(personlMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    const repeatCount = +prompt('Сколько жанров вы хотите добавить?', '3').trim();

    for (let i = 0; i < repeatCount; i++) {
        personlMovieDB.genres[i] = prompt(`Ваш людимый жанр под номером ${i + 1}:`,'Фентези').trim();
    }
}

writeYourGenres();

console.log(personlMovieDB.movies);