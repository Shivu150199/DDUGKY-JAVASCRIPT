let pageObj = [
  {
    page: 'home',
    link: 'home.html',
  },
  {
    page: 'about',
    link: 'about.html',
  },
  {
    page: 'services',
    link: 'service.html',
  },
]

let socialObj = [
  {
    href: '#',
    icon: '<i class="fa-brands fa-facebook"></i>',
  },
  {
    href: '#',
    icon: '<i class="fa-brands fa-instagram"></i>',
  },
  {
    href: '#',
    icon: '<i class="fa-brands fa-github"></i>',
  },
]

let pageContainer = document.querySelector('.pages')
let pageArr = pageObj.map((item) => {
  return ` <li class="page"><a href=${item.link}>${item.page}</a></li>`
})

pageContainer.innerHTML = pageArr.join('')

let btn = document.querySelector('.menu')

btn.addEventListener('click', () => {
  let pages = document.querySelector('.pages')
  pages.classList.toggle('show')
  let icons = document.querySelector('.social-icons')
  icons.classList.toggle('show')
})

let socialContainer = document.querySelector('.social-icons')
let socialArr = socialObj.map((item) => {
  return ` <li class="social-icon"><a href=${item.href}>${item.icon}</a></li>`
})

socialContainer.innerHTML = socialArr.join('')
