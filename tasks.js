/* 
1.1 Необходимо посчитать количество кошек, количество собак и средний целочисленный возраст животных.
Функция должна возвращать объект вида:
*/

function checker(arr) {
  let result = { dogs: 0, cats: 0, avgage: 0 };
  arr.map((el) => {
    el.type === "cat" ? result.cats++ : result.dogs++;
    result.avgage += el.age;
  });

  result.avgage = Math.round(result.avgage / arr.length);
  return result;
}

/* 
1.2 Необходимо посчитать, сколько черных породистых собак находится среди предоставленных данных.
На породу указывает поле breed в исходных данных.

Функция должна возвращать число.
*/

function checkBlack(arr) {
  return arr.filter(
    (el) => el.type === "dog" && el.breed & el.features.includes("black")
  ).length;
}

/* 
1.3 Необходимо отфильтровать предоставленные данные, оставить только черных кошек и белых собак.
*/

function checkCatsAndDogs(arr) {
  return arr.filter(
    (el) =>
      (el.type === "cat" && el.features.includes("black")) ||
      (el.type === "dog" && el.features.includes("white"))
  );
}

/*
1.4 Необходимо отсортировать исходный массив данных по критериям:
Все кошки по возрасту (по убыванию)
Все собаки по возрасту (по возрастанию)
Функция должна возвращать массив объектов.
*/

function ageSort(arr) {
  return arr
    .sort((a, b) => (a.type === "cat" ? b.age - a.age : a.age - b.age))
    .sort((a, b) => (a.type === "cat" && b.type === "dog" ? -1 : 1));
}

/*
2.1. Напишите свою реализацию функции возведения в степень.
*/

function sqrt(a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
}

// Если использовать ES6, то можно так

function sqrtSecond(a, b) {
  return a ** b;
}

/* 
2.2. Напишите свою реализацию функции flat для массива неограниченной вложенности.
*/

function convertArray(arr) {
  let result = [];
  arr.map((el) =>
    !Array.isArray(el)
      ? result.push(el)
      : (result = result.concat(convertArray(el)))
  );
  return result;
}
