
function getContent(url, filter = null) {
    return fetch(url)
    .then(function(response) {return response.json()})
    .then(function(json) {
        if (url.includes('random')) {
            addImagesToDOM(json)
        } else if (url.includes('breeds/list')) {
            addBreedsToDOM(json, filter)
        }
    })
}

function addImagesToDOM(imagesJSON) {
    imagesJSON.message.forEach(element => {
        const newImg = dogImgContainer.appendChild(document.createElement('img'))
        newImg.src = element
        dogImgContainer.innerHTML += '<br>'
    })
    
}

function addBreedsToDOM(breedsJSON, filter) {
    console.log(filter)
    Object.entries(breedsJSON.message).forEach(breed => {
        if (filter != null && breed.toString().startsWith(filter)) {
            const newBreed = dogBreedUl.appendChild(document.createElement('li'))
            newBreed.innerText = breed
        }
    })
}

const contentUrls = ["https://dog.ceo/api/breeds/image/random/4", 'https://dog.ceo/api/breeds/list/all']


const dogImgContainer = document.querySelector('#dog-image-container')
const dogBreedUl = document.querySelector('#dog-breeds')
const breedDropdown = document.querySelector('#breed-dropdown')

getContent(contentUrls[0])

breedDropdown.addEventListener('change', function(e) {
    dogBreedUl.innerHTML = ''
    getContent(contentUrls[1], breedDropdown.value)
})

