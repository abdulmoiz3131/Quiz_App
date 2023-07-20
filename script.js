const questions = [{
    'q': 'Which is the Biggest Continent in World ?',
    'a': 'Asia',
    'b': 'Europe',
    'c': 'Africa',
    'd': 'America',
    'correct': 'a'
},
{
    'q': 'Which is the Biggest Country in the World?',
    'a': 'America',
    'b': 'New Zeeland',
    'c': 'Russia',
    'd': 'Pakistan',
    'correct': 'c'
},
{
    'q': 'What official name was given to pakistan in 1956 constitution?',
    'a': 'Pakistan',
    'b': 'Islamic Pakistan',
    'c': 'Islamic republic Pakistan',
    'd': 'Islamic republic of Pakistan',
    'correct': 'd'
},
{
    'q': 'What is the meaning of Pakistan?',
    'a': 'Good Land',
    'b': 'Beautiful Land',
    'c': 'Holy Land',
    'd': 'Islamic Land',
    'correct': 'c'
},
{
    'q': 'Where is the Biggest Shoes factory in Pakistan?',
    'a': 'Islamabad',
    'b': 'Lahore',
    'c': 'Multan',
    'd': 'Quetta',
    'correct': 'b'
},
{
    'q': 'How many Languages are spoken in Pakistan?',
    'a': '12 languages',
    'b': '22 languages',
    'c': '32 languages',
    'd': '42 languages',
    'correct': 'c'
},
{
    'q': 'What is the name of highest peak of Pakistan',
    'a': 'Naga Parbat',
    'b': 'kangchenjunga',
    'c': 'Mount Everest',
    'd': 'K-2 Mountain',
    'correct': 'd'
},
{
    'q': 'What is the National Flower of Pakistan?',
    'a': 'Rose',
    'b': 'Deffodils',
    'c': 'Jasmine',
    'd': 'White Flower',
    'correct': 'c'
},
{
    'q': 'Who was the First Governor General of Pakistan?',
    'a': 'Liaquat Ali Khan',
    'b': 'Quaid-e-Azam',
    'c': 'Fatima Jinnah',
    'd': 'Allama Iqbal',
    'correct': 'b'
},
{
    'q': 'Most Corrupt Personality in Pakistan?',
    'a': 'Nawaz Sharif',
    'b': 'Asif AliZaradari',
    'c': 'Maryam Nawaz',
    'd': 'All of Above',
    'correct': 'd'
},]

const inputOptions = document.querySelectorAll('.options');
const questionBox = document.getElementById('questionBox');
let index = 0;
let total = questions.length;
let right = 0;
wrong = 0;
const loadQuestions = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    const que = document.getElementById('question');
    que.innerText = `${index + 1}  )${data.q}`;
    inputOptions[0].nextElementSibling.innerText = data.a;
    inputOptions[1].nextElementSibling.innerText = data.b;
    inputOptions[2].nextElementSibling.innerText = data.c;
    inputOptions[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    // console.log( ans , data.correct );
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestions();
    return;
}

const getAnswer = () => {
    let answer;
    inputOptions.forEach(
        (input) => {

            if (input.checked) {
                answer = input.value;
            }
        }

    );

    return answer;
}

const reset = () => {
    inputOptions.forEach(
        (input) => {
            input.checked = false;
        })
}

const endQuiz = () => {
    questionBox.innerHTML = `<div style="width:100%;text-align:center;">
    <h2> Thanks For Playing Quiz with Us ! </h2>
    <h1> ${right} / ${total} are correct </h1>
    </div>`

}
loadQuestions();