class Appearance < ApplicationRecord
  has_many :targets

  validates :name, presence: true
  validates :image, presence: true
end
