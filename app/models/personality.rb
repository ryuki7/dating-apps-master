class Personality < ApplicationRecord
  has_many :targets

  validates :name, presence: true
end
