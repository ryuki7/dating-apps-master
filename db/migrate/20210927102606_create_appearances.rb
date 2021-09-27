class CreateAppearances < ActiveRecord::Migration[6.0]
  def change
    create_table :appearances do |t|
      t.string :name, null: false
      t.string :image, null: false

      t.timestamps
    end
  end
end
