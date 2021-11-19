# frozen_string_literal: true

class Step < ApplicationRecord
  belongs_to :purpose

  validates :name, presence: true
  validates :description, presence: true
  validates :description_point, presence: true
end
