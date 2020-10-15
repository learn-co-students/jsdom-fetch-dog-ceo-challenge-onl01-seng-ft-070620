console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
  fetchBreeds();
  fetchFilterBreeds();

})

function fetchImages() {
  return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      renderImages(json)
    })
}

function renderImages(images) {
  const imageList = document.querySelector('#dog-image-container')
  images.message.forEach(image => {
    const imgTag = document.createElement("img")
    imgTag.src = image;
    imageList.appendChild(imgTag)
  })
}

function fetchBreeds() {
  return fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      renderBreeds(json)
    })
}

function renderBreeds(breeds) {
  const breedList = document.querySelector('#dog-breeds')
  Object.keys(breeds.message).forEach (breed => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(breed));
    breedList.appendChild(li)
    li.addEventListener('click', function(e) {
      e.target.style.color = 'blue'
    });
  })
}

function fetchFilterBreeds() {
  return fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      filterBreeds(json)
    })
}

function filterBreeds(breeds) {
  let dropDn = document.querySelector("#breed-dropdown")
  let list = document.querySelector("#dog-breeds")
  dropDn.addEventListener('change', function(e){
    list.innerHTML = "";
    letter = e.target.value
    Object.keys(breeds.message).forEach (breed => {
      if (breed.startsWith(letter)) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(breed));
        list.appendChild(li)
      }
    })
    
  })
}