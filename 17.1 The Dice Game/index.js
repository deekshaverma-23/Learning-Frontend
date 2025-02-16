var randomVariable1 = Math.random() * 6;
randomVariable1 = Math.floor(randomVariable1) + 1;

var randomVariable2 = Math.random() * 6;
randomVariable2 = Math.floor(randomVariable2) + 1;

document;
if (randomVariable1 === 1) {
    document
        .querySelector(".dice .img1")
        .setAttribute("src", "./images/dice1.png");
} else if (randomVariable1 === 2) {
    document
        .querySelector(".dice .img1")
        .setAttribute("src", "./images/dice2.png");
} else if (randomVariable1 === 3) {
    document
        .querySelector(".dice .img1")
        .setAttribute("src", "./images/dice3.png");
} else if (randomVariable1 === 4) {
    document
        .querySelector(".dice .img1")
        .setAttribute("src", "./images/dice4.png");
} else if (randomVariable1 === 5) {
    document
        .querySelector(".dice .img1")
        .setAttribute("src", "./images/dice5.png");
} else {
    document
        .querySelector(".dice .img1")
        .setAttribute("src", "./images/dice6.png");
}

if (randomVariable2 === 1) {
    document
        .querySelector(".dice .img2")
        .setAttribute("src", "./images/dice1.png");
} else if (randomVariable2 === 2) {
    document
        .querySelector(".dice .img2")
        .setAttribute("src", "./images/dice2.png");
} else if (randomVariable2 === 3) {
    document
        .querySelector(".dice .img2")
        .setAttribute("src", "./images/dice3.png");
} else if (randomVariable2 === 4) {
    document
        .querySelector(".dice .img2")
        .setAttribute("src", "./images/dice4.png");
} else if (randomVariable2 === 5) {
    document
        .querySelector(".dice .img2")
        .setAttribute("src", "./images/dice5.png");
} else {
    document
        .querySelector(".dice .img2")
        .setAttribute("src", "./images/dice6.png");
}

if (randomVariable1 === randomVariable2) {
    document.querySelector("h1").textContent = "Draw";
} else if (randomVariable1 > randomVariable2) {
    document.querySelector("h1").textContent = "Player 1 wins";
} else {
    document.querySelector("h1").textContent = "Player 2 wins";
}
