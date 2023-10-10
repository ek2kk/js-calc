const resultElement = document.getElementById('result')
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
console.log(input1)
console.log(input2)
const plusButton = document.getElementById('plus-button')
const minusButton = document.getElementById('minus-button')
const multiplyButton = document.getElementById('multiply-button')
const divideButton = document.getElementById('divide-button')


for (let i = 1; i < 10; i++) {
    const left = document.getElementById(`1${i}`)
    const right = document.getElementById(`2${i}`)
    left.onclick = function() {
      input1.value += String(i)
    }
    right.onclick = function() {
      input2.value += String(i)
    }

}

const buttonArray = [plusButton, minusButton, multiplyButton, divideButton]

buttonArray.forEach(button => {
  button.onclick = function () {
    result = count(Number(input1.value), Number(input2.value), button)
    resultElement.textContent = result
  }
});

function count(number1, number2, actionButton) {
  let countResult = 0
  switch (actionButton) {
    case plusButton:
      countResult = number1 + number2
      break;
    case minusButton:
      countResult = number1 - number2
      break;
    case multiplyButton:
      countResult = number1 * number2
      break;
    case divideButton:
      countResult = number1 / number2
      break;
    default:
      break;
  }
  if (countResult < 0) {
    resultElement.style.color = 'red'
  } else {
    resultElement.style.color = 'black'
  }
  return countResult
}