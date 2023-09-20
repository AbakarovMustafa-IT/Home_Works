// разбор домашней работы

// console.log(window.innerHeight);
// console.log(document.body.offsetHeight);
// console.log(window.scrollY);

// const scrolHandler = () => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     openModal();
//     window.removeEventListener('scroll', scrolHandler);
//   }
// }

// window.addEventListener('scroll', scrolHandler);

// JSON
// В 1 JSON файле можно создать либо 1 массив, либо 1 объект, но воложенности допускаются

// const person = {
//   name: "Mustafa",
//   age: 21,
// };

// console.log(person);

// console.log(console);
// const console = {
//   log: () => {}
// }

/* 
  Глобальные объекты:
  JSON, document, window, console, Object, Array, XMLHttpRequest
*/

/* 
  console.log(console) Вызовится объект
  const console = {
    log: () => {}
  }
*/
// const json = JSON.stringify(person); // Превразает любой JS в JSON формат
// const newObj = JSON.parse(json); // Преобразует JSON в объект

// console.log(json); // Выводит JSON формат
// console.log(newObj); // создаёт объект с помоходими данными но он новый

// console.log(person === newObj); // Выведет false, потому что сравн-ся по ссылкам

// XHR - XML HTTP REQUEST

// REQUEST - запрос
// XML - extensible Markup language
// HTTP - HyperText Transfer Protocol

// http://www.wildberries.ru/

const wrapper = document.querySelector(".wrapper");

document.addEventListener("DOMContentLoaded", () => {
  const request = new XMLHttpRequest(); // создание запроса
  request.open("GET", "peoples.json"); // объявеление метода запроса и пути
  request.setRequestHeader("Content-type", "application/json"); // указывание заголовка
  request.send(); // отправка запроса
  request.addEventListener("load", () => {
    const peoples = JSON.parse(request.response);
    peoples.forEach((person) => {
      const personCard = document.createElement("div");
      personCard.setAttribute("class", "person-card");
      personCard.innerHTML = `
        <div class="card_photo">
        <img class="card_photo-size" src=${person.image}>
        </div>
        <h3 class="card_name">Name: ${person.name}</h3>
        <p class="card_age">Age: ${person.age}</p>
        <div class="card_bio">${person.bio}</div>
      `;
      wrapper.append(personCard);
    });
  });
  const request2 = new XMLHttpRequest();
  request2.open("GET", "data.json");
  request2.setRequestHeader("Content-type", "application/json");
  request2.send();
  request2.onload = function () {
    const data = JSON.parse(request2.response);
    console.log(data);
  };
});
