class Item {
    constructor(data) {
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