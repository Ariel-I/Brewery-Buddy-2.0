class Brewery {
    constructor(data) {
        this.id = data.id
        this.name = data.name 
        this.location = data.location
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
        <h4> ${this.location} </h4>
        <hr>
        <button id="delete-brewery" data-id="${this.id}">Delete</button>
    `
    }
}