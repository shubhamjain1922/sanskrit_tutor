const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []
let arr=[];
for(let i=0;i<15;i++)
{
    arr[i]=Math.floor((Math.random() * 100) + 1);
}
const data=dictionary;
console.log(arr);
let questions = [
    {
        question: 'Meaning of Sanskrit word - '+data[Object.keys(data)[arr[0]]].meanings[0].def,
        choice1: ' '+Object.keys(data)[arr[0]+Math.floor((Math.random() * 10) + 1)],
        choice2: ' '+Object.keys(data)[arr[0]],
        choice3: ' '+Object.keys(data)[arr[0]+Math.floor((Math.random() * 20) + 1)],
        choice4: ' '+Object.keys(data)[arr[0]+Math.floor((Math.random() * 30) + 1)],
        answer: 2
    },
    {
        question: 'The Sanskrit word of this English text - '+Object.keys(data)[arr[1]],
        choice1: ' '+data[Object.keys(data)[arr[1]+Math.floor((Math.random() * 10) + 1)]].meanings[0].def,
        choice2: ' '+data[Object.keys(data)[arr[1]+Math.floor((Math.random() * 20) + 1)]].meanings[0].def,
        choice3: ' '+data[Object.keys(data)[arr[1]]].meanings[0].def,
        choice4: ' '+data[Object.keys(data)[arr[1]+Math.floor((Math.random() * 30) + 1)]].meanings[0].def,
        answer: 3
    },
    {
        question: 'The Sanskrit word of this English text - '+Object.keys(data)[arr[3]],
        choice1: ' '+data[Object.keys(data)[arr[3]+Math.floor((Math.random() * 10) + 1)]].meanings[0].def,
        choice2: ' '+data[Object.keys(data)[arr[3]+Math.floor((Math.random() * 20) + 1)]].meanings[0].def,
        choice3: ' '+data[Object.keys(data)[arr[3]]].meanings[0].def,
        choice4: ' '+data[Object.keys(data)[arr[3]+Math.floor((Math.random() * 30) + 1)]].meanings[0].def,
        answer: 3
    },
    {
        question: 'Meaning of Sanskrit word - '+data[Object.keys(data)[arr[2]]].meanings[0].def,
        choice2: ' '+Object.keys(data)[arr[2]+Math.floor((Math.random() * 10) + 1)],
        choice1: ' '+Object.keys(data)[arr[2]],
        choice3: ' '+Object.keys(data)[arr[2]+Math.floor((Math.random() * 20) + 1)],
        choice4: ' '+Object.keys(data)[arr[2]+Math.floor((Math.random() * 30) + 1)],
        answer: 1
     },
     {
        question: 'The Sanskrit word of this English text - '+Object.keys(data)[arr[4]],
        choice1: ' '+data[Object.keys(data)[arr[4]+Math.floor((Math.random() * 10) + 1)]].meanings[0].def,
        choice2: ' '+data[Object.keys(data)[arr[4]+Math.floor((Math.random() * 20) + 1)]].meanings[0].def,
        choice4: ' '+data[Object.keys(data)[arr[4]]].meanings[0].def,
        choice3: ' '+data[Object.keys(data)[arr[4]+Math.floor((Math.random() * 30) + 1)]].meanings[0].def,
        answer: 4
    },
    {
        question: 'Meaning of Sanskrit word - '+data[Object.keys(data)[arr[5]]].meanings[0].def,
        choice1: ' '+Object.keys(data)[arr[5]+Math.floor((Math.random() * 10) + 1)],
        choice2: ' '+Object.keys(data)[arr[5]],
        choice3: ' '+Object.keys(data)[arr[5]+Math.floor((Math.random() * 20) + 1)],
        choice4: ' '+Object.keys(data)[arr[5]+Math.floor((Math.random() * 30) + 1)],
        answer: 2
     },
     {
        question: 'Meaning of Sanskrit word - '+data[Object.keys(data)[arr[6]]].meanings[0].def,
        choice2: ' '+Object.keys(data)[arr[6]+Math.floor((Math.random() * 10) + 1)],
        choice3: ' '+Object.keys(data)[arr[6]],
        choice1: ' '+Object.keys(data)[arr[6]+Math.floor((Math.random() * 20) + 1)],
        choice4: ' '+Object.keys(data)[arr[6]+Math.floor((Math.random() * 30) + 1)],
        answer: 3
     },
     {
        question: 'Meaning of Sanskrit word - '+data[Object.keys(data)[arr[7]]].meanings[0].def,
        choice2: ' '+Object.keys(data)[arr[7]+Math.floor((Math.random() * 10) + 1)],
        choice1: ' '+Object.keys(data)[arr[7]],
        choice3: ' '+Object.keys(data)[arr[7]+Math.floor((Math.random() * 20) + 1)],
        choice4: ' '+Object.keys(data)[arr[7]+Math.floor((Math.random() * 30) + 1)],
        answer: 1
     },
     {
        question: 'The Sanskrit word of this English text - '+Object.keys(data)[arr[8]],
        choice1: ' '+data[Object.keys(data)[arr[8]+Math.floor((Math.random() * 10) + 1)]].meanings[0].def,
        choice2: ' '+data[Object.keys(data)[arr[8]+Math.floor((Math.random() * 20) + 1)]].meanings[0].def,
        choice4: ' '+data[Object.keys(data)[arr[8]]].meanings[0].def,
        choice3: ' '+data[Object.keys(data)[arr[8]+Math.floor((Math.random() * 30) + 1)]].meanings[0].def,
        answer: 4
    },
    {
        question: 'The Sanskrit word of this English text - '+Object.keys(data)[arr[9]],
        choice1: ' '+data[Object.keys(data)[arr[9]+Math.floor((Math.random() * 10) + 1)]].meanings[0].def,
        choice2: ' '+data[Object.keys(data)[arr[9]+Math.floor((Math.random() * 20) + 1)]].meanings[0].def,
        choice4: ' '+data[Object.keys(data)[arr[9]]].meanings[0].def,
        choice3: ' '+data[Object.keys(data)[arr[9]+Math.floor((Math.random() * 30) + 1)]].meanings[0].def,
        answer: 4
    },
    {
        question: 'The Sanskrit word of this English text - '+Object.keys(data)[arr[10]],
        choice4: ' '+data[Object.keys(data)[arr[10]+Math.floor((Math.random() * 10) + 1)]].meanings[0].def,
        choice2: ' '+data[Object.keys(data)[arr[10]+Math.floor((Math.random() * 20) + 1)]].meanings[0].def,
        choice1: ' '+data[Object.keys(data)[arr[10]]].meanings[0].def,
        choice3: ' '+data[Object.keys(data)[arr[10]+Math.floor((Math.random() * 30) + 1)]].meanings[0].def,
        answer: 1
    },
    {
        question: 'Meaning of Sanskrit word - '+data[Object.keys(data)[arr[11]]].meanings[0].def,
        choice1: ' '+Object.keys(data)[arr[11]+Math.floor((Math.random() * 10) + 1)],
        choice2: ' '+Object.keys(data)[arr[11]],
        choice3: ' '+Object.keys(data)[arr[11]+Math.floor((Math.random() * 20) + 1)],
        choice4: ' '+Object.keys(data)[arr[11]+Math.floor((Math.random() * 30) + 1)],
        answer: 2
     },
     {
        question: 'Meaning of Sanskrit word - '+data[Object.keys(data)[arr[12]]].meanings[0].def,
        choice1: ' '+Object.keys(data)[arr[12]+Math.floor((Math.random() * 10) + 1)],
        choice2: ' '+Object.keys(data)[arr[12]],
        choice3: ' '+Object.keys(data)[arr[12]+Math.floor((Math.random() * 20) + 1)],
        choice4: ' '+Object.keys(data)[arr[12]+Math.floor((Math.random() * 30) + 1)],
        answer: 2
     },
     {
        question: 'The Sanskrit word of this English text - '+Object.keys(data)[arr[13]],
        choice4: ' '+data[Object.keys(data)[arr[13]+Math.floor((Math.random() * 10) + 1)]].meanings[0].def,
        choice2: ' '+data[Object.keys(data)[arr[13]+Math.floor((Math.random() * 20) + 1)]].meanings[0].def,
        choice1: ' '+data[Object.keys(data)[arr[13]]].meanings[0].def,
        choice3: ' '+data[Object.keys(data)[arr[13]+Math.floor((Math.random() * 30) + 1)]].meanings[0].def,
        answer: 1
    },
    {
        question: 'The Sanskrit word of this English text - '+Object.keys(data)[arr[14]],
        choice4: ' '+data[Object.keys(data)[arr[14]+Math.floor((Math.random() * 10) + 1)]].meanings[0].def,
        choice2: ' '+data[Object.keys(data)[arr[14]+Math.floor((Math.random() * 20) + 1)]].meanings[0].def,
        choice3: ' '+data[Object.keys(data)[arr[14]]].meanings[0].def,
        choice1: ' '+data[Object.keys(data)[arr[14]+Math.floor((Math.random() * 30) + 1)]].meanings[0].def,
        answer: 3
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()