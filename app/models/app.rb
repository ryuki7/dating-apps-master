class App < ApplicationRecord
  has_many :app_diagnostics, dependent: :destroy

  validates :name, presence: true, uniqueness: true
  validates :strategy_description, presence: true
  validates :icon, presence: true
  validates :diagnostic_allocation, presence: true, uniqueness: true
  validates :diagnostic_description, presence: true
end
