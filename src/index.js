// fetch the pictures
function fetchImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => addImages(json))
}

// add each picture to the page as an image
function addImages(images) {
  let imgContainer = document.querySelector("div#dog-image-container")

  images.message.forEach(image => {
    let img = document.createElement("img")
    img.src = image
    img.height = 100
    img.width = 100
    imgContainer.appendChild(img)
  })
}

// fetch the breeds
function fetchBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(json => addBreeds(json))
}

// add each breed to the page as a list item
// invokes changeColor() to add an event listener to each li
// and invokes filter() to add an event listener to the select dropdown
function addBreeds(breeds) {
  let ul = document.querySelector("ul#dog-breeds")

  Object.keys(breeds.message).forEach(breed => {
    let li = document.createElement("li")
    li.innerHTML = breed
    ul.appendChild(li)
    changeColor()
    filter()
  })
}

// change list item's color on click
function changeColor() {
  let li = document.querySelectorAll("ul#dog-breeds li")

  li.forEach(item => {
    item.addEventListener("click", function(e) {
      e.target.style.color = "blue"
    })
  })
}

// after loading all breeds, allow user to filter breed list based on dropdown selection
// *can't iterate over HTMLCollection or NodeList with forEach*
function filter() {
  let select = document.getElementById("breed-dropdown")

  select.addEventListener("change", function(e) {
    let options = document.getElementsByTagName("li")

    for (let i = 0; i < options.length; i++) {
      if (options[i].innerHTML.startsWith(e.target.value)) {
        options[i].style.display = ""
      } else {
        options[i].style.display = "none"
      }
    }

  })
}

// when the DOM loads, invoke functions to fetch the pictures and breeds
document.addEventListener("DOMContentLoaded", function() {
  fetchImages()
  fetchBreeds()
})
