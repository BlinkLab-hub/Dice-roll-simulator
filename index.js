let roll = document.getElementById("roll-button");
let dice = document.getElementById("dice");
roll.onclick = function() {
    diceValue = (Math.floor(Math.random() * 6) + 1);
    dice.textContent = diceValue;
}
