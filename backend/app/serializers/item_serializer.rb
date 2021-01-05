class ItemSerializer < ActiveModel::Serializer
  attributes :id, :brewery_id
  belongs_to :brewery
end
