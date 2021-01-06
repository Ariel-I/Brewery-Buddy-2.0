const apiService = new ApiService()
let main = document.getElementById('main')

const init = () => {
    bindEventListeners()
    renderBreweries()
}

function bindEventListeners() {
    document.getElementById('brewery-form').addEventListener('click', displayBreweryForm)
    document.getElementById('brewery').addEventListener('click', renderBreweries)
}

async function renderItems() {
    const items = await apiService.fetchItems()
    main.innerHTML = ""
    items.map(item => {
        const newItem = new Item(item)
        main.innerHTML += newItem.breweryItems
    })
    //attachClicksToItems()
}


async function renderBreweries() {
    const breweries = await apiService.fetchBreweries()
    main.innerHTML = ""
    breweries.map(brewery => {
        const newBrewery = new Brewery(brewery)
        main.innerHTML += newBrewery.render()
    })
    attachClicksToLinks() 
}

function displayBreweryForm() {
    let formDiv = document.querySelector("#new-brewery-form")
    let html = `
        <form> 
            <label>Name:</label>
            <input type="text" id="name"><br>
            <label>Location:</label>
            <input type="text" id="location"><br>
            <label>Description:</label>
            <input type="text" id="description"><br>
            <label>Image URL</label>
            <input type="text" id="image_url"><br>
            <label>Outdoor Dining</label>
            <input type="checkbox" id="outdoor-dining"><br>
            <label>Animal Friendly</label>
            <input type="checkbox" id="animal-friendly"><br>
            <input type="submit">
        </form>
    `
    formDiv.innerHTML = html
    document.querySelector('form').addEventListener('submit', createBrewery)
}

function clearForm() {
    let formDiv = document.querySelector("#new-brewery-form")
    formDiv.innerHTML = ""
}

async function createBrewery(e) {
    e.preventDefault()
    let main = document.getElementById('main')
    let brewery = { 
        name: e.target.querySelector("#name").value,
        location: e.target.querySelector("#location").value,
        description: e.target.querySelector("#description").value,
        image_url: e.target.querySelector("#image_url").value,
        outdoor_dining: e.target.querySelector("#outdoor-dining").checked,
        animal_friendly: e.target.querySelector("#animal-friendly").checked
    }
    let data = await apiService.fetchCreateBrewery(brewery)
    let newBrewery = new Brewery(data)
    main.innerHTML += newBrewery.render()

    attachClicksToLinks()
    clearForm()
}

function attachClicksToLinks() {
    const brews = document.querySelectorAll('.card-body a')
    brews.forEach(brewery => {
        brewery.addEventListener('click', displayBrewery)
    })
}
  
async function displayBrewery(e) {
    console.log(e.target)
    let id = e.target.dataset.id 
    const data = await apiService.fetchBrewery(id) 
    const brewery = new Brewery(data)
    main.innerHTML = brewery.renderBrewery()
        brewery.items.map(item => 
           main.innerHTML += 
           `
           <h4> Beers and Grub: </h4>
           <p>${item.beverage}</p>
           <p>${item.food}</p>

           <button id="create-item" data-id="${item.id}">Add Item</button>
           <button id="delete-item" data-id="${item.id}">Delete item</button>
           `
       )

    document.getElementById('delete-brewery').addEventListener('click', removeBrewery)
}

async function removeBrewery(e) {
    let id = e.target.dataset.id
    const data = await apiService.fetchRemoveBrewery(id)
    .then(data => {
        renderBreweries()
    })
}

init()