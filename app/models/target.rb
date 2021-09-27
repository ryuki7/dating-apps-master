class Target < ApplicationRecord
  belongs_to :app
  belongs_to :appearance
  belongs_to :purpose
  belongs_to :job
  belongs_to :personality
  belongs_to :user

  validates :name, presence: true
end
