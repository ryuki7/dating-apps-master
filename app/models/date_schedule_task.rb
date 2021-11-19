# frozen_string_literal: true

class DateScheduleTask < ApplicationRecord
  belongs_to :task
  belongs_to :date_schedule

  validates :result, presence: true

  enum result: { not_implement: 0, success: 1, fail: 2 }

  class << DateScheduleTask
    def create_fail_tasks(date_schedule, fail_tasks_id_array_integer, params)
      fail_tasks_id_array_integer.each do |i|
        symbol = "result_#{i}".to_sym
        DateScheduleTask.create!(task_id: i, date_schedule_id: date_schedule.id, result: params[symbol].to_i)
      end
    end

    def date_task_point_calculate(date_schedule_tasks_success_array)
      date_task_point_total = 0
      date_schedule_tasks_success_array.each do |date_schedule_task_success|
        date_task_point_total += date_schedule_task_success.task.point
      end
      date_task_point_total
    end
  end
end
