class BrewerySerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :image_url, :outdoor_dining, :animal_friendly
  has_many :items
end
