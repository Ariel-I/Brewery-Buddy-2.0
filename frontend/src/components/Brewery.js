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
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">img</text></svg>
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
        
        
        
//        `
//        <div class="card" style="width: 18rem;">
//        <img class="card-img-top" src="${this.image_url}" alt="Card image cap">
//        <div class="card-body">
//          <h5 class="card-title">${this.name}</h5>
//          <p class="card-text">${this.description}</p>
//          <a href="#" class="btn btn-primary" data-id="${this.id}">View</a>
//        </div>
//        </div><br>
//        `
    }

    renderBrewery() {
        return `
        <h2>${this.name}</h2>
        <br>
        <h4>${this.location}</h4>
        <hr>
        <p>Description: ${this.description}</p>
        <p>Outdoor Dinig Available?: ${this.outdoor_dining ? "No" : "Yes"}</p>
        <p>Animal Friendly?: ${this.animal_friendly ? "No" : "Yes"}</p>

        <button id="delete-brewery" data-id="${this.id}">Delete Brewery</button>
        <br>
        <hr>
        `
    }
    

}