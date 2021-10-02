class DateSchedule < ApplicationRecord
  belongs_to :date_plan
  belongs_to :target
  belongs_to :user

  validates :appointment, presence: true
  validates :report_confirmation, presence: true
end
