class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.integer :point, null: false
      t.timestamps

      t.index :name, unique: true
    end
  end
end
