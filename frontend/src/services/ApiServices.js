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

    async fetchCreateBrewery(breweryData) {
        let configObj = {
            method: 'POST',
            body: JSON.stringify(breweryData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        let resp = await fetch(this.baseURL + '/breweries', configObj)
        let data = await resp.json()
        return data 
    }

    async fetchRemoveBrewery(id) {
        let configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        let resp = await fetch(this.baseURL + `/breweries/${id}`, configObj)
    }

    async fetchItems() {
        let resp = await fetch(this.baseURL + '/items')
        let data = await resp.json()
        return data 
    }

    async fetchCreateItem(itemData) {
        let configObj = {
            method: 'POST',
            body: JSON.stringify(itemData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        let resp = await fetch(this.baseURL + '/items', configObj)
        let data = await resp.json()
        return data 
    }

    async fetchRemoveItem(id) {
        let configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        let resp = await fetch(this.baseURL + `/items/${id}`, configObj)
    }

}