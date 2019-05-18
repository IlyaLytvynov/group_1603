import {TaskList} from './scrypts/task-list';

const list = new TaskList(document.querySelector('#list'));

// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://evening-dawn-11092.herokuapp.com/list');
// xhr.send();
// xhr.addEventListener('readystatechange', () => {
//     console.log(xhr);
//     if(xhr.readyState === 4) {
//         console.log(xhr.response);
//         const result = JSON.parse(xhr.response);
//         console.log(result[0]);
//     }
// });
// console.log('SENDED!!!!!');