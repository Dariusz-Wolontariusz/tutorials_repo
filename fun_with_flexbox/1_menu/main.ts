document.addEventListener('DOMContentLoaded', (): void => {
  const button: HTMLElement | null = document.querySelector('.toggle-nav')

  if (button) {
    console.log('znalazlem butttona')

    button.addEventListener('click', (): void => {
      const navUl: HTMLUListElement | null =
        document.querySelector('.nav__list')

      if (navUl) {
        navUl.classList.toggle('open')
      }
    })
  }
})
