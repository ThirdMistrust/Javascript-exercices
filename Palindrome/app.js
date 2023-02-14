let user_input;
// selection of elements
let form = document.querySelector('#form')
let input = document.querySelector('#user-input')
let error = document.querySelector('#error')
let result = document.createElement('div')
error.style.display = 'none'

// function that compares the user input and its inverse 
const check_palindrome = str => {
  // remove the last result
  result.remove()
  form.appendChild(result)
  result.className = 'result'
  let strChecked = str.split('').reverse().join('')
  if (str === strChecked && str !== '') {
    return result.textContent = `${str} is a palindrome`
  } else if (str !== strChecked) {
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
  if (isNaN(input.value) || input.value === '') {
    error.style.display = 'none'
  }
  else {
    error.style.display = 'inline'
  }
})
