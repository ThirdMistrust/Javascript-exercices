let user_input;
// selection of elements
let form = document.querySelector('#form')
let input = document.querySelector('#user-input')
let error = document.querySelector('#error')
error.style.display = 'none'

// function that compares the user input and its inverse 
const check_palindrome = str => {
  let result = document.createElement('div')
  document.body.append(result)
  let strChecked = str.split('').reverse().join('')
  
  if (str === strChecked) {
    return result.textContent = `${str} is a palindrome`
  }
  else {
    return result.textContent = `${str} is not a palindrome`
  }
}

// capture user input to send it to the check_palindrome function
form.addEventListener('submit', (e) => {
  e.preventDefault()
  user_input = input.value
  check_palindrome(user_input)
})

// error handling 
input.addEventListener('keyup', () => {
  if (isNaN(input.value) || '') {
    error.style.display = 'none'
  }
  else {
    error.style.display = 'inline'
  }
})

