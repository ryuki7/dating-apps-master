# frozen_string_literal: true

class Place < ApplicationRecord
  has_many :date_plan_places, dependent: :destroy

  validates :name, presence: true
end
