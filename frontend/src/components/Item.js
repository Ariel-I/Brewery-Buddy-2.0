class Item {
    constructor(data) {
        this.beverage = data.beverage
        this.food = data.food 
        this.merchandise = data.merchandise
    }

    render() {
        return `
        <p>${this.beverage}</p>
        <p>${this.food}</p>
        `
    }
}