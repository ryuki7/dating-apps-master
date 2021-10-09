class CreateTargets < ActiveRecord::Migration[6.0]
  def change
    create_table :targets do |t|
      t.references :app, null: false, foreign_key: true
      t.references :appearance, null: false, foreign_key: true
      t.string :name, null: false
      t.integer :age
      t.references :purpose, null: false, foreign_key: true
      t.references :job, null: false, foreign_key: true
      t.integer :height
      t.text :hobby
      t.string :prefecture
      t.string :city
      t.references :personality, null: false, foreign_key: true
      t.string :single_history
      t.text :favorite_food
      t.references :user, null: false, foreign_key: true
      t.integer :favorability_rating, default: 0, null: false
      t.integer :progress_rating, default: 0, null: false

      t.timestamps
    end
  end
end
