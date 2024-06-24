const menuBtn = document.querySelector('.menu')
const items = document.querySelector('.navbar-items')

menuBtn.onclick = (ev) => {
    items.classList.toggle('show')
}