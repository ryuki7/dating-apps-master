class CreateAppDiagnostics < ActiveRecord::Migration[6.0]
  def change
    create_table :app_diagnostics do |t|
      t.references :app, null: false, foreign_key: true
      t.integer :ranking
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
