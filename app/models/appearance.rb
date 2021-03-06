# frozen_string_literal: true

class Appearance < ApplicationRecord
  has_many :targets, dependent: :destroy

  validates :name, presence: true
  validates :image, presence: true
end
