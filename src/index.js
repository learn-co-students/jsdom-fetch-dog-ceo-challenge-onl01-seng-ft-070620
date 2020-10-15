console.log('%c HI', 'color: firebrick')

function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(json => renderImages(json))
}

function renderImages(images) {
    const main = document.querySelector('main')
    images.forEach(image => {
        const img = document.createElement('img')
        img.innerHTML = image.img
        main.appendChild(img)
    })
}


document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
})