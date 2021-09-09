class Purpose < ApplicationRecord
  has_many :steps
  has_many :app_purposes
  has_many :date_plan

  validates :name, presence: true
end
