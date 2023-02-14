let user_input;
// selection of elements
let form = document.querySelector('#form')
let input = document.querySelector('#user-input')
let submit = document.querySelector('.button-success')
let error = document.querySelector('#error')
let result = document.createElement('div')
error.style.display = 'none'

// function that compares the user input and its inverse 
const check_palindrome = str => {
  // remove the last result
  result.remove()
  form.appendChild(result)
  result.className = 'result'
  let strChecked = str.toLowerCase().split('').reverse().join('')
  if (str.toLowerCase() === strChecked && str !== '') {
    return result.textContent = `${str} is a palindrome`
  } else if (str.toLowerCase() !== strChecked) {
    return result.textContent = `${str} is not a palindrome`
  } else if (str == '') {
    error.style.display = 'inline'
  }
}

// capture user input to send it to the check_palindrome function
form.addEventListener('submit', (e) => {
  e.preventDefault()
  user_input = input.value
  check_palindrome(user_input)
  input.value = ''
})

// error handling 
input.addEventListener('keyup', () => {
  const regExpression = /^[a-zA-Z]+$/
  submit.style.backgroundColor = '#329239'
  if (regExpression.test(input.value) || input.value == '') {
    error.style.display = 'none'
    submit.disabled = false
  }
  else {
    // submit.body.style.backgroundColor = 'grey'
    error.style.display = 'inline'
    submit.disabled = true
    submit.style.backgroundColor = 'grey'
  }
})
