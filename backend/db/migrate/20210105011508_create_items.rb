class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :beverage
      t.string :food 
      t.string :merchandise 
      t.integer :brewery_id

      t.timestamps
    end
  end
end
