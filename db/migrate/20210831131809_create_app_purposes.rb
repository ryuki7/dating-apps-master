class CreateAppPurposes < ActiveRecord::Migration[6.0]
  def change
    create_table :app_purposes do |t|
      t.references :app, null: false, foreign_key: true
      t.references :purpose, null: false, foreign_key: true

      t.timestamps
    end
  end
end
