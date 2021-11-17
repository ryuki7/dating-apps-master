class CreateApps < ActiveRecord::Migration[6.0]
  def change
    create_table :apps do |t|
      t.string :name, null: false
      t.text :strategy_description, null: false
      t.string :icon_image, null: false
      t.string :diagnostic_allocation, null: false
      t.text :diagnostic_description, null: false
      t.timestamps

      t.index :name, unique: true
      t.index :diagnostic_allocation, unique: true
    end
  end
end
