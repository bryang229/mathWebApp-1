let easyBtn = document.getElementById("easy");
let mediumBtn = document.getElementById("medium");
let hardBtn = document.getElementById("hard");
let problem = document.getElementById("problem");
let modeSelected = false;
var points = 0;
var answer;

const hideNavBtns = (id) => {
    //this uses tenary to change the mode selected to the opposite so false -> true and vice versa
    modeSelected = modeSelected ? false : true;
    if (modeSelected) {
        let lazyArr = ["easy", "medium", "hard"];
        for (let i = 0; i < lazyArr.length; i++) {
            if (lazyArr[i] != id)
                document.getElementById(lazyArr[i]).style.display = "none";
        }
    } else {
        let lazyArr = ["easy", "medium", "hard"];
        for (let i = 0; i < lazyArr.length; i++) {
            if (lazyArr[i] != id)
                document.getElementById(lazyArr[i]).style.display = "";
        }
    }
    transitionPage(id);
}

const transitionPage = (mode) => {
    if (modeSelected) {
        let lazyArr = document.querySelectorAll(".homePage");
        let diffText = document.getElementById("diffText")
        for (let i = 0; i < lazyArr.length; i++) {
            lazyArr[i].style.display = "none";
        }
        diffText.innerText = `Difficulty chosen: ${mode}`;
        makeQLayout(mode);
    } else {
        let lazyArr = document.querySelectorAll(".homePage");
        let diffText = document.getElementById("diffText")
        let qElement = document.getElementById("question");
        qElement.remove()
        document.getElementById("qForm").remove()
        for (let i = 0; i < lazyArr.length; i++) {
            lazyArr[i].style.display = "";
        }
        diffText.innerText = "";
    }
}

const makeQLayout = (mode) => {
    let form = document.createElement('form');
    let label = document.createElement('label');
    let answerInput = document.createElement("input");
    let response = document.createElement('h1');
    let btn = document.createElement("input");
    let question = document.createElement("h2");
    let lazyArr = [label, answerInput, btn];
    answerInput.onsubmit = ((e) => {
        e.preventDefault();
        return false;
    });
    response.id = "response";
    form.id = 'qForm';
    btn.id = "submit";
    btn.value = "Submit";
    answerInput.id = "answer";
    label.for = "answer";
    label.innerText = "Enter answer here:";
    btn.type = "button"
    question.id = "question";

    btn.addEventListener('click', checkAnswer)

    for (let i = 0; i < lazyArr.length; i++) {
        form.append(lazyArr[i]);
    }

    problem.appendChild(response);
    problem.appendChild(question);
    problem.appendChild(form);

    if (mode == "easy")
        easyMode();
    else if (mode == "medium") {}
    //let questionsJson = mediumMode();
    else if (mode == "hard") {}
    // let questionsJson = hardMode();
}

const easyMode = () => {
    let qElement = document.getElementById("question");
    let a = Math.floor(Math.random() * 50) - 24;
    let b = Math.floor(Math.random() * 50) - 24;
    //KEY: 1:+ 2:- 3:*
    let operand = Math.floor(Math.random() * 3) + 1;
    console.log(operand)
    if (operand == 1) {
        qElement.innerHTML = `${a} + ${b} = ?`;
        answer = a + b;
    } else if (operand == 2) {
        qElement.innerText = `${a} - ${b} = ?`;
        answer = a - b;
    } else if (operand == 3) {
        qElement.innerText = `${a} * ${b} = ?`;
        answer = a * b;
    }
}

const checkAnswer = (e) => {
    e.preventDefault();
    let userAnswer = parseInt(document.getElementById("answer").value);
    let response = document.getElementById("response");
    if (userAnswer == answer) {
        points++;
        response.innerText = "GOOD JOB";
    } else {
        response.innerText = 'TRY AGAIN... YOU GOT THIS!';
    }


}

const mediumMode = () => {
    let qElement = document.getElementById("question");
    let a = Math.floor(Math.random() * 50) - 24;
    let b = Math.floor(Math.random() * 50) - 24;
    //KEY: 1:+ 2:- 3:*
    let operand = Math.floor(Math.random() * 3) + 1;
    console.log(operand)
    if (operand == 1) {
        qElement.innerHTML = `${a} + ${b} = ?`;
        answer = a + b;
    } else if (operand == 2) {
        qElement.innerText = `${a} - ${b} = ?`;
        answer = a - b;
    } else if (operand == 3) {
        qElement.innerText = `${a} * ${b} = ?`;
        answer = a * b;
    }

}

const hardMode = () => {
    let qElement = document.getElementById("question");
    let a = Math.floor(Math.random() * 50) - 24;
    let b = Math.floor(Math.random() * 50) - 24;
    //KEY: 1:+ 2:- 3:*
    let operand = Math.floor(Math.random() * 3) + 1;
    console.log(operand)
    if (operand == 1) {
        qElement.innerHTML = `${a} + ${b} = ?`;
        answer = a + b;
    } else if (operand == 2) {
        qElement.innerText = `${a} - ${b} = ?`;
        answer = a - b;
    } else if (operand == 3) {
        qElement.innerText = `${a} * ${b} = ?`;
        answer = a * b;
    }

}

easyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hideNavBtns(easyBtn.id)
    if (easy.innerText == "Easy") {
        easy.innerText = "Go back"
    } else if (easy.innerText == "Go back") {
        easy.innerText = "Easy"
    }
});

mediumBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hideNavBtns(mediumBtn.id)
    if (medium.innerText == "Medium") {
        medium.innerText = "Go back"
    } else if (medium.innerText == "Go back") {
        medium.innerText = "Medium"
    }

});

hardBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hideNavBtns(hardBtn.id)
    if (hard.innerText == "Hard") {
        hard.innerText = "Go back"
    } else if (hard.innerText == "Go back") {
        hard.innerText = "Hard"
    }
});