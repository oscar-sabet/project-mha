// Dark mode
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-btn')
  const body = document.body
  const mainElements = document.getElementsByClassName('main-page')
  const cardBodies = document.getElementsByClassName('card-body')
  const accordionButtons = document.getElementsByClassName('accordion-button')
  const darkMode = localStorage.getItem('darkMode')

  if (darkMode === 'enabled') {
    body.setAttribute('data-bs-theme', 'dark')
    toggleButton.textContent = 'Disable Dark Mode'
    for (let main of mainElements) {
      main.classList.add('dark-mode')
    }
    for (let cardBody of cardBodies) {
      cardBody.classList.add('dark-card')
    }
    for (let accordionButton of accordionButtons) {
      accordionButton.classList.add('accordion-dark')
    }
  } else {
    body.setAttribute('data-bs-theme', 'light')
    toggleButton.textContent = 'Enable Dark Mode'
    for (let main of mainElements) {
      main.classList.remove('dark-mode')
    }
    for (let cardBody of cardBodies) {
      cardBody.classList.remove('dark-card')
    }
    for (let accordionButton of accordionButtons) {
      accordionButton.classList.remove('accordion-dark')
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
    for (let cardBody of cardBodies) {
      cardBody.classList.toggle('dark-card')
    }
    for (let accordionButton of accordionButtons) {
      accordionButton.classList.toggle('accordion-dark')
    }

    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'disabled' : 'enabled')
  })
})

// Typing effect for hero section
const textElement = document.getElementById('hero-h2')
const text = 'Every Mind Matters'
let index = 0

function typeEffect () {
  // Clear the content of the hero-h2 element before starting the typing effect
  if (index === 0) {
    textElement.textContent = ''
  }

  if (index < text.length) {
    textElement.textContent += text[index]
    index++
    setTimeout(typeEffect, 100) // Control typing speed
  }
}
//Start the typing effect
typeEffect()

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})
