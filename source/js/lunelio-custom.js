(() => {
  const openingTitle = '永世隔绝的理想乡'

  const applyOpeningTitle = () => {
    const header = document.querySelector('#page-header.full_page')
    const title = document.querySelector('#site-title')

    if (header && title) {
      title.textContent = openingTitle
      title.setAttribute('aria-label', openingTitle)
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyOpeningTitle, { once: true })
  } else {
    applyOpeningTitle()
  }

  document.addEventListener('pjax:complete', applyOpeningTitle)
})()
