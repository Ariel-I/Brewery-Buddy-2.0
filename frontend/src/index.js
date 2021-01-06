//const BASE_URL = 'http://localhost:3000'

//window.addEventListener("DOMContentLoaded", () => {
//    document.getElementById('brewery-form').addEventListener('click', displayBreweryForm)
//    document.getElementById('brewery').addEventListener('click', getBreweries)
//    getBreweries()
//})

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
    main.innerHTML = ""
    breweries.map(brewery => {
        const newBrewery = new Brewery(brewery)
        main.innerHTML += newBrewery.render()
    })
}


function displayBreweryForm() {
    let formDiv = document.querySelector("#new-brewery-form")
    let html = `
        <form> 
            <label>Name:</label>
            <input type="text" id="name">
            <label>Location:</label>
            <input type="text" id="location">
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

function createBrewery(e) {
    e.preventDefault()
    let main = document.getElementById('main')
    let brewery = { 
        name: e.target.querySelector("#name").value,
        location: e.target.querySelector("#location").value
    }
    let configObj = {
        method: 'POST',
        body: JSON.stringify(brewery),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    fetch(BASE_URL + '/breweries', configObj)
    .then(resp => resp.json())
    .then(brewery => {
        main.innerHTML += `
        <li>
            <a href="#" data-id="${brewery.id}">${brewery.name}</a>
            - ${brewery.location}
        </li>
        `
        attachClicksToLinks()
        clearForm()
    })
}



function attachClicksToLinks() {
    const brews = document.querySelectorAll('li a')
    brews.forEach(brewery => {
        brewery.addEventListener('click', displayBrewery)
    })
}

function displayBrewery(e) {
    console.log(e.target)
    let id = e.target.dataset.id 
    let main = document.getElementById('main')
    main.innerHTML = ""
    fetch(BASE_URL + `/breweries/${id}`)
    .then(resp => resp.json())
    .then(brew => {
        main.innerHTML = `
            <h2>${brew.name}</h2>
            <h4> ${brew.location} </h4>
            <hr>
            <button id="delete-brewery" data-id="${brew.id}">Delete</button>
        `
        document.getElementById('delete-brewery').addEventListener('click', removeBrewery)
    })
}

function removeBrewery(e) {
    let configObj = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    fetch(BASE_URL + `/breweries/${e.target.dataset.id}`, configObj)
    .then(() => {
        getBreweries()
    })
}

init()