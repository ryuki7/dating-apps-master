class Personality < ApplicationRecord
  has_many :targets, dependent: :destroy

  validates :name, presence: true
end
