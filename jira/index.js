let btn = document.querySelector('.btn')
let input = document.querySelector('.issue')
btn.addEventListener('click', () => {
  input.classList.remove('hide')
  btn.classList.add('hide')
    input.focus()
})

input.addEventListener('keyup', (e) => {
  let todoContainer = document.querySelector('#to-do')
  // console.log(e)
  if (e.keyCode == 13) {
    let value = input.value
    console.log(value)
    let card = document.createElement('div')
    card.innerText = value
    card.className = 'child-card'
    card.style.padding = '10px'
    card.style.borderRadius = '10px'
    card.style.marginTop = '5px'
    card.style.background = 'skyblue'
    todoContainer.append(card)
    input.classList.add('hide')
    btn.classList.remove('hide')
    input.value=''
  }
})
