class CreateDatePlanPlaces < ActiveRecord::Migration[6.0]
  def change
    create_table :date_plan_places do |t|
      t.references :date_plan, null: false, foreign_key: true
      t.references :place, null: false, foreign_key: true
      t.integer :order, null: false

      t.timestamps
    end
  end
end
