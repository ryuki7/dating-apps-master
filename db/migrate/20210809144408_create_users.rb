class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :line_id, null: false
      t.integer :role, default: 0, null: false
      t.timestamps

      t.index :line_id, unique: true
    end
  end
end
