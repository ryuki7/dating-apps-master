class DatePlanPlace < ApplicationRecord
  belongs_to :date_plan
  belongs_to :place

  validates :order, presence: true
end
