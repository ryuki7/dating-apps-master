class DateSchedule < ApplicationRecord
  has_many :date_schedule_tasks, dependent: :destroy

  belongs_to :date_plan
  belongs_to :target
  belongs_to :user

  validates :appointment, presence: true
  validates :report_confirmation, presence: true

  enum report_confirmation: { unreported: 0, reported: 1 }

  def appointment_date_class_create
    split_blank_array = self.appointment.split
    split_month_and_day = split_blank_array[1].split("月")
    appointment_str = "#{split_blank_array[0].gsub(/[^\d]/, "")}-#{split_month_and_day[0]}-#{split_month_and_day[1].gsub(/[^\d]/, "")}"
    Date.parse(appointment_str)
  end

  def fail_tasks_id_array_get
    fail_tasks_id_array = []
    self.date_schedule_tasks.each do |date_schedule_task|
      fail_tasks_id_array.push(date_schedule_task.task.id) if date_schedule_task.fail? || date_schedule_task.not_implement?
    end
    return fail_tasks_id_array
  end
end
