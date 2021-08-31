class Purpose < ApplicationRecord
  has_many :steps
  has_many :app_purposes

  validates :name, presence: true
end
