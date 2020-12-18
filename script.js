'use strict'

document.getElementById('whole-number').addEventListener('click', displayInteger)

function displayInteger () {
  const number = document.getElementById('whole-number').value
  // the modulus is to make the program to detect decimals.
  if (number % 1) {
    alert('Eh, maybe stray away from decimals.')
  // the <= symbol is used to detect negatives.
  } else if (number <= 0) {
    alert('Your number is a negative.')
  // the >= symbol is used to detect positives.
  } else if (number >= 0) {
    alert('Your number is a positive.') 
  }
}
