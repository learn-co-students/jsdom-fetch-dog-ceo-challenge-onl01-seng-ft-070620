console.log('%c HI', 'color: firebrick')

let breeds = []

document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
  fetchBreeds();
});

function fetchImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(response => response.json())
  .then(json => displayImages(json))
};

function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(response => response.json())
  .then(json => {
    breeds = Object.keys(json.message);
    updateBreedList(breeds);
    addBreedSelectListener();
  });
};

function displayImages(images) {
  const dogDiv = document.getElementById('dog-image-container');
  images.message.forEach(dog => {
    const newImage = document.createElement('img');
    newImage.src = dog;
    dogDiv.appendChild(newImage);
  })
};

function addBreed(breed) {
  const breedList = document.getElementById('dog-breeds');
  const newItem = document.createElement('li');
  newItem.innerText = breed;
  breedList.appendChild(newItem);
  newItem.addEventListener('click', function() {
    newItem.style.color = 'green';
  })
};

function updateBreedList(breeds) {
  let ul = document.querySelector('#dog-breeds');
  removeChildren(ul);
  breeds.forEach(breed => addBreed(breed));
}

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value);
  });
}

function selectBreedsStartingWith(letter) {
  updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}