class Target < ApplicationRecord
  belongs_to :app
  belongs_to :appearance
  belongs_to :purpose
  belongs_to :job
  belongs_to :personality
  belongs_to :user

  has_many :date_schedules, dependent: :destroy

  validates :name, presence: true
  validates :favorability_rating, presence: true
  validates :progress_rating, presence: true
end
