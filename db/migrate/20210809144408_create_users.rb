class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :line_id
      t.integer :role, default: 0
      t.timestamps

      t.index :name
    end
  end
end
