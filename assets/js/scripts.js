// document.addEventListener('DOMContentLoaded', () => {
//   const toggleButton = document.getElementById('toggle-btn')
//   const body = document.body
//   // const main = document.getElementById('main-page')
//   const main = document.getElementsByClassName('main-page')

//   // Check stored preference and apply dark mode if needed
//   const darkMode = localStorage.getItem('darkMode')
//   if (darkMode === 'enabled') {
//     body.setAttribute('data-bs-theme', 'dark')
//     main.classList.add('dark-mode')
//     toggleButton.textContent = 'Disable Dark Mode'
//   } else {
//     body.setAttribute('data-bs-theme', 'light')
//     main.classList.remove('dark-mode')
//     toggleButton.textContent = 'Enable Dark Mode'
//   }

//   toggleButton.addEventListener('click', () => {
//     const isDarkMode = body.getAttribute('data-bs-theme') === 'dark'
//     body.setAttribute('data-bs-theme', isDarkMode ? 'light' : 'dark')
//     main.classList.toggle('dark-mode')
//     toggleButton.textContent = isDarkMode
//       ? 'Enable Dark Mode'
//       : 'Disable Dark Mode'

//     // Save preference to localStorage
//     localStorage.setItem('darkMode', isDarkMode ? 'disabled' : 'enabled')
//   })
// })

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-btn')
  const body = document.body
  const mainElements = document.getElementsByClassName('main-page')

  // Check stored preference and apply dark mode if needed
  const darkMode = localStorage.getItem('darkMode')
  if (darkMode === 'enabled') {
    body.setAttribute('data-bs-theme', 'dark')
    toggleButton.textContent = 'Disable Dark Mode'
    for (let main of mainElements) {
      main.classList.add('dark-mode')
    }
  } else {
    body.setAttribute('data-bs-theme', 'light')
    toggleButton.textContent = 'Enable Dark Mode'
    for (let main of mainElements) {
      main.classList.remove('dark-mode')
    }
  }

  toggleButton.addEventListener('click', () => {
    const isDarkMode = body.getAttribute('data-bs-theme') === 'dark'
    body.setAttribute('data-bs-theme', isDarkMode ? 'light' : 'dark')
    toggleButton.textContent = isDarkMode
      ? 'Enable Dark Mode'
      : 'Disable Dark Mode'
    for (let main of mainElements) {
      main.classList.toggle('dark-mode')
    }

    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'disabled' : 'enabled')
  })
})

const textElement = document.getElementById('hero-h1')
const text = 'Mental Health Awareness'
let index = 0

function typeEffect () {
  if (index < text.length) {
    textElement.textContent += text[index]
    index++
    setTimeout(typeEffect, 100) // Control typing speed
  }
}

typeEffect()

// const quotes = [
//   'The best way to predict the future is to invent it. - Alan Kay',
//   'Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll',
//   'Strive not to be a success, but rather to be of value. - Albert Einstein',
//   'The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt',
//   'Do what you can, with what you have, where you are. - Theodore Roosevelt'
// ]

// const quoteElement = document.getElementById('Hero-h2')
// const generateQuoteButton = document.getElementById('generateQuote')

// generateQuoteButton.addEventListener('click', () => {
//   const randomIndex = Math.floor(Math.random() * quotes.length)
//   quoteElement.textContent = quotes[randomIndex]
// })

// Dark Mode
// const toggleButton = document.getElementById('toggle-btn')
// const body = document.body

// toggleButton.addEventListener('click', () => {
//   body.classList.toggle('dark-mode')
//   toggleButton.textContent = body.classList.contains('dark-mode')
//     ? 'Disable Dark Mode'
//     : 'Enable Dark Mode'
// })

// document.addEventListener('DOMContentLoaded', () => {
//   const toggleButton = document.getElementById('toggle-btn')
//   const body = document.body

//   toggleButton.addEventListener('click', () => {
//     body.classList.toggle('dark-mode')

//     if (body.classList.contains('dark-mode')) {
//       document.documentElement.style.setProperty('--bg-color', '#121212')
//       document.documentElement.style.setProperty('--fg-color', '#ffffff')
//       document.documentElement.style.setProperty('--card-fg', '#ffffff')
//       document.documentElement.style.setProperty('--card-bg', '#1e1e1e')

//       toggleButton.textContent = 'Disable Dark Mode'
//     } else {
//       document.documentElement.style.setProperty('--bg-color', '#ffffff')
//       document.documentElement.style.setProperty('--fg-color', '#000000')
//       document.documentElement.style.setProperty('--card-bg', '#ffffff')
//       document.documentElement.style.setProperty('--card-fg', '#000000')

//       toggleButton.textContent = 'Enable Dark Mode'
//     }
//   })
// })

// OLD
// const toggleButton = document.getElementById('toggle-btn')
// const body = document.body
// const main = document.getElementById('home')

// toggleButton.addEventListener('click', () => {
//   main.classList.toggle('dark-mode')
//   const isDarkMode = body.getAttribute('data-bs-theme') === 'dark'
//   body.setAttribute('data-bs-theme', isDarkMode ? 'light' : 'dark')

//   toggleButton.textContent = main.classList.contains('dark-mode')
//     ? 'Disable Dark Mode'
//     : 'Enable Dark Mode'
// })

// document.addEventListener('DOMContentLoaded', () => {
//   const toggleButton = document.getElementById('toggle-btn')
//   const body = document.body
//   const main = document.getElementById('home')

//   // Check stored preference and apply dark mode if needed
//   const darkMode = localStorage.getItem('darkMode')
//   if (darkMode === 'enabled') {
//     body.setAttribute('data-bs-theme', 'dark')
//     main.classList.add('dark-mode')
//     toggleButton.textContent = 'Disable Dark Mode'
//   } else {
//     body.setAttribute('data-bs-theme', 'light')
//     main.classList.remove('dark-mode')
//     toggleButton.textContent = 'Enable Dark Mode'
//   }

//   toggleButton.addEventListener('click', () => {
//     const isDarkMode = body.getAttribute('data-bs-theme') === 'dark'
//     body.setAttribute('data-bs-theme', isDarkMode ? 'light' : 'dark')
//     main.classList.toggle('dark-mode')
//     toggleButton.textContent = isDarkMode
//       ? 'Enable Dark Mode'
//       : 'Disable Dark Mode'

//     // Save preference to localStorage
//     localStorage.setItem('darkMode', isDarkMode ? 'disabled' : 'enabled')
//   })
// })
