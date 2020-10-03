console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
  fetchBreeds();
});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchImages() {
  fetch(imgUrl)
  .then(response => response.json())
  .then(json => displayImages(json))
};

function fetchBreeds() {
  fetch(breedUrl)
  .then(response => response.json())
  .then(json => displayBreeds(json))
};

function displayImages(images) {
  const dogDiv = document.getElementById('dog-image-container');
  images.message.forEach(dog => {
    const newImage = document.createElement('img');
    newImage.src = dog;
    dogDiv.appendChild(newImage);
  })
};

function displayBreeds(breeds) {
  const breedList = document.getElementById('dog-breeds');
  for (const [key, value] of Object.entries(breeds.message)) {
    const newItem = document.createElement('li');
    newItem.innerText = key;
    breedList.appendChild(newItem);
    newItem.addEventListener('click', function() {
      newItem.style.color = 'green';
    })
  }
};

let dropDownBreed = document.getElementById('breed-dropdown');
dropDownBreed.onChange = function() {
  let x = document.getElementById("dropDownBreed").value;
  if (x === "a") {
    let tagz = document.getElementsByTagName('li')
    tagz.forEach(tag => {
      if (tag.text.startsWith != "a") {
        tag.remove();
      }
    })
  }
}

function testing() {
  if (dropDownBreed.selectedIndex = "1") {
    newItem.remove();
  }
}