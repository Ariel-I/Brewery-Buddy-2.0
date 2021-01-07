class Item {
    constructor(data) {
        this.id = data.id
        this.brewery_id = data.brewery_id
        this.beverage = data.beverage
        this.food = data.food 
        this.merchandise = data.merchandise
    }

    render() {
        return `
        <p>Beverage: ${this.beverage}</p>
        <p>Food: ${this.food}</p>

        <button id="delete-item" data-id="${this.id}">Delete item</button>
        `
    }
}