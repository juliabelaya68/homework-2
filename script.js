//1игра угадай число
function oneGame() {
    let n = Math.floor(Math.random() * 101);
    console.log(n);

    while (true) {

        let x = prompt("Введите число от 0 до 100");

        if (isNaN(x)) {
            alert('Ошибка ввода, нужно ввести число');
        } else if (x < n) {
            alert('Загаданое число должно быть больше');
        } else if (x > n) {
            alert('Загаданое число должно быть меньше');
        } else {
            alert('Число угадано!');
            break;
        }
    }
}

//5игра камень ножницы бумага
function fifthGame() {
    const arr = ['камень', 'ножницы', 'бумага'];

    function rockPaperScissors() {

        const useChoice = prompt('Сделай выбор! Камень,ножницы,бумага!');

        const random = Math.floor(Math.random() * arr.length);

        const pcCoice = arr[random];

        console.log(pcCoice);
        console.log(useChoice);


        if (useChoice.toLowerCase() === pcCoice) {
            alert(`ничья! компьютер выбрал тоже ${pcCoice}!`)

        } else if ((useChoice.toLowerCase() === "камень" && pcCoice === "ножницы") ||

            (useChoice.toLowerCase() === 'ножницы' && pcCoice === 'бумага') ||

            (useChoice.toLowerCase() === 'бумага' && pcCoice === 'камень')
        ) {

            alert(`вы победили! выбор компьютера ${pcCoice}!`)
        } else {
            alert(`победил компьютер! выбор компьютера ${pcCoice}!`)
        }
    }

    rockPaperScissors();
}


//2Игра арифметика, заработала!
function twoGame() {
    const arithmetic = ['+', '-', '*', '/'];

    const number1 = Math.floor(Math.random() * 11); Math.floor(Math.random() * 101);
    const number2 = Math.floor(Math.random() * 11);
    const generatesArithmetic = Math.floor(Math.random() * arithmetic.length);
    const generates = arithmetic[generatesArithmetic];

    function taskArithmetic() {
        return (`${number1} ${generates} ${number2}`);
    }
    alert(taskArithmetic());
    const result = eval(taskArithmetic());


    const userAnswer = prompt("Посчитай и запиши ответ");
    if (isNaN(userAnswer)) {
        alert('Ошибка ввода!Введи число');
    } else if (userAnswer == result) {
        alert('Верный ответ!');
    } else {
        alert('Не верно.Попробуй еще!');
    }

    taskArithmetic();
}



//3 игра перевни текст

function textGame() {

    const userText = prompt('Введи текст и прочитай его наоборот');

    function reverseText(str) {
        let newText = "";

        for (let i = str.length - 1; i >= 0; i--) {
            newText += str[i];
        }
        return newText;
    }

    alert(reverseText(userText));
}


function startQuiz() {
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];


    let score = 0;

    quiz.forEach((q, index) => {
        const userAnswer = prompt(`${index + 1}. ${q.question}\n${q.options.join('\n')}`);
        const selectedOption = parseInt(userAnswer);

        if (selectedOption === q.correctAnswer) {
            score++;
            alert('Правильный ответ!');
        } else {
            alert('Ответ неправильный!');
        }
    });

}

// Генератор случайных цветов

const changeColorButton = document.querySelector('#changeColorButton');

changeColorButton.addEventListener('click', function () {
    const randomColor = `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;
    const mainElement = document.querySelector('.main');
    const gamesElement = document.querySelector('.mini-games');
    mainElement.style.backgroundColor = randomColor;
    gamesElement.style.backgroundColor = randomColor;
});

function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}


// мобильный генератор цветов

const mobileColorButton = document.querySelector('#mobileColorButton');

mobileColorButton.addEventListener('click', function () {
    const randomColor = `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;
    const mainElement = document.querySelector('.main');
    const gamesElement = document.querySelector('.mini-games');
    mainElement.style.backgroundColor = randomColor;
    gamesElement.style.backgroundColor = randomColor;
});

function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}


//Прокрутка полосы
const headerLine = document.querySelector('.header__line');
let scrollPosition = 0;
const scrollStep = 1;
const scrollInterval = 50;

setInterval(() => {
    scrollPosition -= scrollStep;
    headerLine.style.backgroundPosition = `${scrollPosition}px 0`;
}, scrollInterval);



document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});








