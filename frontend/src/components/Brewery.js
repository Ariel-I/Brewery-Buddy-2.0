class Brewery {
    constructor(data) {
        this.id = data.id
        this.name = data.name 
        this.location = data.location
        this.description = data.description
        this.outdoor_dining = data.outdoor_dining
        this.animal_friendly = data.animal_friendly
        this.items = data.items
    }
    render() {
        return `
        <li>
            <a href="#" data-id="${this.id}">${this.name}</a>
            - ${this.location}
        </li>
        `
    }

    renderBrewery() {
        return `
        <h2>${this.name}</h2>
        <h4>${this.location}</h4>
        <hr>
        <p>${this.description}</p>
        <p>${this.outdoor_dining ? "No" : "Yes"}</p>
        <p>${this.animal_friendly ? "No" : "Yes"}</p>
        <button id="delete-brewery" data-id="${this.id}">Delete</button>
    `
    }
}