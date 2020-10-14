// pry = require('pryjs')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedURL = "https://dog.ceo/api/breeds/list/all";

function fetchImgs() {
    fetch(imgUrl)
    .then(function(response) {
    return response.json();
    })
    .then(function(json){
        renderDogPics(json.message);
    });
};

function renderDogPics(pics) {
    const imgsContainer = document.getElementById("dog-image-container");
    pics.forEach(pic => {
        const img = document.createElement('img');
        img.src = pic;
        imgsContainer.appendChild(img);
    })
}

function fetchDogs() {
    const breedsUl = document.getElementById("dog-breeds")

    fetch(breedURL)
    .then(function(response) {
    return response.json();
    })
    .then(function(json){
        const breeds = json.message
        Object.keys(breeds).forEach(key => {
            let breed = breedsUl.appendChild(document.createElement("li"))
            breed.innerText = key
            breed.addEventListener('click', (event) => {
                breed.style.color = "red"
            })
        });

        const options = document.querySelector("#breed-dropdown")
        const dogs = document.querySelectorAll("#dog-breeds > li")

        options.addEventListener('change', (event) => {
            const letter = options.value
            dogs.forEach(dog => {
                if (!dog.innerText.startsWith(letter)) {
                    dog.style.display = "none"
                } else {
                    dog.style.display = "list-item"
                }
            })
        })
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    fetchImgs();
    fetchDogs();
});