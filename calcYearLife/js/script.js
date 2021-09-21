let birthday; // в этой переменной будет хранится введённая дата рождения
let livedWeeks; // в этой переменной будет хранится количество прожитых недель
let isFemaleGender; // в этой переменной будет хранится выбраный пол (является ли пол женским?)

let form = document.querySelector("[data-form]"); // находим на странице форму
// при клике на кнопку "Заполнить таблицу" выполняем функции внутри
// для этого нужна функция, в которую передаётся событие (e от английского слова event)
form.onsubmit = function(e) {
    e.preventDefault(); // отменяем перезагрузку страницы при клике на кнопку
    birthday = document.querySelector("[data-birthday]").value; // получаем введённую дату рождения из поля ввода формы
    isFemaleGender = document.querySelector("[data-gender]").checked; // проверяем, выбран ли женский пол: да или нет (true или false)

    livedWeeks = calcWeeks(birthday); // вычисляем количество прожитых недель
    calcRetiredAge(isFemaleGender); // вычисляем возраст пенсии
    colorizeDots(livedWeeks); // закрашиваем точки-недели в таблице
    showingMiddleAge(isFemaleGender); // меняем информацию о среднем возрасте слева от таблицы с точками
  };


let middleAgeElement = document.querySelector("[data-middle]"); // находим на странице элемент, в который впишем средний возраст
let genderElement = document.querySelector("[data-sex]"); // находим на странице элемент, в который впишем пол