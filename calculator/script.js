 // переменная, в которой хранится выбранное математическое действие
 var op;

 // функция, которая подсветит выбранное математическое действие
 function sel_ligth(sel_id) {
   // убираем класс подсветки со всех кнопок
   document.getElementById("plus").classList.remove("light");
   document.getElementById("minus").classList.remove("light");
   document.getElementById("times").classList.remove("light");
   document.getElementById("divide").classList.remove("light");

   // и добавляем его только к нажатой
   document.getElementById(sel_id).classList.add("light");

   // в зависимости от нажатой клавиши меняем значение переменной op
   switch (sel_id) {
     case "plus":
       op = "+"
       break;
     case 'minus':
       op = '-'
       break;
     case 'times':
       op = "*"
       break;
     case 'divide':
       op = "/"
       break;
   }
 }

 // добавляем обработчик нажатия на клавиши ко второму полю ввода
 document.getElementById("num2").addEventListener('keydown', function (e) {
   if (e.keyCode === 13) {
     func();
   }
 });

 // функция расчёта
 function func() {
   // переменная для результата
   var result;
   // получаем первое и второе число
   var num1_str = String(document.getElementById("num1").value);
   var num2_str = String(document.getElementById("num2").value);

   // проверяем, не пустая ли первая строка
   if ((num1_str.length == 0) || (num1_str.indexOf(' ') != -1)) {
     // если пустая — пишем сообщение
     document.getElementById("result").innerHTML = 'Вы не ввели первое число или добавили пробел в поле ввода';
     // и выходим из функции
     return;
   }

   // проверяем, не пустая ли вторая строка
   if ((num2_str.length == 0) || (num2_str.indexOf(' ') != -1)) {
     // если пустая — пишем сообщение
     document.getElementById("result").innerHTML = 'Вы не ввели второе число или добавили пробел в поле ввода';
     // и выходим из функции
     return;
   }

   // переводим строки в числа
   let num1 = Number(num1_str)
   let num2 = Number(num2_str)


   // проверяем, получилось ли число из первой строки или нет
   if (isNaN(num1)) {
     // если не получилось — пишем сообщение
     document.getElementById("result").innerHTML = 'Калькулятор не может распознать первое число. Проверьте его, пожалуйста';
     // и выходим из функции
     return;
   }

   // проверяем, получилось ли число из второй строки или нет
   if (isNaN(num2)) {
     // если не получилось — пишем сообщение
     document.getElementById("result").innerHTML = 'Калькулятор не может распознать второе число. Проверьте его, пожалуйста';
     // и выходим из функции
     return;
   }

   // проверяем размер чисел
   if ((num1 > 99999999) || (num2 > 99999999)) {
     // если не помещается одно из них в диапазон — пишем сообщение
     document.getElementById("result").innerHTML = 'Калькулятор может работать с числами не больше 99 999 999';
     // и выходим из функции
     return;
   }

   // проверяем второе число при делении
   if ((num2 == 0) && (op == '/')) {
     // если не получилось — пишем сообщение
     document.getElementById("result").innerHTML = 'На ноль делить нельзя';
     // и выходим из функции
     return;
   }

   // смотрим, что было в переменной с действием, и действуем исходя из этого
   switch (op) {
     case '+':
       result = num1 + num2;
       break;
     case '-':
       result = num1 - num2;
       break;
     case '*':
       result = num1 * num2;
       break;
     case '/':
       result = num1 / num2;
       break;
     default:
       result = 'Выберите действие'
   }

   // отправляем результат на страницу
   document.getElementById("result").innerHTML = result;
 }
