class Task < ApplicationRecord
  has_many :date_schedule_tasks

  validates :name, presence: true, uniqueness: true
  validates :point, presence: true
end
