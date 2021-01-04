class CreateBreweys < ActiveRecord::Migration[6.0]
  def change
    create_table :breweys do |t|
      t.string :name
      t.string :location
      t.string :review

      t.timestamps
    end
  end
end
