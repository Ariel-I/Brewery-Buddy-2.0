class BreweysController < ApplicationController
  before_action :set_brewey, only: [:show, :update, :destroy]

  # GET /breweys
  def index
    @breweys = Brewey.all

    render json: @breweys
  end

  # GET /breweys/1
  def show
    render json: @brewey
  end

  # POST /breweys
  def create
    @brewey = Brewey.new(brewey_params)

    if @brewey.save
      render json: @brewey, status: :created, location: @brewey
    else
      render json: @brewey.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /breweys/1
  def update
    if @brewey.update(brewey_params)
      render json: @brewey
    else
      render json: @brewey.errors, status: :unprocessable_entity
    end
  end

  # DELETE /breweys/1
  def destroy
    @brewey.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_brewey
      @brewey = Brewey.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def brewey_params
      params.require(:brewey).permit(:name, :location, :review)
    end
end
