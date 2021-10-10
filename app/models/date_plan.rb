class DatePlan < ApplicationRecord
  belongs_to :purpose
  has_many :date_plan_places
  has_many :date_schedules

  validates :name, presence: true
  validates :period, presence: true
  validates :detail_information, presence: true
  validates :description, presence: true
  validates :date_count_level, presence: true
  validates :popular_rating_level, presence: true
end
