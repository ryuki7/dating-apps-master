class DatePlan < ApplicationRecord
  belongs_to :purpose
  has_many :date_plan_place

  validates :name, presence: true
  validates :period, presence: true
  validates :recommend_condition, presence: true
  validates :description, presence: true
  validates :level, presence: true
end
