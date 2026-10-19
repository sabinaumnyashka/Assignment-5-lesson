
const choices = ["камень", "ножницы", "бумага"];

let playerScore = 0;
let computerScore = 0;

for (let i = 1; i <= 3; i++) {
    let player = prompt("Раунд " + i + ": выберите камень, ножницы или бумага");

    let randomIndex = Math.floor(Math.random() * 3);
    let computer = choices[randomIndex];

    console.log("Раунд " + i);
    console.log("Игрок: " + player);
    console.log("Компьютер: " + computer);

    if (player === computer) {
        console.log("Ничья!");
    } else if (
        (player === "камень" && computer === "ножницы") ||
        (player === "ножницы" && computer === "бумага") ||
        (player === "бумага" && computer === "камень")
    ) {
        console.log("Вы выиграли!");
        playerScore++;
    } else {
        console.log("Компьютер выиграл!");
        computerScore++;
    }
}

console.log("Счёт игрока: " + playerScore);
console.log("Счёт компьютера: " + computerScore);

if (playerScore > computerScore) {
    console.log("Вы победили в игре!");
} else if (computerScore > playerScore) {
    console.log("Компьютер победил в игре!");
} else {
    console.log("Общая ничья!");
}

