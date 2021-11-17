class Purpose < ApplicationRecord
  has_many :steps, dependent: :destroy
  has_many :app_purposes, dependent: :destroy
  has_many :date_plans, dependent: :destroy
  has_many :targets, dependent: :destroy

  validates :name, presence: true
end
