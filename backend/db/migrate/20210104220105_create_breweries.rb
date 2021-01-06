class CreateBreweries < ActiveRecord::Migration[6.0]
  def change
    create_table :breweries do |t|
      t.string :name
      t.string :location
      t.string :description
      t.boolean :outdoor_dining
      t.boolean :animal_friendly

      t.timestamps
    end
  end
end
