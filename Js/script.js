/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use strict";
// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMoviieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt("Один из последних просмотренных фильмов?", "");
// const b = prompt("На сколько оцените его?", "");
// const c = prompt("Один из последних просмотренных фильмов?", "");
// const d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// const arr = [1, 2, 3, 'vova'];
// console.log(arr[3]);

// const obj = {
//     b: 7,
//     1: 2,
//     2: 3,
//     3: 'vova'
// }
// const ci = 'c';
// obj[ci] = 'klimenko'
// console.log(obj[ci]);
// console.log(obj);

// alert('Hello');

// const result = confirm("Are you here?");
// const answer = +prompt("Are you have 18?", "18");
// console.log(answer +5);
// const answer = [];
answer[0] = prompt("Как ваше имя?", "");
answer[1] = prompt("Как ваша фамилия?", "");
answer[2] = prompt("Сколько Вам лет?", "");

document.write(answer);
// document.addEventListener("DOMContentLoaded", (event) => {
//   const element = document.createElement("div");
//   element.textContent = answer;
//   document.body.appendChild(element);
// });
