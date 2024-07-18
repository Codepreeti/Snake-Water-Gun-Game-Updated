function startGame(userChoice) {
    const choices = ["S", "W", "G"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = getResult(userChoice, computerChoice);

    displayResult(userChoice, computerChoice, result);
}

function getResult(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    } else if (
        (user === "S" && computer === "W") ||
        (user === "W" && computer === "G") ||
        (user === "G" && computer === "S")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function displayResult(userChoice, computerChoice, result) {
    const resultDiv = document.getElementById("gameResult");
    resultDiv.innerHTML = `
    <p> You chose: <strong>${convertChoiceToWord(userChoice)}</strong></p>
    <p>Computer chose: <strong>${convertChoiceToWord(computerChoice)}</strong></p>
    <p>Result: <strong>${result}</strong></p>
    `;

    resultDiv.classList.remove('win', 'lose', 'show');

    if (result === "You win!") {
        playSound('winSound');
        resultDiv.classList.add('win');
    } else if (result === "You lose!") {
        playSound('loseSound');
        resultDiv.classList.add('lose');
    }

    setTimeout(() => {
        resultDiv.classList.add('show');
    }, 100);
}

function convertChoiceToWord(choice) {
    if (choice === "S") return "Snake";
    if (choice === "W") return "Water";
    if (choice === "G") return "Gun";
}

function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.play();
}