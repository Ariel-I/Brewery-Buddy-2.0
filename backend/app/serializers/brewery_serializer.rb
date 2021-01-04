class BrewerySerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :review
end
