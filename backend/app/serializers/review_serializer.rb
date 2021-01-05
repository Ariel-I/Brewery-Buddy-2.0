class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comments, :user_id, :brewery_id
  belongs_to :brewery
end
