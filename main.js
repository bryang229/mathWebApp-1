let easyBtn = document.getElementById("easy");
let mediumBtn = document.getElementById("medium");
let hardBtn = document.getElementById("hard");
let modeSelected = false;

const hideNavBtns = (id) => {
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
    } else {
        let lazyArr = document.querySelectorAll(".homePage");
        let diffText = document.getElementById("diffText")
        for (let i = 0; i < lazyArr.length; i++) {
            lazyArr[i].style.display = "";
        }
        diffText.innerText = "";

    }
}

// const makeQLayout = (mode) => {
//     let form = document.createElement('form');
//     let label = document.createElement('label');
//     let answerInput = document.createElement("input");
//     let btn = document.createElement("input");
//     let header = document.createElement('h3');
//     if (mode == "easy")
//         let questionsJson = easyMode();
//     else if (mode == "medium")
//         let questionsJson = mediumMode();
//     else if (mode == "hard")
//         let questionsJson = hardMode();
// }

// const easyMode = () => {

// }

// const mediumMode = () => {

// }

// const hardMode = () => {

//}

easyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hideNavBtns(easyBtn.id)
});

mediumBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hideNavBtns(mediumBtn.id)
});

hardBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hideNavBtns(hardBtn.id)
});