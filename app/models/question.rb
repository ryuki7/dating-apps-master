class Question < ApplicationRecord
  has_many :answers, dependent: :destroy

  validates :description, presence: true
end
