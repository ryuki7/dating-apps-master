# frozen_string_literal: true

class Task < ApplicationRecord
  has_many :date_schedule_tasks, dependent: :destroy

  validates :name, presence: true, uniqueness: true
  validates :point, presence: true
end
