class DateScheduleTask < ApplicationRecord
  belongs_to :task
  belongs_to :date_schedule

  validates :result, presence: true
end
