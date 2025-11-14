const cardDetails = [
  {
    name: "apple",
    img: "./images/image1.png",
  },
  {
    name: "mango",
    img: "./images/image2.png",
  },
  {
    name: "orange",
    img: "./images/image3.png",
  },
  {
    name: "cherry",
    img: "./images/image4.png",
  },
  {
    name: "pear",
    img: "./images/image5.png",
  },
  {
    name: "grapes",
    img: "./images/image6.png",
  },
  {
    name: "apple",
    img: "./images/image1.png",
  },
  {
    name: "mango",
    img: "./images/image2.png",
  },
  {
    name: "orange",
    img: "./images/image3.png",
  },
  {
    name: "cherry",
    img: "./images/image4.png",
  },
  {
    name: "pear",
    img: "./images/image5.png",
  },
  {
    name: "grapes",
    img: "./images/image6.png",
  },
];

let gameBord = document.getElementById("gamebord-container");

let restartButton = document.getElementById("restart-btn");

let flipCards = [];

let score = 0;

shuffleCard();

displayCard();

function shuffleCard() {
  for (let i = cardDetails.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * i);
    [cardDetails[i], cardDetails[randomIndex]] = [
      cardDetails[randomIndex],
      cardDetails[i],
    ];
  }
}

function restartGame() {
  shuffleCard();

  displayCard();
}

function displayCard() {
  gameBord.innerHTML = ``;
  gameBord.classList.remove("gameWon");
  gameBord.classList.add("game");
  score = 0;
  cardDetails.forEach((iteam, index) => {
    let card = document.createElement("div");

    card.setAttribute("id", index);
    card.classList.add("cardBack");
    card.classList.add("active");

    gameBord.append(card);

    card.addEventListener("click", flipCard);
  });
}

function flipCard() {
  let cardId = this.getAttribute("id");

  if (flipCards.length < 2 && this.classList.contains("active")) {
    flipCards.push(this);
    this.classList.remove("cardBack");
    this.innerHTML = `<div>
  <img src="${cardDetails[cardId].img}" alt="${cardDetails[cardId].name}"/>
  </div>`;

    if (flipCards.length == 2) {
      setTimeout(checkCard, 1000);
    }
  }
}

function checkCard() {
  let cardOne = flipCards[0].getAttribute("id");
  let cardTwo = flipCards[1].getAttribute("id");

  if (cardDetails[cardOne].name === cardDetails[cardTwo].name) {
    flipCards[0].classList.remove("active");

    flipCards[1].classList.remove("active");
    score = score + 5;
  } else {
    flipCards[0].innerHTML = "";
    flipCards[0].classList.add("cardBack");
    flipCards[1].innerHTML = "";
    flipCards[1].classList.add("cardBack");
  }
  flipCards = [];
  if (cardDetails.length / 2 === score / 5) {
    gameOver();
  }
}

restartButton.addEventListener("click", restartGame);

function gameOver() {
  gameBord.classList.remove("game");
  gameBord.classList.add("gameWon");
  gameBord.innerHTML = `
  <p>You Win✌️ !<br/>
  <span>Your Score : ${score}</span><p>
  `;
}
