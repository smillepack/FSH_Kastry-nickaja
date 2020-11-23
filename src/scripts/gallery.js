let images = [...document.querySelectorAll('.galleryItem > img')]
let galleryEl = [...document.querySelectorAll('.galleryItem')]

function some() {
    let width = images[0].clientWidth + 'px'
    galleryEl.forEach(el => el.style.height = width)

    images.forEach(el => {
        el.style.height = width
    })
}

some()
console.log('hello')
window.addEventListener('resize', some)
// object-fit: cover
// object-position: center