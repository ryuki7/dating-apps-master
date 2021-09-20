class CreateDatePlans < ActiveRecord::Migration[6.0]
  def change
    create_table :date_plans do |t|
      t.string :name, null: false
      t.string :period, null: false
      t.text :detail_information, null: false
      t.text :description, null: false
      t.integer :level, null: false
      t.references :purpose, null: false, foreign_key: true

      t.timestamps
    end
  end
end
