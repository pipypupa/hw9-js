// Завдання 1

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(["Mango", "Poly", "Ajax"]);

// Завдання 2

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  return words.length * pricePerWord;
}

console.log(calculateEngravingPrice("Hello world", 10));
console.log(calculateEngravingPrice("JavaScript is awesome", 5));

// Завдання 3

function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(
  findLongestWord("Красива природа завжди надихає мене на нові ідеї")
);

// Завдання 4

function formatString(string) {
  if (string.length <= 40) {
    return string;
  }
  return string.slice(0, 40) + "...";
}

console.log(formatString("Красива природа вражає своєю величчю та гармонією"));
console.log(formatString("Природа надихає нас на нові звершення."));

// Завдання 5

function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

console.log(checkForSpam("Get the best SALE offers now!")); // Виведе: true
console.log(checkForSpam("Hello world")); // Виведе: false
console.log(checkForSpam("SPAM is everywhere!")); // Виведе: true

// Завдання 6

const numbers = [];
let total = 0;

while (true) {
    const input = prompt('Введіть число:');

    if (input === null) {
        break;
    }

    const number = Number(input);
    if (Number.isNaN(number)) {
        alert('Було введено не число, спробуйте ще раз.');
        continue;
    }

    numbers.push(number);
    console.log(`Число ${number} додано до масиву.`);
}

if (numbers.length > 0) {
    for (const num of numbers) {
        total += num;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log('Масив порожній, немає чисел для підрахунку.');
}

