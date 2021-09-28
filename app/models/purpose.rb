class Purpose < ApplicationRecord
  has_many :steps
  has_many :app_purposes
  has_many :date_plan
  has_many :targets

  validates :name, presence: true
end
