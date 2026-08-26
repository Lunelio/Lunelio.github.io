(() => {
  const openOnHome = () => {
    if (window.location.pathname !== '/' || document.querySelector('#lunelio-opening')) {
      return
    }

    const opening = document.createElement('section')
    opening.id = 'lunelio-opening'
    opening.setAttribute('aria-label', '永世隔绝的理想乡')
    opening.innerHTML = `
      <div id="lunelio-opening-content">
        <h1 id="lunelio-opening-title">永世隔绝的理想乡</h1>
        <p id="lunelio-opening-subtitle">记录游戏、阅读、技术与日常</p>
        <button id="lunelio-opening-hint" type="button" aria-label="进入网站">⌄</button>
      </div>
    `

    document.body.appendChild(opening)
    document.body.classList.add('lunelio-opening-active')

    const close = () => {
      if (opening.classList.contains('is-closing')) {
        return
      }

      opening.classList.add('is-closing')
      document.body.classList.remove('lunelio-opening-active')
      window.setTimeout(() => opening.remove(), 500)
    }

    opening.addEventListener('click', close, { once: true })
    window.addEventListener('wheel', close, { once: true, passive: true })
    window.addEventListener('touchmove', close, { once: true, passive: true })
    window.addEventListener('keydown', close, { once: true })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', openOnHome, { once: true })
  } else {
    openOnHome()
  }

  document.addEventListener('pjax:complete', openOnHome)
})()
