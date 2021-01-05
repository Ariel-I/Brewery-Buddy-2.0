class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :comments
      t.integer :user_id
      t.integer :brewery_id

      t.timestamps
    end
  end
end
