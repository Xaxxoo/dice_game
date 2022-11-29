'use strict';

let score0El = document.getElementById('score--0').textContent = 0;
let score1El = document.getElementById('score--1').textContent = 0;
let rollDice = document.querySelector('.btn--roll');
let rollNew = document.querySelector('.btn--new');
let rollHold = document.querySelector('.btn--hold');
let current0El = Number(document.getElementById('current--1').textContent)

console.log(current0El, typeof current0El)

const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');

rollDice.addEventListener('click', () => {
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    diceEl.classList.remove('hidden');
    diceEl.src =`dice-${dice}.png`;

    if (dice !== 1) {
        current0El = 0; 
    } else {
        current0El = current0El + dice
    }
})