class BreweriesController < ApplicationController
  before_action :set_brewery, only: [:show, :update, :destroy]

  # GET /breweries
  def index
    breweries = Brewery.all

    render json: breweries.to_json(include: [:items])
  end

  # GET /breweries/1
  def show
    brewery = Brewery.find_by(id: params[:id])
    render json: brewery.to_json(include: [:items]) 
  end

  # POST /breweries
  def create
    @brewery = Brewery.new(brewery_params)

    if @brewery.save
      render json: @brewery, status: :created, location: @brewery
    else
      render json: @brewery.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /breweries/1
  def update
    if @brewery.update(brewery_params)
      render json: @brewery
    else
      render json: @brewery.errors, status: :unprocessable_entity
    end
  end

  # DELETE /breweries/1
  def destroy
    @brewery.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_brewery
      @brewery = Brewery.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def brewery_params
      params.require(:brewery).permit(:name, :location, :description, :image_url, :outdoor_dining, :animal_friendly)
    end
end
