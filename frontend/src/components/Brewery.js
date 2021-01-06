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
}