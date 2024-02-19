let card1 = document.querySelector('.card-1')
let card2 = document.querySelector('.card-2')

//drag card events

// card1.addEventListener('dragstart', () => {
//   console.log('drag started')
//   //   card1.style.background='red'
//   //   card2.style.border='2px dotted blue'
//   // alert('your name is satish')
// })
// card1.addEventListener('dragend', () => {
//   console.log('drag end')
// })
card2.addEventListener('dragleave', () => {
  console.log('leaving card')

  // let div=document.createElement('div')
  // div.className='card-1'
  // card2.append(div)

  //    card1.style.background = 'blue'
  //     card2.style.border = '2px solid black'
  //     card2.style.background='white'
  // alert('your name is satish')
})

card2.addEventListener('dragenter', () => {
  console.log('card 1 is entering on card 2')
})

card2.addEventListener('dragover', (e) => {
  e.preventDefault()
  console.log('hovering on card 2')
  //   card2.style.background='red'
  // alert('your name is satish')
})

card2.addEventListener('drop', () => {
  console.log('dropped on card2')
})
