let btn = document.querySelector('.btn')
let input = document.querySelector('.issue')
btn.addEventListener('click', () => {
  input.classList.remove('hide')
  btn.classList.add('hide')
  input.focus()
})

let draggingInfo = {
  draggingElement: null,
  draggingId: null,
}

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
    card.setAttribute('data-container', 'card')
    card.style.background = 'skyblue'
    card.draggable = 'true'
    todoContainer.append(card)

    card.addEventListener('dragstart', (e) => {
      console.log('hello')
      draggingInfo.draggingElement = e.target
      draggingInfo.draggingId = e.target.getAttribute('data-container')
      console.log(draggingInfo.draggingElement, draggingInfo.draggingId)
    })

    input.classList.add('hide')
    btn.classList.remove('hide')
    input.value = ''
  }
})

let allContainer = document.querySelectorAll('.container')
console.log(allContainer)

allContainer.forEach((item) => {
  item.addEventListener('dragover', (event) => {
    event.preventDefault()
  })

item.addEventListener('drop',(e)=>{
  console.log('dropping card')
  let card=draggingInfo.draggingElement
  card.id=draggingInfo.draggingId
let box=e.currentTarget
console.log(box)
box.appendChild(card)

})

})
