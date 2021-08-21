class Answer < ApplicationRecord
  belongs_to :question

  validates :description, presence: true
  validates :allocation, presence: true
end
