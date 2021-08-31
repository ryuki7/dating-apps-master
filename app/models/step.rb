class Step < ApplicationRecord
  belongs_to :purpose

  validates :name, presence: true
  validates :description, presence: true
end
