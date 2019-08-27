
const submit = document.getElementById('submit');
const answer = document.getElementById('answer');
const messages = document.getElementById('messages');


const arrayAnswer = ['Тиха вода греблю рве', 'Близько лікоть, та не вкусиш', 'Нема диму без вогню',
  'Коли рак на горі свисне', 'Коза на базар не хотіла йти, та її повели', 'Добре подумайте',
  'Тихше їдеш — далі будеш', 'Клин клином вибивають', 'Що з воза впало, те пропало',
  'Нехай буде гречка, аби не суперечка', 'Смерть не справник — не підкупиш', 'Зупиніться'];

const array = [];
const now = new Date();


function getArray() {

  const name = document.getElementById('name');
  const question = document.getElementById('question');

  if (name.value !== '' && question.value !== '') {
    const arr = {
      name: name.value,
      question: question.value,
      answer: randomArray(arrayAnswer),
    };
    array.push(arr);
    name.value = '';
    question.value = '';
  } 

console.log('click', array);

  arrayMessages(array);
}

function randomArray(arrValue) {
  const arrLength = arrValue.length;
  let answerSend = arrayAnswer[Math.floor(Math.random() * arrLength)];
  answer.innerHTML = answerSend;
  return answerSend;
};

function arrayMessages(arr) {
  if (arr.length >= 0) {
    let tmp = '';
    for (let i = 0; i < arr.length; i++) {
      tmp += messagesItem(i, arr[i]);
    }
    messages.innerHTML = tmp;
  }
}

function messagesItem(i, item) {
  return `
    <tr>
   <td>${item.name}</td>
    <td>${item.question}</td>
    <td>${item.answer}</td>
  </tr>
    `;
}


submit.addEventListener('click', getArray);
