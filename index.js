let points = 0;

const intro = document.querySelector("#introduction");
const start = document.querySelector("button[type='button']")
const question1 = document.querySelector("#question1")
const question2 = document.querySelector("#question2");
const question3 = document.querySelector("#question3");
const question4 = document.querySelector("#question4");
const question5 = document.querySelector("#question5");
const q1 = document.querySelector("#q1");
const q2 = document.querySelector("#q2");
const q3 = document.querySelector("#q3");
const q4 = document.querySelector("#q4");
const q5 = document.querySelector("#q5");
const end = document.querySelector("#end");
const finalScore = document.querySelector("#finalscore");

start.addEventListener("click", () => {
    start.style.display = "none";
    question1.style.display = "block";
})

q1.addEventListener("submit", function (event) {
    event.preventDefault();
    if (q1.question1.value === "omkod") {
        points++;
    }
    question1.style.display = "none";
    question2.style.display = "block";
})

q2.addEventListener("submit", function (event) {
    event.preventDefault();
    if (q2.question2.value === "gm") {
        points++;
    }
    question2.style.display = "none";
    question3.style.display = "block";
})

q3.addEventListener("submit", function (event) {
    event.preventDefault();
    if (q3.question3.value === "nos") {
        points++;
    }
    question3.style.display = "none";
    question4.style.display = "block";
})

q4.addEventListener("submit", function (event) {
    event.preventDefault();
    if (q4.question4.value === "ac") {
        points++;
    }
    question4.style.display = "none";
    question5.style.display = "block";
})

q5.addEventListener("submit", function (event) {
    event.preventDefault();
    if (q5.question5.value === "g") {
        points++;
    }
    if (points === 0) {
        finalScore.innerText = "Χλεμπονιάρη γραμματικέ, απάντηση δεν σταύρωσες. Ελπίζουμε την επόμενη φορά να τα καταφέρεις καλύτερα, στραβάδι!";
    } else if (points === 1) {
        finalScore.innerText = "Χλεμπονιάρη γραμματικέ, συγκέντρωσες μόλις 1 πόντο. Ελπίζουμε την επόμενη φορά να τα καταφέρεις καλύτερα, στραβάδι!";
    } else if (points === 2 || points === 3) {
        finalScore.innerText = `Γκαρσόνα Β', συγκέντρωσες ${points} πόντους. Ελπίζουμε την επόμενη φορά να τα καταφέρεις καλύτερα, ατάλαντη!`;
    } else if (points === 4) {
        finalScore.innerText = "Βλαχάκοου, συγκέντρωσες 4 πόντους. Λίγο ακόμη και θα γίνεις μη-πρωταγωνίστρια του μη-θεάτρου!";
    } else {
        finalScore.innerText = "Συγχαρητήρια! Απάντησες σωστά σε όλες τις απαντήσεις! Χρίζεσαι επίκουρος καθηγητής βυζαντινολογίας! Get a life!";
    }
    question5.style.display = "none";
    intro.style.display = "none";
    end.style.display = "block";
    points = 0;
    q1.question1.value = undefined;
    q2.question2.value = undefined;
    q3.question3.value = undefined;
    q4.question4.value = undefined;
    q5.question5.value = undefined;
})