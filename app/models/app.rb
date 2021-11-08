class App < ApplicationRecord
  has_many :app_diagnostics, dependent: :destroy
  has_many :app_purposes, dependent: :destroy
  has_many :targets, dependent: :destroy

  validates :name, presence: true, uniqueness: true
  validates :strategy_description, presence: true
  validates :icon_image, presence: true
  validates :diagnostic_allocation, presence: true, uniqueness: true
  validates :diagnostic_description, presence: true

  def pulldown_selection_color
    case self.id
    when 1
      'pairs'
    when 2
      'with'
    when 3
      'tapple'
    when 4
      'tinder'
    end
  end
end
