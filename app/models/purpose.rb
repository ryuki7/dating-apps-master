class Purpose < ApplicationRecord
  has_many :steps
  has_many :app_purposes
  has_many :date_plans
  has_many :targets

  validates :name, presence: true
end
