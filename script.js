// //1 Задание
// let a = 1,
//   b = 1,
//   c,
//   d;
// c = ++a;
// // сначала переменной C присваивается значение A, а после отрабатывает оператор инкремента и консоль лог показывает обновлённое значение

// d = b++;
// // тут ситуация идёт наоборот, инкеремент также добавил +1 к значению, но т.к. он стоит после значения, то консоль лог возвращает старое значение, т.е. 1

// c = 2 + ++a;

// d = 2 + b++

// //2 Задание

// let a = 2;
// let x = 1 + (a *= 2);
// // Ответ 5, т.к. в скобках действие умножения будет первым, 2 умж. на 2, после чего уже складывается с 1

// // 3 Задание
// let a = 10;
// let b = 7;

// function move(x, y) {
//   if (x >= 0 && y >= 0) {
//     console.log(x - y, "оба положительные");
//   } else if (x < 0 && y < 0) {
//     console.log(x * y, "оба отрицательные");
//   } else {
//     console.log(x + y, "иные условия");
//   }
// }
// move(a, b);

//4 Задание

// function summ(a,b) {
//   return a+b
// }

// function subtraction(a,b) {
//   return a-b
// }

// function division(a,b) {
//   return a/b
// }

// function multiplication(a,b) {
//   return a*b
// }

//5 Задание

// function mathOperation(arg1, arg2, operation) {
//   switch (operation) {
//     case "summ":
//       return arg1 + arg2;
//     case "subtraction":
//       return arg1 - arg2;
//     case "division":
//       return arg1 / arg2;
//     case "multiplication":
//       return arg1 * arg2;
//     default:
//       break;
//   }
// }

//6 Задание

// function money() {
//   let money = prompt().split("");
//   function getLastWord() {
//     if (money[money.length - 1] == 1) {
//       return "рубль";
//     } else if (
//       money.join("") == 10 ||
//       money.join("") == 500 ||
//       money.join("") == 47 ||
//       money.join("") == 100 ||
//       money.join("") == 99
//     ) {
//       return "рублей";
//     } else if (1 < money[money.length - 1] < 4) {
//       return "рубля";
//     } else {
//       return "рублей";
//     }
//   }

//   alert(`Ваша сумма в ${money.join("")} ${getLastWord()} успешно зачислена`);
// }

// money();
