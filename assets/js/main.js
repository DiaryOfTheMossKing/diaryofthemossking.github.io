document.addEventListener('DOMContentLoaded', () => {

  // Copy buttons
  document.querySelectorAll('.highlight').forEach(block => {
    const wrapper = document.createElement('div')
    wrapper.className = 'highlight-wrapper'
    block.parentNode.insertBefore(wrapper, block)
    wrapper.appendChild(block)

    const button = document.createElement('button')
    button.className = 'copy-btn'
    button.textContent = 'Copy'
    wrapper.appendChild(button)

    button.addEventListener('click', () => {
      const code = block.querySelector('code').innerText
      navigator.clipboard.writeText(code).then(() => {
        button.textContent = 'Copied!'
        setTimeout(() => button.textContent = 'Copy', 2000)
      })
    })
  })

  // Nav toggle
  const toggle = document.querySelector('.nav-toggle')
  const nav = document.querySelector('.site-nav')

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open')
      toggle.setAttribute('aria-expanded', open)
    })
  }

})