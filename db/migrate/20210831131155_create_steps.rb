class CreateSteps < ActiveRecord::Migration[6.0]
  def change
    create_table :steps do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.text :description_point, null: false
      t.references :purpose, null: false, foreign_key: true

      t.timestamps
    end
  end
end
