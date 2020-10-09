console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

window.addEventListener("DOMContentLoaded", function() {
    fetchImgs();
    fetchBreeds();
   
})

function fetchImgs() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => appendImgs(json));
  }

function appendImgs(dogs) {
    const div = document.getElementById("dog-image-container");
    dogs.message.forEach(dog => {
        const img = document.createElement('img');
        img.setAttribute("src", dog);
        div.appendChild(img);
    })
}

// END CHALLENGE 1

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => appendBreeds(json));
}

function appendBreeds(breeds) {
    const ul = document.getElementById("dog-breeds")
    
    for (const [key, value] of Object.entries(breeds.message)) {

        value.forEach(v => {
            const li = document.createElement('li');
        li.setAttribute("id", `${v} ${key}`);
        li.innerHTML = `${v} ${key}`;
        ul.appendChild(li);
        })
    } 
    purpleListener();  
}

// END CHALLENGE 2

function purpleListener() {
    const items = document.querySelectorAll("li")
    for (const item of items) {
        item.addEventListener("click", function() {
            this.setAttribute("style", "color:purple;")
        })
    }
}

// END CHALLENGE 3

// const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// const select = document.getElementById("breed-dropdown")




// alpha.forEach(letter => {
//     let option = document.createElement("option")
//     option.setAttribute("value", letter)
//     option.setAttribute("id", letter)
//     option.innerHTML = letter
//     select.appendChild(option)
// })

// alpha.forEach(letter => {
//     option = document.getElementById(letter)
//     option.addEventListener("onchange", function(e) {
//         console.log(e)
//     })
// }

// function filterResults() {
//     let term = select.value
//     let items = document.querySelectorAll("li");
//     items.forEach(item => function() {
//         if (item.id[0] != term) {
//             item.setAttribute("style", "display:none;");
//         } else {
//             item.setAttribute("style", "display:block;");
//         }
//     })
// }


// select.addEventListener("onchange", filterResults)

function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
  }
  
  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  
  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }