const BASE_URL = 'http://localhost:3000'

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('brewery-form').addEventListener('click', displayBreweryForm)
    document.getElementById('brewery').addEventListener('click', getBreweries)
    getBreweries()
})

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

    console.log(e) 
}

function getBreweries() {
    let main = document.getElementById('main')
    main.innerHTML = ""
    fetch(BASE_URL + '/breweries')
    .then(resp => resp.json())
    .then(breweries => {
        breweries.map(brewery => {
            main.innerHTML += `
            <li>
                <a href="#" data-id="${brewery.id}">${brewery.name}</a>
                - ${brewery.location}
            </li>
            `
        })
    attachClicksToLinks()
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
        `
    })
}