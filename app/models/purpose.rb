class Purpose < ApplicationRecord
  has_many :steps, dependent: :destroy
  has_many :app_purposes, dependent: :destroy
  has_many :date_plans, dependent: :destroy
  has_many :targets, dependent: :destroy

  validates :name, presence: true

  def pulldown_selection_color
    case self.id
    when 1
      'make_girlfriend'
    when 2
      'play'
    when 3
      'super_play'
    end
  end
end
