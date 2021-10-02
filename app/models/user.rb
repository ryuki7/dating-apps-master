class User < ApplicationRecord
  has_many :app_diagnostics, dependent: :destroy
  has_many :targets, dependent: :destroy
  has_many :date_schedules, dependent: :destroy

  validates :line_id, presence: true, uniqueness: true
  validates :role, presence: true
end
