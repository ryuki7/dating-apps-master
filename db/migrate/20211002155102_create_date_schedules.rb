class CreateDateSchedules < ActiveRecord::Migration[6.0]
  def change
    create_table :date_schedules do |t|
      t.string :appointment, null: false
      t.references :date_plan, null: false, foreign_key: true
      t.references :target, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.integer :report_confirmation, default: 0, null: false

      t.timestamps
    end
  end
end
