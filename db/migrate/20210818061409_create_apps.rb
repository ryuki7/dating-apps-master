class CreateApps < ActiveRecord::Migration[6.0]
  def change
    create_table :apps do |t|
      t.string :name, null: false, unique: true
      t.text :strategy_description, null: false
      t.string :icon, null: false
      t.string :diagnostic_allocation, null: false, unique: true
      t.text :diagnostic_description, null: false

      t.timestamps
    end
  end
end
