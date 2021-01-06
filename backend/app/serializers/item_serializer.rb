class ItemSerializer < ActiveModel::Serializer
  attributes :id, :beverage, :food, :brewery_id
  belongs_to :brewery
end
