//todo Создаем константу = массив объектов с вопросами и значениями ответов

const Questions = [
  {
    id: 0,
    q: "Я думаю, моя память сейчас лучше, чем была раньше",
    factor: "MD",
    a: [
      { text: "Да", points: 2 },
      { text: "Трудно сказать", points: 1 },
      { text: "Нет", points: 0 },
    ],
  },
  {
    id: 1,
    q: "Я бы вполне мог жить один, вдали от людей",
    factor: "A",
    a: [
      { text: "Да", points: 0 },
      { text: "Иногда", points: 1 },
      { text: "Нет", points: 2 },
    ],
  },
  {
    id: 2,
    q: "Если бы я сказал, что небо находится внизу и что зимой жарко, я должен был бы назвать преступника",
    factor: "B",
    a: [
      { text: "Бандитом", points: 0 },
      { text: "Святым", points: 1 },
      { text: "Тучей", points: 0 },
    ],
  },
  {
    id: 3,
    q: "Когда я ложусь спать, я",
    factor: "С",
    a: [
      { text: "Засыпаю быстро", points: 2 },
      { text: "Нечто среднее", points: 1 },
      { text: "Засыпаю с трудом", points: 0 },
    ],
  },
  {
    id: 4,
    q: "Если бы я вел машину по дороге, где много других автомобилей, я предпочел бы",
    factor: "E",
    a: [
      { text: "Пропустить вперед большинство машин", points: 0 },
      { text: "Не знаю", points: 1 },
      { text: "Обогнать все идущие впереди машины", points: 2 },
    ],
  },
];
/**
 * ! функция repeat
 * записывает в html вопрос и вариант ответа
 * при нажатии на кнопку варианта подсвечивает её
 * ! функция next
 * todo при нажатии на кноку "Next" записывает баллы за ответ в переменную score
 * todo на последнем вопросе кнопку "Next" заменяет кнопка "Show result"
 * todo при нажатии на "Show result" на странице отображает результат теста
 * */

function repeat(id) {
  //* Show question text & options

  const question = document.getElementById("question");

  question.innerText = Questions[id].q;

  const answerA = document.getElementById("option1");
  const answerB = document.getElementById("option2");
  const answerC = document.getElementById("option3");

  answerA.innerText = Questions[id].a[0].text;
  answerB.innerText = Questions[id].a[1].text;
  answerC.innerText = Questions[id].a[2].text;

  //* Coloring selected button
  answerA.addEventListener("click", () => {
    answerA.style.backgroundColor = "#E072A4";
    answerB.style.backgroundColor = "#88df60";
    answerC.style.backgroundColor = "#88df60";
  });

  answerB.addEventListener("click", () => {
    answerA.style.backgroundColor = "#88df60";
    answerB.style.backgroundColor = "#E072A4";
    answerC.style.backgroundColor = "#88df60";
  });

  answerC.addEventListener("click", () => {
    answerA.style.backgroundColor = "#88df60";
    answerB.style.backgroundColor = "#88df60";
    answerC.style.backgroundColor = "#E072A4";
  });
}
//* Declaring variables, that count score of each factor
let scoreMD = 0;
let scoreA = 0;
let scoreB = 0;
let scoreC = 0;
let scoreE = 0;
let scoreF = 0;
let scoreG = 0;
let scoreH = 0;
let scoreI = 0;
let scoreL = 0;
let scoreM = 0;
let scoreN = 0;
let scoreO = 0;
let scoreQ1 = 0;
let scoreQ2 = 0;
let scoreQ3 = 0;
let scoreQ4 = 0;
//* Declaring variable that count questions
let currentQuestionNumber = 0;

repeat(currentQuestionNumber);
//*Get next buton
const next = document.getElementById("next-button");

//* при нажатии на кноку "Next" обновляет вопрос и варианты ответов
next.addEventListener("click", (id) => {
  if (currentQuestionNumber < 104) {
    currentQuestionNumber++;
    repeat(currentQuestionNumber);
  } else {
    console.log(score); //todo дописать функцию чтобы заменяла кнопку и считала очки
  }
});
