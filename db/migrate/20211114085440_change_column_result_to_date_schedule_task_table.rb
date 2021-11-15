class ChangeColumnResultToDateScheduleTaskTable < ActiveRecord::Migration[6.0]
  def change
    add_column  :date_schedule_tasks, :result_date_change_migration, :integer, default: 0, null: false
  end
end
