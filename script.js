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

  {
    id: 5,
    q: "В компании я предоставляю возможность другим шутить и рассказывать всякие истории",
    factor: "F",
    a: [
      { text: "Да", points: 0 },
      { text: "Иногда", points: 1 },
      { text: "Нет", points: 2 },
    ],
  },
  {
    id: 6,
    q: "Мне важно, чтобы во всем, что меня окружает, не было беспорядка",
    factor: "G",
    a: [
      { text: "Верно", points: 2 },
      { text: "Трудно сказать", points: 1 },
      { text: "Неверно", points: 0 },
    ],
  },
  {
    id: 7,
    q: "Большинство людей, с которыми я бываю в компаниях, несомненно, рады меня видетьМне важно, чтобы во всем, что меня окружает, не было беспорядка",
    factor: "H",
    a: [
      { text: "Да", points: 2 },
      { text: "Иногда", points: 1 },
      { text: "Нет", points: 0 },
    ],
  },
  {
    id: 8,
    q: "Я бы скорее занимался",
    factor: "I",
    a: [
      { text: "Фехтованием и танцами", points: 2 },
      { text: "Затруднясь ответить", points: 1 },
      { text: "Борьбой и баскетболом", points: 0 },
    ],
  },
  {
    id: 9,
    q: "Меня забавляет, что то, что люди делают, совсем не похоже на то, что они потом рассказывают об этом",
    factor: "L",
    a: [
      { text: "Да", points: 2 },
      { text: "Иногда", points: 1 },
      { text: "Нет", points: 0 },
    ],
  },
  {
    id: 10,
    q: "Читая о каком-либо происшествии, я интересуюсь всеми подробностями",
    factor: "M",
    a: [
      { text: "Всегда", points: 0 },
      { text: "Иногда", points: 1 },
      { text: "Редко", points: 2 },
    ],
  },
  {
    id: 11,
    q: "Когда друзья подшучивают надо мной, я обычно смеюсь вместе со всеми и вовсе не обижаюсь",
    factor: "N",
    a: [
      { text: "Верно", points: 0 },
      { text: "Не знаю", points: 1 },
      { text: "Неверно", points: 2 },
    ],
  },
  {
    id: 12,
    q: "Если мне кто-нибудь нагрубит, я могу быстро забыть об этом",
    factor: "O",
    a: [
      { text: "Верно", points: 0 },
      { text: "Не знаю", points: 1 },
      { text: "Неверно", points: 2 },
    ],
  },
  {
    id: 13,
    q: "Мне больше нравится придумывать новые способы выполнения какой-либо работы, чем придерживаться испытанных приемов",
    factor: "Q1",
    a: [
      { text: "Верно", points: 2 },
      { text: "Не знаю", points: 1 },
      { text: "Неверно", points: 0 },
    ],
  },
  {
    id: 14,
    q: "Когда я планирую что-нибудь, я предпочитаю делать это самостоятельно, без чьей-либо помощи",
    factor: "Q2",
    a: [
      { text: "Верно", points: 2 },
      { text: "Иногда", points: 1 },
      { text: "Нет", points: 0 },
    ],
  },
  {
    id: 15,
    q: "Я думаю, что я менее чувствительный и легко возбудимый, чем большинство людей",
    factor: "Q3",
    a: [
      { text: "Верно", points: 2 },
      { text: "Затрудняюсь ответить", points: 1 },
      { text: "Неверно", points: 0 },
    ],
  },
  {
    id: 16,
    q: "Меня раздражают люди, которые не могут быстро принимать решение",
    factor: "Q4",
    a: [
      { text: "Верно", points: 2 },
      { text: "Не знаю", points: 1 },
      { text: "Неверно", points: 0 },
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
