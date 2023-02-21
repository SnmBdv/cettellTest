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

// function repeat(id)
const question = document.getElementById("question");

question.innerText = Questions[0].q;

const answerA = document.getElementById("option1");
const answerB = document.getElementById("option2");
const answerC = document.getElementById("option3");

answerA.innerText = Questions[0].a[0].text;
answerB.innerText = Questions[0].a[1].text;
answerC.innerText = Questions[0].a[2].text;
