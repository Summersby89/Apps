// Описание домашнего задания доступно по ссылке 
// https://github.com/netology-code/sd-homeworks/tree/new-hw/errors

// Находим все точки-недели на странице:
let dots = document.getElementsByClassName("app-table__body-dot"); 

function emptyDots() {
  for (let i = 0; i < dots.length; i++) {
    // Задача 1.
    // Откройте следующее домашнее задание (hw-4.js) и посмотрите, какие в нём используются классы для точек.
    // В коде ниже исправьте ошибки в именах классов так, чтобы при вызове данной функции точки очищались:
    dots[i].classList.remove('_young'); 
    dots[i].classList.remove('_adult');
    dots[i].classList.remove('_senior');
    dots[i].classList.add('_empty');
  }
}

// emptyDots — функция, которая при повторном заполнении таблицы "обнуляет" все точки. Никаких аргументов в неё не передаём.
// В этой функции мы перебираем точки-недели одну за другой и с помощью .remove удаляем классы, которые нам не нужны, а с помощью .add добавляем класс, отвечающий за внешний вид пустой точки.