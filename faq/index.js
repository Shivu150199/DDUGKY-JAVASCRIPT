const qaArray = [
  {
    id: 1,
    question: 'Explain the process of photosynthesis.',
    answer:
      'Photosynthesis is the biological process by which green plants and other organisms convert light energy into chemical energy. In simple terms, it involves the absorption of light by chlorophyll in plant cells, which is then used to convert carbon dioxide and water into glucose and oxygen. This process plays a crucial role in the production of food and oxygen, sustaining life on Earth.',
  },
  {
    id: 2,
    question: 'Describe the theory of relativity proposed by Albert Einstein.',
    answer:
      'The theory of relativity is a scientific theory developed by Albert Einstein that revolutionized our understanding of space, time, and gravity. There are two main components: special relativity and general relativity. Special relativity deals with objects moving at constant speeds, showing that time can dilate, lengths can contract, and mass can increase at high speeds. General relativity extends these ideas to include gravity, describing it as the curvature of spacetime caused by mass and energy.',
  },
  {
    id: 3,
    question: 'What are the main causes and consequences of climate change?',
    answer:
      'Climate change is primarily caused by the increase in greenhouse gas emissions, such as carbon dioxide and methane, resulting from human activities like burning fossil fuels and deforestation. The consequences include rising global temperatures, more frequent and severe weather events, melting ice caps and glaciers, sea-level rise, and disruptions to ecosystems. Addressing climate change requires global efforts to reduce emissions, transition to renewable energy sources, and implement sustainable practices.',
  },
  // Add more objects as needed
]

let array = qaArray.map((item) => {
  return `  
    <div class="card">
          <div class="que-card">
            <h2>
            ${item.question}
            </h2>
            <button class="btn">
              <span class="material-symbols-outlined"> expand_more </span>
            </button>
          </div>
          <div class="answer hide">
            ${item.answer}
          </div>
        </div>`
})

let arrayJoin = array.join('')
// console.log(arrayJoin)
let main = document.querySelector('.card-container')
main.innerHTML = arrayJoin
// let div = document.createElement('div')
// div.className = 'card-container'
// let cardsDiv=document.createElement('div')
// cardsDiv.innerHTML=arrayJoin
// let h2 = document.createElement('h2')
// h2.innerText = 'FAQ'
// div.append(h2,cardsDiv)
// let answer=document.querySelectorAll('.answer')

let btn = document.querySelectorAll('.btn')
console.log(btn)
btn.forEach((item) => {
  console.log(item)
  item.addEventListener('click', (e) => {
    console.log(e.target.parentElement.parentElement.nextElementSibling)
    let ans = e.target.parentNode.parentNode.nextSibling.nextSibling
    ans.classList.toggle('hide')
  })
})
// btn.addEventListener('click',(e)=>{
// console.log(e.target)
// })
// console.log(btn)
// btn.forEach((item)=>{
//     item.addEventListener('click',()=>{

//     })
// })
// console.log(document.)
