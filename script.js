const menuBtn = document.querySelector('.menu')
const items = document.querySelector('.navbar-items')
const itemsElt = document.getElementsByClassName('navbar-item');

menuBtn.onclick = (ev) => {
    items.classList.toggle('show')
}

for (const itemsEltElement of itemsElt) {
    itemsEltElement.addEventListener('click', (ev) => {
        if (ev.target.parentNode.parentNode.classList.contains('show')) {
            ev.target.parentNode.parentNode.classList.toggle('show')
        }
        // console.log(ev.target.parentNode.parentNode);
    })
}
