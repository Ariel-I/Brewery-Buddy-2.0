class Brewery {
    constructor(data) {
        this.id = data.id
        this.name = data.name 
        this.location = data.location
        this.description = data.description
        this.image_url = data.image_url
        this.outdoor_dining = data.outdoor_dining
        this.animal_friendly = data.animal_friendly
        this.items = data.items
    }
    render() {
        return `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${this.image_url}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.description}</p>
          <a href="#" class="btn btn-primary" data-id="${this.id}">View</a>
        </div>
        </div><br>
        `
    }

    renderBrewery() {
        return `
        <h2>${this.name}</h2>
        <h4>${this.location}</h4>
        <hr>
        <p>Description: ${this.description}</p>
        <p>Outdoor Dinig Available?: ${this.outdoor_dining ? "No" : "Yes"}</p>
        <p>Animal Friendly?: ${this.animal_friendly ? "No" : "Yes"}</p>
        
        <button id="delete-brewery" data-id="${this.id}">Delete Brewery</button>
        `
    }

}