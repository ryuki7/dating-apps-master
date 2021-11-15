class Target < ApplicationRecord
  belongs_to :app
  belongs_to :appearance
  belongs_to :purpose
  belongs_to :job
  belongs_to :personality
  belongs_to :user

  has_many :date_schedules, dependent: :destroy

  validates :name, presence: true, length: { maximum: 4 }
  validates :favorability_rating, presence: true
  validates :progress_rating, presence: true

  def create_favorability_rating(date_count_integer, date_task_point_total, date_schedule, essential_task_1, essential_task_2)
    favorability_rating = 0
    date_schedule_essential_task_1 = DateScheduleTask.find_by(date_schedule_id: date_schedule.id, task_id: essential_task_1.id)
    date_schedule_essential_task_2 = DateScheduleTask.find_by(date_schedule_id: date_schedule.id, task_id: essential_task_2.id)

    case date_count_integer
    when 1
      favorability_rating = 30
      favorability_rating = favorability_rating + 15 if date_schedule_essential_task_2.success?
      favorability_rating = favorability_rating + 5 if date_schedule_essential_task_1.success?
    when 2
      favorability_rating = favorability_rating + 10 if date_schedule_essential_task_2.success?
    when 3
      favorability_rating = favorability_rating + 10 if date_schedule_essential_task_2.success?
    end

    favorability_rating = favorability_rating - 15 if date_schedule_essential_task_1.fail? || date_schedule_essential_task_1.not_implement?
    favorability_rating = favorability_rating - 5 if date_schedule_essential_task_2.fail? || date_schedule_essential_task_2.not_implement?

    favorability_rating = favorability_rating + date_task_point_total / 2.5
    self.favorability_rating = self.favorability_rating + favorability_rating

    # 好感度(favorability_rating)は、MAXで100%とする
    if self.favorability_rating >= 100
      self.favorability_rating = 100
    end
    self.save!
  end

  def create_progress_rating(date_count_integer, date_task_point_total)
    progress_rating = 0

    case date_count_integer
    when 1
      progress_rating = 20
    when 2
      progress_rating = 8
    when 3
      progress_rating = 2
    when 4
      progress_rating = 2
    end

    progress_rating = progress_rating + date_task_point_total
    self.progress_rating = self.progress_rating + progress_rating

    # 進展度(progress_rating)は、MAXで100%とする
    if self.progress_rating >= 100 
      self.progress_rating = 100
    end
    self.save!
  end
end
