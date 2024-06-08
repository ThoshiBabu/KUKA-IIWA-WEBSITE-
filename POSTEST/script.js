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
        question: "What is the primary objective of implementing Forward Kinematics in a robotic system?",
        answer: "2. To compute the position and orientation of the end-effector relative to the robot's base frame3. Force-torque feedback",
        options: [
            "1. To calculate the joint angles of the robot arm",
            "2. To compute the position and orientation of the end-effector relative to the robot's base frame",
            "3. To optimize the trajectory planning of the robot",
            "4. To evaluate the Jacobian matrix of the robot",
        ]
    },
    {
        numb: 2,
        question: " What is the role of the fitness function in Particle Swarm Optimization for Inverse Kinematics?",
        answer: "2. To evaluate the distance between the end-effector and the target position",
        options: [
            "1. To calculate the velocity of particles",
            "2. To evaluate the distance between the end-effector and the target position",
            "3. To determine the global best position of particles",
            "4. To initialize particles with random joint angles and velocities",
        ]
    },
    {
        numb: 3,
        question: "In the provided code, what is the purpose of the updateEndEffectorPosition function",
        answer: "4. To update the position of the end-effector based on the current joint angles",
        options: [
            "1. To animate the movement of the robotic arm",
            "2. To calculate the inverse kinematics solution using Particle Swarm Optimization",
            "3. To control the lighting conditions in the scene",
            "4. To update the position of the end-effector based on the current joint angles",
        ]
    },
    {
        numb: 4,
        question: "What fundamental information does Forward Kinematics provide in robotics? ",
        answer: " 2. The relationship between joint displacements and end-effector pose in the robot's workspace.",
        options: [
            "1. The joint angles required to achieve a desired end-effector position and orientation.",
            "2. The relationship between joint displacements and end-effector pose in the robot's workspace.",
            "3. The optimal trajectory for the robot arm to reach a specific target.",
            "4. The velocity and acceleration profiles for robotic motion planning.",
        ]
        
    },
    {
        numb: 5,
        question: "In a robotic manipulator with multiple degrees of freedom, how does Forward Kinematics determine the position and orientation of the end-effector?",
        answer: "3. By sequentially applying the Denavit-Hartenberg parameters for each joint.",
        options: [
            "1. By analyzing the forces exerted by the actuators on the joints.",
            "2. By calculating the inverse Jacobian matrix of the robot.",
            "3. By sequentially applying the Denavit-Hartenberg parameters for each joint.",
            "4. By solving a system of linear equations based on the joint angles and link lengths.",
        ]
    }
]