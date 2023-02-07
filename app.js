
const palindrome = str => {
      let strChecked = str.split('').reverse().join('')
      return console.log(strChecked)
    }

    
let h1 = document.createElement('h1')
h1.textContent = "Palindrome checker"

let input = document.createElement('input')
input.type = 'text'
input.id = 'input-field'

let inputEl = document.getElementById('input-field')


let submit = document.createElement('input')
submit.type = 'submit'
submit.id = 'submit-btn'

document.body.append(h1, input, submit)