class CreateDateScheduleTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :date_schedule_tasks do |t|
      t.references :task, null: false, foreign_key: true
      t.references :date_schedule, null: false, foreign_key: true
      t.string :result, null: false

      t.timestamps
    end
  end
end
