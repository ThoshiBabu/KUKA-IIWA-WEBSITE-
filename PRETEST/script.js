const startBtn = document.querySelector('.start-button');
const popupInfo = document.querySelector('.Popup-info');
const existBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgain = document.querySelector('.tryagain-btn');
const homeBtn = document.querySelector('.gohome-btn');


startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

existBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
    headerScore();
}

tryAgain.onclick = () => {
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionCount + 1);

    headerScore();
}

homeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionCount + 1);

  
}


let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector('.next-button');

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        questionCounter(questionCount + 1);
        
        nextBtn.classList.remove('active');


    } else {
        showResultBox();
    }
};


const optionList = document.querySelector('.option-list');

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0;i < option.length; i++ ){
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let alloptions = optionList.children.length;
    
    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore =  userScore + 1;
        headerScore();
    }

    else {
        answer.classList.add('incorrect');

        for(let i = 0; i < alloptions; i++) {
           if(optionList.children[i].textContent == correctAnswer){

              optionList.children[i].setAttribute('class','option correct');

        }
      }
    }
    for (let i = 0; i< alloptions; i++ ) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active'); 

}


function questionCounter(index){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-test');
    scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    
    let progressStartValue = -1 ;
    let progressEndValue = (userScore / questions.length) * 100 ;

    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;
        
        progressValue.textContent = `${progressStartValue}%`;

        circularProgress.style.background = `conic-gradient( rgb(34, 119, 176) ${progressStartValue * 3.6}deg, rgba(255, 255, 255,.1) 0deg)`;

        if (progressStartValue == progressEndValue){
            clearInterval(progress);
        }
  
    }, speed);

}


let questions = [
    {
        numb: 1,
        question: "What type of feedback does the KUKA iiwa robot provide to ensure safe human-robot interaction?",
        answer: "3. Force-torque feedback",
        options: [
            "1. Visual feedback",
            "2. Thermal feedback",
            "3. Force-torque feedback",
            "4. Acoustic feedback",
        ]
    },
    {
        numb: 2,
        question: "What is the maximum payload capacity of the KUKA iiwa 14 R820 robot?",
        answer: "3. 14kg",
        options: [
            "1. 7kg",
            "2. 10kg",
            "3. 14kg",
            "4. 20kg",
        ]
    },
    {
        numb: 3,
        question: "What is the degree of freedom for the KUKA iiwa Robot  ",
        answer: "1. 7",
        options: [
            "1. 7",
            "2. 5",
            "3. 3",
            "4. 4",
        ]
    },
    {
        numb: 4,
        question: "Which MATLAB toolbox is commonly used for simulating the KUKA iiwa robot? ",
        answer: "3.Robotics System Toolbox",
        options: [
            "1.Signal Processing Toolbox",
            "2.Image Processing Toolbox",
            "3.Robotics System Toolbox",
            "4.Simulink Control Design",
        ]
        
    },
    {
        numb: 5,
        question: "When simulating the KUKA iiwa robot in MATLAB using the Robotics System Toolbox, which function is typically used to create a rigid body tree model of the robot?",
        answer: "2.rigidBodyTree()",
        options: [
            "1.createRobotModel()",
            "2.rigidBodyTree()",
            "3.robotics.RigidBody()",
            "4.robotModel()",
        ]
    }
];
