class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.integer :brewery_id

      t.timestamps
    end
  end
end
