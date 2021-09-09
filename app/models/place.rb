class Place < ApplicationRecord
  has_many :date_plan_place

  validates :name, presence: true
end
