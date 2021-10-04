class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name, null: false, unique: true
      t.integer :point, null: false

      t.timestamps
    end
  end
end
