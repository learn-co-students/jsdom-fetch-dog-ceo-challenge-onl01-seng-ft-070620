console.log('%c HI', 'color: firebrick')

function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(results => {results.message.forEach(image =>renderImage(image))
    })
}

function renderImage(dogPic) {
    const dogContainer = document.querySelector('#dog-image-container')
    let newImage = document.createElement('img')
    newImage.src = dogPic
    dogContainer.appendChild(newImage)
}

function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(results => {breeds = Object.keys(results.message)
    
    renderBreeds(breeds)
    addBreedFilterListener()
    })
}

function renderBreeds(breeds) {
    const ul = document.querySelector('#dog-breeds')
    removeUlChildren(ul)
    breeds.forEach(breed => addBreed(breed))
}

function addBreed(breed) {
    const ul = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
    li.innerText = breed
    li.style.cursor = 'pointer'
    ul.appendChild(li)
    li.addEventListener('click', changeTextColor)
}

function changeTextColor(event) {
    event.target.style.color = 'cornflowerblue'
}

function removeUlChildren(element) {
    let child = element.lastElementChild

    while (child) {
        element.removeChild(child)
        child = element.lastElementChild
    }
}

function addBreedFilterListener() {
    let breedLetterSelector = document.querySelector('#breed-dropdown')
    breedLetterSelector.addEventListener('change', function(event){
        selectBreedLetter(event.target.value)
    })
}

function selectBreedLetter(letter) {
    renderBreeds(breeds.filter(breed => breed.startsWith(letter)))
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
})