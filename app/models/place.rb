class Place < ApplicationRecord
  has_many :date_plan_places

  validates :name, presence: true
end
