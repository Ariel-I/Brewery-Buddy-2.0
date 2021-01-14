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

async function renderBreweries() {
    const breweries = await apiService.fetchBreweries()
    let mainShow = document.getElementById("main-show")
    mainShow.innerHTML = ""
    main.innerHTML = ""
    let sortedBreweries = breweries.sort((a,b) => {
        let breweryA = a.name;
        let breweryB = b.name;
        return (breweryA < breweryB) ? -1 : (breweryA > breweryB) ? 1 : 0
    })
    console.log(sortedBreweries)

    breweries.map(brewery => {
        const newBrewery = new Brewery(brewery)
        main.innerHTML += newBrewery.render()
    })
    attachClicksToLinks() 
}


function displayItemForm(id) {
    let itemDiv = document.querySelector("#new-item-form")
    let html = `
        <form class="text-black text-left"> 
          <div class="form-group container">
            <input type="hidden" class="form-control" id="brewery_id" value="${id}">
            <label>Beverage:</label>
            <input type="text" class="form-control" id="beverage" placeholder="Beer">
            <label>Food:</label>
            <input type="text" class="form-control" id="food" placeholder="Food"><br>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
    `
    itemDiv.innerHTML = html
    document.querySelector('form').addEventListener('submit', createItem)
}

function displayBreweryForm() {
    let formDiv = document.querySelector("#new-brewery-form")
    let html = `
        <form class="text-white text-left"> 
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" id="name"  placeholder="Brewery Name">
            <label>Location:</label>
            <input type="text" class="form-control" id="location" placeholder="Brewery Location">
            <label>Description:</label>
            <input type="text" class="form-control" id="description" placeholder="Description">
            <label>Image URL</label>
            <input type="text" class="form-control" id="image_url" placeholder="Image">
          </div>
          <div class="form-check">
            <label>Outdoor Dining</label>
            <input type="checkbox" id="outdoor-dining"><br>
            <label>Animal Friendly</label>
            <input type="checkbox" id="animal-friendly"><br>
          </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    `
    formDiv.innerHTML = html
    document.querySelector('form').addEventListener('submit', createBrewery)
}

function clearForm() {
    let formDiv = document.querySelector("#new-brewery-form")
    let itemFormDiv = document.querySelector("#new-item-form")
    formDiv.innerHTML = ""
    itemFormDiv.innerHTML = ""
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

async function createItem(e) {
    e.preventDefault()
    let cardDiv = document.querySelector('.card-footer')
    let item = {
        brewery_id: e.target.querySelector("#brewery_id").value,
        beverage: e.target.querySelector("#beverage").value,
        food: e.target.querySelector("#food").value
    }
    let data = await apiService.fetchCreateItem(item)
    let newItem = new Item(data)
    cardDiv.innerHTML += newItem.render() 
    clearForm()
}

function attachClicksToLinks() {
    const brews = document.querySelectorAll('.card button')
    brews.forEach(brewery => {
        brewery.addEventListener('click', displayBrewery)
    })
}
  
async function displayBrewery(e) {
    let mainShow = document.getElementById("main-show")
    let id = e.target.dataset.id 
    const data = await apiService.fetchBrewery(id) 
    const brewery = new Brewery(data)
    main.innerHTML = ""
    mainShow.innerHTML = brewery.renderBrewery()

    let cardDiv = document.querySelector('.card-footer')
        brewery.items.map(item => {
           cardDiv.innerHTML += 
           `
           <p>Beverages: ${item.beverage}</p>
           <p>Food: ${item.food}</p>
           <button class="delete-item" data-id="${item.id}">Delete Item</button>
           `
         document.querySelectorAll(".delete-item").forEach(button => button.addEventListener('click', removeItem))
        })
        
    document.getElementById('item-form').addEventListener('click', () => displayItemForm(id))   
    clearForm()    
    document.getElementById('delete-brewery').addEventListener('click', removeBrewery)
}

async function removeBrewery(e) {
    let id = e.target.dataset.id
    const data = await apiService.fetchRemoveBrewery(id)
    .then(data => {
        renderBreweries()
    })
}

async function removeItem(e) {
    let id = e.target.dataset.id 
    const data = await apiService.fetchRemoveItem(id)
    .then(data => {
        renderBreweries()
    })
}

init()