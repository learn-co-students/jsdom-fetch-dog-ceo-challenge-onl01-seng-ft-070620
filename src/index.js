
document.addEventListener('DOMContentLoaded', function () {
    fetchImages();
    fetchBreeds();
    // loadBreedOptions();
})

function fetchImages() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
            .then(resp => resp.json())
            .then(results => displayImages(results.message))
            // .then(results => {
            //     results.messages.forEach(image => displayImage(image))
            // })
}

function displayImages(images) {
    const main = document.getElementById('dog-image-container')
    images.forEach(image => {
        const img = document.createElement('img')
        img.setAttribute("src", image);
        img.setAttribute("height", "100");
        img.setAttribute("width", "150");
        main.appendChild(img)
    })
}

function fetchBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
            .then(resp => resp.json())
            .then(results => {
                breeds = Object.keys(results.message)
                loadBreeds(breeds)
                addBreedSelector()
            })
}

function loadBreeds(breeds) {
    const main = document.getElementById('dog-breeds')
    breeds.forEach(breed => {
        const li = document.createElement('li')
        li.innerHTML = breed
        main.appendChild(li)
        li.addEventListener('click', updateColor);
    })
}

function updateColor(event) {
    event.target.style.color = "firebrick"
}

function addBreedSelector() {
    const selectBreed = document.querySelector("#breed-dropdown")
    selectBreed.addEventListener('change', filterBreed)
}

function filterBreed() {
    letter = event.target.value
    breedsSelected = breeds.filter(breed => breed.startsWith(letter))
    editBreedList(breedsSelected)
}

function editBreedList(breedsSelected) {
    const main = document.getElementById('dog-breeds')
    while (main.firstChild) {
        main.firstChild.remove()
    }
    breedsSelected.forEach(breed => {
        const li = document.createElement('li')
        li.innerHTML = breed
        main.appendChild(li)
        li.addEventListener('click', updateColor);
    })
}