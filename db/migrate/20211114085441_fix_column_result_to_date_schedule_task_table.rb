class FixColumnResultToDateScheduleTaskTable < ActiveRecord::Migration[6.0]
  def change
    remove_column  :date_schedule_tasks, :result, :string
    rename_column :date_schedule_tasks, :result_date_change_migration, :result
  end
end
