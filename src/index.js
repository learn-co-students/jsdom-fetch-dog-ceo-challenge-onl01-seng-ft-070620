console.log('%c HI', 'color: firebrick')

let breeds = [];

document.addEventListener('DOMContentLoaded', function() {
    loadImages();
    loadBreeds();
});

function loadImages() {
    const ImageUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(ImageUrl)
        .then(response => response.json())
        .then(json => addImages(json))
}

function addImages(dogPic) {
    const container = document.querySelector('#dog-image-container');
    dogPic.message.forEach(dog => {
        const newImg = document.createElement('img');
        newImg.src = dog;
        container.appendChild(newImg);
    })
}

function loadBreeds(dogBreed) {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
        .then(response => response.json())
        .then(results => {
            breeds = Object.keys(results.message);
            addBreeds(breeds);
            addBreedListener();
        });
}

function addBreeds(breeds) {
    const ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => breedLi(breed));
}

function removeChildren(e) {
    let child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = element.lastElementChild;
    }
}

function selectBreedsStartingWith(letter) {
    addBreeds(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
}

function breedLi(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
}

function updateColor(event) {
    event.target.style.color = 'green';
}