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
        <div class="col">
          <div class="card shadow-sm">
          <img class="card-img-top" src="${this.image_url}" alt="Card image cap">
          <hr>
            <div class="card-body">
              <h3 class="card-text">${this.name}</h3>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" data-id="${this.id}">View</button>
                </div>
                <small class="text-muted">${this.location}</small>
              </div>
            </div>
          </div>
        </div>    
        `
    }

    renderBrewery() {
        return `
        <div class="card text-center">
            <div class="card-header">
                ${this.name}
            </div>
            <div class="card-body">
                <h5 class="card-title">${this.location}</h5>
                <p class="card-text">${this.description}</p>
                <p>Outdoor Dining Available: ${this.outdoor_dining ? "No" : "Yes"}</p>
                <p>Animal Friendly: ${this.animal_friendly ? "No" : "Yes"}</p>
                <button id="delete-brewery" data-id="${this.id}">Delete Brewery</button><br><br>
            </div>
            <div class="card-footer text-muted">
               <h3> Saved Items: </h3>
            </div>
             <a href="#" class="btn btn-primary" id="item-form">Add Item</a>
        </div>
        `
    }
    

}