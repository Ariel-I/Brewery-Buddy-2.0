class ApiService {
    constructor() {
        this.baseURL = 'http://localhost:3000'
    }

    getBreweries() {
        main.innerHTML = ""
        //fetch(BASE_URL + '/breweries')
        //.then(resp => resp.json())
        
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
}