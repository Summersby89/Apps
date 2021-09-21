// Описание домашнего задания доступно по ссылке
// https://github.com/netology-code/sd-homeworks/tree/new-hw/talk

// Задача 1.
// Отформатируйте код ниже, используя кодстайл: https://github.com/netology-code/codestyle/tree/master/js
function showingMiddleAge(isFemaleGender) {

    let middleAge;
    let genderName;
      if (isFemaleGender) {
        // Задача 2.
        // Присвойте переменной среднего возраста значение 77.6 — средний возраст для женщин.
        // Присвойте переменной названия пола строку 'женщин'.
        // Пишите код ниже:
          middleAge = 77.6;
          genderName = 'женщин';
      } else {
        // Задача 2.
        // Присвойте переменной среднего возраста значение 67.5 — средний возраст для мужчин.
        // Присвойте переменной названия пола строку 'мужчин'.
        // Пишите код ниже:
        middleAge = 67.5;
        genderName = 'мужчин';
      }
    // Задача 3.
    // Создайте переменную testGenderNameAndMiddleAge.
    // Присвойте переменной результат склейки переменных middleAge, genderName и тире в качестве разделителя.
    // Для склейки используйте оператор +.
    // Выведите в консоль переменную testGenderNameAndMiddleAge.
    // Пишите код ниже:
    let testGenderNameAndMiddleAge;

    testGenderNameAndMiddleAge = middleAge + '-' + genderName;

    console.log(testGenderNameAndMiddleAge);


    // Это вывод эталона в консоль:
    console.log("Эталон:", genderName, '-', middleAge);
    // Подставляем присвоенные значения возраста и пола в элемент справа от таблицы с кружками:
    middleAgeElement.setAttribute('data-middle', middleAge);
    genderElement.setAttribute('data-sex', genderName);
    // Меняем значение переменной CSS, чтобы фигурная скобочка поменяла свою высоту:
    document.documentElement.style
        .setProperty('--lifespan', middleAge);
}

/* showingMiddleAge — функция отображения актуальных данных для выбранного возраста, в качестве аргумента в которую мы передаём выбраный пол (isFemaleGender).
С помощью этой функции мы, если женский пол выбран — if (isFemaleGender) — подставляем в элемент справа от таблицы с кружками среднюю продолжительность жизни женщин, а если не выбран, то мужчин.*/