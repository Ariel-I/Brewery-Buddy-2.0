class ApiService {
    constructor() {
        this.baseURL = 'http://localhost:3000'
    }

    async fetchBreweries() {
        let resp = await fetch(this.baseURL + '/breweries')
        let data = await resp.json()
        return data 
    }

    async fetchBrewery(id) {
        let resp = await fetch(this.baseURL + `/breweries/${id}`)
        let data = await resp.json()
        return data 
    }

}