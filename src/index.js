console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function renderImages(images)
{
    const container = document.querySelector('div#dog-image-container')
  images.forEach(image => {
    let img = document.createElement('img')
    img.src = image
    container.appendChild(img)
  })
}

function renderBreeds(breeds)
{
    const container = document.querySelector('ul#dog-breeds')
  breeds.forEach(breed => {
    let li = document.createElement('li')
    li.innerText = breed
    li.addEventListener('click', function(){
        li.style.color = '#5300B6'
    })
    container.appendChild(li)
  })
}

function readyFilter(breeds)
{
    let dropdown = document.querySelector('select#breed-dropdown')

    dropdown.addEventListener('change', function() {filterBreeds(breeds, dropdown.value)})
}

function filterBreeds(breeds, value)
{
    let filteredBreeds = []
    breeds.forEach(breed => {
        if (breed.startsWith(value))
        {
            filteredBreeds.push(breed)
        }
    })
    document.querySelector('ul#dog-breeds').replaceChildren()
    renderBreeds(filteredBreeds)
}



document.addEventListener('DOMContentLoaded', function() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json.message));
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        breeds = Object.keys(json.message)
        renderBreeds(breeds)
        readyFilter(breeds)
  });
  
})
